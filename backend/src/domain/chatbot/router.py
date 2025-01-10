from fastapi import APIRouter, UploadFile, File, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from src.domain.chatbot.dto import ChatRequest, ChatResponse
from src.domain.chatbot.service import ChatbotService
from src.dependencies.auth import verify_token  # 토큰 검증 함수

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])
security = HTTPBearer()

chatbot_service = ChatbotService()

# ✅ PDF 업로드 (JWT 인증 필요)
@router.post("/upload", summary="PDF 업로드 및 처리")
async def upload_pdf(
    file: UploadFile = File(...),
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    # ✅ 토큰 검증
    verify_token(credentials.credentials)

    # ✅ 파일 업로드 및 처리
    await chatbot_service.upload_pdf(file)

    return {"message": "PDF 업로드 및 처리 완료"}

# ✅ 질문 API (JWT 인증 필요)
@router.post("/ask", response_model=ChatResponse, summary="질문하기")
async def ask_question(
    request: ChatRequest,
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    # ✅ 토큰 검증
    verify_token(credentials.credentials)

    # ✅ 질문 처리
    answer = await chatbot_service.ask_question(request.question)

    return ChatResponse(answer=answer)