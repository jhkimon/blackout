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

# 현재 사용자 인증 및 반환
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="❌ 인증 토큰이 필요합니다.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        # Redis에서 블랙리스트 확인
        redis = get_connection()
        if redis:
            is_blacklisted = await redis.get(f"blacklist:{token}")
            if is_blacklisted:
                logger.warning("블랙리스트에 등록된 토큰입니다.")
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="블랙리스트에 등록된 토큰입니다.",
                )

        # JWT 토큰 디코드 및 검증 (PyJWT)
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])

        user_id: str = payload.get("user_id")
        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="유효하지 않은 토큰입니다.",
            )

        # 토큰에서 유저 정보 반환
        return {"user_id": user_id}

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
    
async def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise AuthenticationError("토큰이 만료되었습니다.")
    except jwt.InvalidTokenError:
        raise AuthenticationError("유효하지 않은 토큰입니다.")