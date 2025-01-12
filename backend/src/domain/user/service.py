from src.auth.jwt_handler import hash_password, verify_password
from src.domain.user.model import User
from src.core.exceptions import DataNotFoundError, DataConflictError
from src.domain.synectics.service import generate_distinct_synectics_words
from src.domain.user.repo import UserRepository
from src.domain.slackbot.repo import get_slack_user_email

class UserService:

    @staticmethod
    async def get_user_topic(email: str) -> str:
        """
        사용자의 이메일을 기반으로 주제를 조회합니다.
        """
        user = await UserRepository.find_by_email(email)
        if not user:
            raise DataNotFoundError("해당 이메일의 사용자를 찾을 수 없습니다.")

        topic = user.get("topic") if user.get("topic") else '' 

        return topic
    # ✅ 회원가입
    @staticmethod
    async def register_user(email: str, username: str, password: str, slack_id: str = None):
        existing_user = await UserRepository.find_by_email(email)
        if existing_user:
            raise DataConflictError("이미 등록된 이메일입니다.")

        hashed_pw = hash_password(password)
        new_user = User(email=email, username=username, hashed_password=hashed_pw, slack_id=slack_id)
        return await UserRepository.create_user(new_user)

    # ✅ 주제 업데이트
    @staticmethod
    async def update_topic(email: str, topic: str):
        await UserRepository.update_user_topic(email, topic)

    # ✅ 로그인
    @staticmethod
    async def login_user(email: str, password: str):
        user = await UserRepository.find_by_email(email)
        if not user:
            raise DataNotFoundError("존재하지 않는 이메일입니다.")
        if not verify_password(password, user['hashed_password']):
            raise DataNotFoundError("잘못된 비밀번호입니다.")
        return user

    # ✅ 사용자 정보 조회
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
            "word_b": user.get("word_b", "아직 단어가 없습니다.")
        }

    # ✅ Slack ID로 사용자 조회
    @staticmethod
    async def get_user_by_slack_id(slack_id: str):
        return await UserRepository.find_by_slack_id(slack_id)

    # ✅ Slack 계정 연결
    @staticmethod
    async def link_slack_to_user(slack_user_id: str):
        email = await get_slack_user_email(slack_user_id)
        if not email:
            raise DataNotFoundError("Slack 사용자 이메일 조회 실패")

        user = await UserService.get_user_by_slack_id(slack_user_id)
        if not user:
            await UserService.register_user(
                email=email,
                username=email.split('@')[0],
                password="default",
                slack_id=slack_user_id
            )

    # ✅ 시네틱스 단어 생성 및 업데이트
    @staticmethod
    async def generate_and_update_synectics_words(email: str):
        user = await UserRepository.find_by_email(email)
        if not user:
            raise DataNotFoundError("해당 이메일의 유저를 찾을 수 없습니다.")

        topic = user.get("topic") if user.get("topic") else ''

        word_a, word_b = await generate_distinct_synectics_words(topic)
        await UserRepository.update_synectics_words(email, word_a, word_b)
        return {"word_a": word_a, "word_b": word_b}
    
    @staticmethod
    async def get_user_topic_by_slack_id(slack_id: str) -> str:
        """
        Slack ID를 기반으로 사용자의 주제를 조회합니다.
        """
        user = await UserRepository.find_by_slack_id(slack_id)
        if not user:
            raise DataNotFoundError("해당 Slack ID의 사용자를 찾을 수 없습니다.")

        topic = user.get("topic")
        if not topic:
            raise DataNotFoundError("유저의 주제가 설정되어 있지 않습니다.")

        return topic