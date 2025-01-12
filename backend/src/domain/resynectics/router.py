from fastapi import APIRouter, BackgroundTasks, Form, HTTPException, Request
from src.domain.slackbot.repo import send_slack_message_async
from src.domain.done.service import generate_done_summary  # ✅ 서비스 연결
from src.domain.resynectics.service import regenerate_synectics_sentence

router = APIRouter(prefix="/slack", tags=["Slack Interactions"])

# ✅ Slack 인터랙션 핸들러
@router.post("/interactions")
async def handle_interactions(
    request: Request,
    background_tasks: BackgroundTasks
):
    try:
        # ✅ Slack 요청에서 payload 추출 (form-data 형태)
        form_data = await request.form()
        payload = form_data.get("payload")

        if not payload:
            raise HTTPException(status_code=400, detail="❌ 잘못된 요청입니다. Payload가 없습니다.")

        # ✅ payload JSON 파싱
        payload_data = await request.json()
        action_id = payload_data["actions"][0]["action_id"]
        user_id = payload_data["user"]["id"]
        channel_id = payload_data["channel"]["id"]

        # ✅ 액션에 따른 처리 분기
        if action_id == "done_action":  # ✅ 대화 정리하기
            background_tasks.add_task(generate_done_summary, user_id, channel_id)
            return {"response_type": "in_channel", "text": "📂 *대화를 정리 중입니다!*"}
        
        elif action_id == "resynectics_action":  # ✅ 다시 발상하기
            background_tasks.add_task(process_resynectics, channel_id)
            return {"response_type": "in_channel", "text": "💡 *새로운 아이디어를 생성 중입니다!*"}

        else:
            raise HTTPException(status_code=400, detail="❌ 알 수 없는 액션입니다.")

    except Exception as e:
        await send_slack_message_async(channel_id, f"❌ 인터랙션 처리 중 오류 발생: {str(e)}")
        raise HTTPException(status_code=500, detail=f"❌ 인터랙션 처리 중 오류 발생: {str(e)}")

# ✅ 다시 발상하기 실행 함수
async def process_resynectics(channel_id: str):
    try:
        # ✅ 최근 메시지 예시 (실제 구현에서는 DB에서 불러옴)
        recent_messages = [
            "기존 아이디어를 새롭게 바꿔볼까?",
            "다른 관점에서 생각해보자."
        ]

        # ✅ 시네틱스 문장 생성
        synectics_sentence = await regenerate_synectics_sentence(recent_messages)

        # ✅ Slack으로 결과 전송
        await send_slack_message_async(channel_id, f"💡 *새로운 아이디어:*\n\n{synectics_sentence}")

    except Exception as e:
        await send_slack_message_async(channel_id, f"❌ 아이디어 생성 실패: {str(e)}")