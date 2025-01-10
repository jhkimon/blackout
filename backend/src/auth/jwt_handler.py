import jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext
from src.database.redis import get_connection

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def blacklist_token(token: str):
    redis = await get_connection()
    await redis.setex(f"blacklist:{token}", ACCESS_TOKEN_EXPIRE_MINUTES * 60, "true")

async def is_token_blacklisted(token: str):
    redis = await get_connection()
    return await redis.exists(f"blacklist:{token}")