from src.domain.synectics.service import generate_synectics_sentence
from src.domain.slackbot.repo import send_slack_message
from src.domain.slackbot.repo import send_slack_message_with_blocks
from src.domain.slackbot.utils import format_summary_with_buttons
from src.domain.slackbot.repo import send_slack_message_async
from src.domain.user.repo import UserRepository
from src.domain.summary.service import generate_summary
from src.domain.slackbot.repo import get_slack_user_email
from src.core.exceptions import DataNotFoundError
from src.domain.user.service import UserService
import asyncio



# ✅ 버튼 액션 처리
async def handle_button_action(payload: dict):
    action_id = payload["actions"][0]["action_id"]
    channel_id = payload["channel"]["id"]

    if action_id == "done_action":
        await send_slack_message_async(channel_id, "📂 대화가 성공적으로 정리되었습니다!")
    elif action_id == "resynectics_action":
        await send_slack_message_async(channel_id, "🔄 다시 발상하기가 시작되었습니다!")
    else:
        await send_slack_message_async(channel_id, "❗ 알 수 없는 버튼 액션입니다.")

async def send_message_with_buttons_service(channel_id: str, summary: str):
    # ✅ 요약 결과를 포함한 버튼 메시지 포맷 생성
    message_payload = format_summary_with_buttons(summary)

    # ✅ 버튼 포함 메시지 전송
    await send_slack_message_with_blocks(channel_id, message_payload["blocks"])

# ✅ "대화 정리하기" 처리 함수
async def process_done_action(user_id: str, channel_id: str):
    try:
        # ✅ 유저 이메일 조회
        user = await UserRepository.find_by_slack_id(user_id)
        if not user or "topic" not in user:
            topic = ''
        else:
            topic = user["topic"]

        # ✅ Slack에 요약 메시지 전송
        summary_message = f"📂 현재 주제는 *'{topic}'*였습니다. 대화가 성공적으로 정리되었습니다!"
        await send_slack_message_async(channel_id, summary_message)

    except Exception as e:
        await send_slack_message_async(channel_id, f"❌ 대화 정리 실패: {str(e)}")


# ✅ "다시 발상하기" 처리 함수
async def process_resynectics_action(user_id: str, channel_id: str):
    try:
        # ✅ 최근 Slack 메시지 불러오기
        recent_messages = await UserRepository.get_recent_messages(channel_id)

        # ✅ 메시지에서 두 단어 추출 및 시네틱스 문장 생성
        synectics_sentence = await generate_synectics_sentence(recent_messages)

        # ✅ Slack으로 시네틱스 문장 전송
        await send_slack_message_async(channel_id, f"💡 *다시 발상한 결과:*\n\n{synectics_sentence}")

    except Exception as e:
        await send_slack_message_async(channel_id, f"❌ 다시 발상하기 실패: {str(e)}")

async def process_done_action(user_id: str, channel_id: str):
    try:
        # ✅ Slack ID로 사용자 조회
        user = await UserService.get_user_by_slack_id(user_id)

        # ✅ 사용자의 주제를 불러오기
        topic = user.get("topic", "주제가 설정되지 않았습니다.")

        # ✅ 주제와 관련된 피드백 전송
        await send_slack_message_async(channel_id, f"📂 대화가 정리되었습니다! 현재 주제는 *{topic}*입니다.")
    
    except ValueError as e:
        await send_slack_message_async(channel_id, f"❌ 대화 정리 실패: {str(e)}")
    except Exception as e:
        await send_slack_message_async(channel_id, f"❌ 대화 정리 중 오류 발생: {str(e)}")

async def link_slack_to_user(slack_user_id: str):
    email = await get_slack_user_email(slack_user_id)
    if not email:
        raise DataNotFoundError("Slack 사용자 이메일 조회 실패")

    user = await UserService.get_user_by_slack_id(slack_user_id)
    if not user:
        await UserService.register_user(
            email=email,
            username=email.split('@')[0],
            password="default",
            slack_id=slack_user_id
        )