from fastapi import APIRouter, Depends, Request, HTTPException, Query, Form
from src.domain.user.service import UserService
from src.domain.user.dto import UserRegisterDTO, UserLoginDTO
from src.domain.user.service import UserService
from src.auth.jwt_handler import create_access_token, blacklist_token
from src.dependencies.auth import get_current_user
from src.core.exceptions import (
    DataConflictError,
    DataNotFoundError,
    ValidationError
)
from urllib.parse import unquote
from src.domain.synectics.service import generate_distinct_synectics_words

router = APIRouter(prefix="/user", tags=["User"])

# ✅ 회원가입 API
@router.post("/register", summary="회원가입")
async def register(user_data: UserRegisterDTO, slack_id: str = Form(None)):
    try:
        user_id = await UserService.register_user(
            user_data.email,
            user_data.username,
            user_data.password,
            slack_id  # ✅ Slack ID 저장
        )
        return {"message": "회원가입 성공", "user_id": user_id}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
# ✅ 로그인 API

@router.post("/login", summary="로그인")
async def login(user_data: UserLoginDTO):
    user = await UserService.login_user(user_data.email, user_data.password)
    token = create_access_token({
        "user_id": str(user["_id"]),
        "email": user["email"]
    })
    return {"access_token": token, "token_type": "bearer"}

# ✅ 로그아웃 API
@router.post("/logout", summary="로그아웃")
async def logout(user: dict = Depends(get_current_user)):
    token = user.get("token")
    if not token:
        raise ValidationError("유효하지 않은 토큰입니다.")

    await blacklist_token(token)
    return {"message": "성공적으로 로그아웃되었습니다."}

# ✅ 주제 업데이트
@router.post("/topic")
async def update_topic(email: str, topic: str):
    await UserService.update_topic(email, topic)
    return {"message": "주제 업데이트 성공"}

# ✅ 사용자 정보 조회 API
@router.get("/info", summary="내 정보 조회")
async def get_user_info(current_user: dict = Depends(get_current_user)):
    try:
        user_info = await UserService.get_user_info(current_user["email"])
        return {"user_info": user_info}
    except DataNotFoundError:
        raise HTTPException(status_code=404, detail="사용자 정보를 찾을 수 없습니다.")
    
@router.post("/synectics/generate")
async def generate_synectics(email: str = Query(...)):
    # ✅ 이메일 값 검증
    if not email:
        raise HTTPException(status_code=400, detail="❗ 이메일이 제공되지 않았습니다.")

    # ✅ 이메일 디코딩
    decoded_email = unquote(email)

    # ✅ UserService를 통한 유저 조회
    user = await UserService.get_user_by_email(decoded_email)
    if not user:
        raise HTTPException(status_code=404, detail="❗ 해당 이메일의 유저를 찾을 수 없습니다.")

    # ✅ 유저의 topic 값 확인
    topic = user.get("topic")
    if not topic:
        raise HTTPException(status_code=404, detail="❗ 유저의 주제가 설정되어 있지 않습니다.")

    # ✅ 주제를 기반으로 두 단어 생성
    try:
        word_a, word_b = await generate_distinct_synectics_words(topic)
    except ValueError as e:
        raise HTTPException(status_code=500, detail=str(e))

    # ✅ 생성된 단어를 유저 정보에 업데이트
    await UserService.update_synectics_words(decoded_email, word_a, word_b)

    return {
        "detail": "✅ 유저의 주제에서 두 단어가 성공적으로 생성되었습니다.",
        "word_a": word_a,
        "word_b": word_b
    }