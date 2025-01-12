from fastapi import APIRouter
from src.domain.done.service import generate_done_summary

done_router = APIRouter(prefix="/done")

# ✅ "대화 정리하기" 버튼 액션 처리
@done_router.post("/action")
async def handle_done_action(payload: dict):
    try:
        user_id = payload["user"]["id"]
        channel_id = payload["channel"]["id"]

        # ✅ Slack ID로 유저 이메일 조회
        from src.domain.slackbot.repo import get_user_email
        user_email = await get_user_email(user_id)

        # ✅ 대화 정리 실행
        await generate_done_summary(user_email, channel_id)

        return {"status": "success", "message": "📂 대화가 성공적으로 정리되었습니다!"}

    except Exception as e:
        return {"status": "error", "message": f"❌ 오류 발생: {str(e)}"}