from fastapi import APIRouter, Request, Form
from src.domain.slackbot.service import list_ideation_methods, start_ideation, stop_ideation

router = APIRouter(prefix="/slack")

# ✅ /idea 명령어 처리
@router.post("/commands")
async def handle_slack_commands(
    command: str = Form(...),
    text: str = Form(...),
    channel_id: str = Form(...),
):
    args = text.strip().split()

    # ✅ 1. /idea → 전체 아이데이션 목록
    if not args:
        response_text = (
            "*📝 사용 가능한 아이데이션 방식 목록:*\n\n"
            f"{list_ideation_methods()}\n\n"
            "❗ *사용법*\n"
            "`/idea <아이데이션 방식>` - 방식으로 실시간 아이디어 제안\n"
            "`/idea <아이데이션 방식> <주제>` - 특정 주제에 대한 아이디어 제안"
        )
        return {"response_type": "in_channel", "text": response_text}

    # ✅ 2. /idea <아이데이션 방식> (주제 없음)
    elif len(args) == 1:
        method = args[0]
        start_ideation(channel_id, method)
        return {"response_type": "in_channel", "text": f"🚀 *{method}* 방식 아이데이션을 시작합니다!"}

    # ✅ 3. /idea <아이데이션 방식> <주제>
    elif len(args) >= 2:
        method, topic = args[0], " ".join(args[1:])
        start_ideation(channel_id, method, topic)
        return {"response_type": "in_channel", "text": f"🚀 *{method}* 방식으로 '{topic}'에 대한 아이디어를 시작합니다!"}