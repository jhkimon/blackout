from src.database.mongodb import get_database
from src.domain.user.model import User

class UserRepository:
    @staticmethod
    async def find_by_email(email: str):
        db = get_database()
        return await db["users"].find_one({"email": email})
    
    async def create_user(user: User):
        db = get_database()
        user_dict = user.dict()
        
        result = await db["users"].insert_one(user_dict)
        return str(result.inserted_id)