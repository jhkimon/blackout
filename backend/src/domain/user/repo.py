from src.database.mongodb import get_database
from src.domain.user.model import User

class UserRepository:
    @staticmethod
    async def find_by_email(email: str):
        db = get_database()
        return await db["users"].find_one({"email": email})

    @staticmethod
    async def create_user(user: User):
        db = get_database()
        user_dict = user.dict()
        result = await db["users"].insert_one(user_dict)
        return str(result.inserted_id)

    @staticmethod
    async def update_user_topic(email: str, topic: str):
        db = get_database()
        await db["users"].update_one({"email": email}, {"$set": {"topic": topic}})
    
    @staticmethod
    async def update_user_deeplink(email: str, deeplink: str):
        db = get_database()
        await db["users"].update_one({"email": email}, {"$set": {"deeplink": deeplink}})

    @staticmethod
    async def find_topic_by_email(email: str):
        db = get_database()
        user = await db["users"].find_one({"email": email})
        return user.get("topic") if user else None
    
    @staticmethod
    async def update_synectics_words(email: str, word_a: str, word_b: str):
        db = get_database()
        await db["users"].update_one(
            {"email": email},
            {"$set": {"word_a": word_a, "word_b": word_b}}
        )

    @staticmethod
    async def find_by_email(email: str):
        """
        이메일을 기반으로 유저 정보를 조회하는 메서드
        """
        db = get_database()
        return await db["users"].find_one({"email": email})