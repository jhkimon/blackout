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
    async def update_synectics_words(email: str, word_a: str, word_b: str):
        db = get_database()
        await db["users"].update_one(
            {"email": email},
            {"$set": {"word_a": word_a, "word_b": word_b}}
        )

    @staticmethod
    async def find_by_slack_id(slack_id: str):
        db = get_database()
        return await db["users"].find_one({"slack_id": slack_id})

    @staticmethod
    async def update_slack_id(email: str, slack_id: str):
        db = get_database()
        await db["users"].update_one({"email": email}, {"$set": {"slack_id": slack_id}})
