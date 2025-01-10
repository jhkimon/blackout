from fastapi import APIRouter, Depends, Request, HTTPException
from src.domain.user.dto import UserRegisterDTO, UserLoginDTO
from src.domain.user.service import UserService
from src.auth.jwt_handler import create_access_token, blacklist_token
from src.dependencies.auth import get_current_user
from src.core.exceptions import (
    DataConflictError,
    DataNotFoundError,
    ValidationError
)

router = APIRouter(prefix="/user", tags=["User"])

# ✅ 회원가입 API
@router.post("/register", summary="회원가입")
async def register(user_data: UserRegisterDTO):
    user_id = await UserService.register_user(user_data.email, user_data.username, user_data.password)
    return {"message": "회원가입 성공", "user_id": user_id}

# ✅ 로그인 API
@router.post("/login", summary="로그인")
async def login(user_data: UserLoginDTO):
    user = await UserService.login_user(user_data.email, user_data.password)
    token = create_access_token({"user_id": str(user["_id"])})
    return {"access_token": token, "token_type": "bearer"}

# ✅ 로그아웃 API
@router.post("/logout", summary="로그아웃")
async def logout(user: dict = Depends(get_current_user)):
    token = user.get("token")
    if not token:
        raise ValidationError("유효하지 않은 토큰입니다.")

    await blacklist_token(token)
    return {"message": "성공적으로 로그아웃되었습니다."}

# ✅ 로그인한 유저 정보 조회 API
@router.get("/me", summary="내 정보 조회")
async def read_users_me(current_user: dict = Depends(get_current_user)):
    return {"user": current_user}