from pydantic import BaseModel, EmailStr
from typing import Optional

class User(BaseModel):
    email: EmailStr
    username: str
    hashed_password: str
    slack_id: Optional[str] = None  # ✅ Slack ID 추가
    topic: Optional[str] = None
    deeplink: Optional[str] = None
    word_a: Optional[str] = None
    word_b: Optional[str] = None