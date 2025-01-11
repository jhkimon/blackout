from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
from src.database.redis import get_connection
from src.core.exceptions import AuthenticationError
import os
import logging

# 환경변수에서 보안 키 로드
SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
ALGORITHM = os.getenv("ALGORITHM", "HS256")

# JWT Bearer 스키마
security = HTTPBearer()

# 로깅 설정
logger = logging.getLogger(__name__)
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="❌ 인증 토큰이 필요합니다.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        # ✅ Redis에서 블랙리스트 확인
        redis = get_connection()
        if redis:
            is_blacklisted = await redis.get(f"blacklist:{token}")
            if is_blacklisted:
                logger.warning("블랙리스트에 등록된 토큰입니다.")
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="블랙리스트에 등록된 토큰입니다.",
                )

        # ✅ JWT 토큰 디코드 및 검증
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])

        user_id: str = payload.get("user_id")
        user_email: str = payload.get("email")  # ✅ 이메일 추가

        if user_id is None or user_email is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="유효하지 않은 토큰입니다.",
            )

        # ✅ user_id와 email 반환
        return {
            "user_id": user_id,
            "email": user_email
        }

    except jwt.ExpiredSignatureError:
        logger.error("토큰이 만료되었습니다.")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="토큰이 만료되었습니다.",
        )

    except jwt.InvalidTokenError:
        logger.error("유효하지 않은 토큰입니다.")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="유효하지 않은 토큰입니다.",
        )