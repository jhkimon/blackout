from fastapi import APIRouter, BackgroundTasks, Form, HTTPException
from src.domain.resynectics.service import regenerate_synectics_sentence
from src.domain.done.repo import send_slack_message

router = APIRouter(prefix="/resynectics", tags=["Resynectics"])

# ✅ 다시 발상하기 API
@router.post("/")
async def resynect_idea(
    background_tasks: BackgroundTasks,
    channel_id: str = Form(...)
):
    try:
        # ✅ 최근 메시지 예시 (실제 서비스에서는 DB에서 조회)
        recent_messages = [
            "기존 아이디어를 새롭게 바꿔볼까?",
            "다른 관점에서 생각해보자."
        ]

        # ✅ 비동기로 시네틱스 문장 생성 및 전송
        background_tasks.add_task(process_resynectics, recent_messages, channel_id)

        return {"response_type": "in_channel", "text": "💡 *새로운 아이디어를 생성 중입니다!*"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"❌ 다시 발상하기 실패: {str(e)}")

# ✅ 시네틱스 문장 생성 및 Slack 전송
async def process_resynectics(recent_messages: list, channel_id: str):
    try:
        synectics_sentence = await regenerate_synectics_sentence(recent_messages)
        await send_slack_message(channel_id, f"💡 *새로운 아이디어:*\n\n{synectics_sentence}")
    except Exception as e:
        await send_slack_message(channel_id, f"❌ 아이디어 생성 실패: {str(e)}")