from pydantic import BaseModel, EmailStr
from typing import Optional
from bson import ObjectId

class User(BaseModel):
    id: Optional[str] = None
    email: EmailStr
    username: str
    hashed_password: str