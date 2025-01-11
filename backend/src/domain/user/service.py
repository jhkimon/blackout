from src.domain.user.repo import UserRepository
from src.auth.jwt_handler import hash_password, verify_password
from src.domain.user.model import User
from src.domain.slackbot.repo import get_slack_team_info
from src.core.exceptions import DataNotFoundError
from src.domain.synectics.service import generate_distinct_synectics_words


class UserService:
    @staticmethod
    async def register_user(email: str, username: str, password: str):
        # ✅ Slack 딥링크 생성
        slack_info = get_slack_team_info()
        deeplink = slack_info.get("deeplink", "")

        hashed_pw = hash_password(password)
        user = User(email=email, username=username, hashed_password=hashed_pw, deeplink=deeplink)
        return await UserRepository.create_user(user)

    @staticmethod
    async def update_topic(email: str, topic: str):
        await UserRepository.update_user_topic(email, topic)

    @staticmethod
    async def login_user(email: str, password: str):
        user = await UserRepository.find_by_email(email)
        if not user:
            raise ValueError("존재하지 않는 이메일입니다.")
        if not verify_password(password, user['hashed_password']):
            raise ValueError("잘못된 이메일 또는 비밀번호입니다.")
        return user
    
    @staticmethod
    async def get_user_topic(email: str):
        topic = await UserRepository.find_topic_by_email(email)
        return topic or "일반적인 주제"
    
    @staticmethod
    async def get_user_info(email: str):
        user = await UserRepository.find_by_email(email)
        if not user:
            raise DataNotFoundError("사용자 정보를 찾을 수 없습니다.")
        return {
            "email": user["email"],
            "username": user["username"],
            "topic": user.get("topic", "주제가 설정되지 않았습니다."),
            "word_a": user.get("word_a", "아직 단어가 없습니다."),
            "word_b": user.get("word_b", "아직 단어가 없습니다."),
        }
    
    @staticmethod
    async def get_user_by_email(email: str):
        """
        이메일을 기반으로 유저를 조회하는 메서드
        """
        user = await UserRepository.find_by_email(email)
        if not user:
            raise DataNotFoundError("❗ 해당 이메일의 유저를 찾을 수 없습니다.")
        return user
    
    @staticmethod
    async def update_synectics_words(email: str, word_a: str, word_b: str):
        user = await UserRepository.find_by_email(email)
        if not user:
            raise DataNotFoundError("존재하지 않는 이메일입니다.")
        
        await UserRepository.update_synectics_words(email, word_a, word_b)

    @staticmethod
    async def generate_and_update_synectics_words(self, email: str):
        """
        주제를 기반으로 두 개의 시네틱스 단어를 생성하고 유저 정보에 업데이트합니다.
        """
        # ✅ 유저 조회
        user = await UserRepository.find_by_email(email)
        if not user:
            raise DataNotFoundError("해당 이메일의 유저를 찾을 수 없습니다.")

        # ✅ 주제 불러오기
        topic = user.get("topic")
        if not topic:
            raise DataNotFoundError("유저의 주제가 설정되어 있지 않습니다.")

        # ✅ 두 단어 생성
        word_a, word_b = await generate_distinct_synectics_words(topic)

        # ✅ 유저 정보 업데이트
        await UserRepository.update_synectics_words(email, word_a, word_b)

        return {"word_a": word_a, "word_b": word_b}
    
