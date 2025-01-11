from pydantic import BaseModel, EmailStr
from typing import Optional

class UserRegisterDTO(BaseModel):
    email: EmailStr
    username: str
    password: str


class UserLoginDTO(BaseModel):
    email: EmailStr
    password: str

class UserResponseDTO(BaseModel):
    id: str
    email: EmailStr
    username: str

class User(BaseModel):
    email: EmailStr
    username: str
    hashed_password: str
    topic: Optional[str] = None
    deeplink: Optional[str] = None
    word_a: Optional[str] = None  # ✅ 시네틱스 단어 A
    word_b: Optional[str] = None  # ✅ 시네틱스 단어 B