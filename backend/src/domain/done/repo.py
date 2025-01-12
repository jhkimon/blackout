from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
import os

# ✅ Slack 클라이언트 초기화
slack_client = WebClient(token=os.getenv("SLACK_BOT_TOKEN"))

# ✅ 최근 Slack 메시지 조회
async def get_recent_messages(channel_id: str, limit: int = 10):
    try:
        response = slack_client.conversations_history(channel=channel_id, limit=limit)
        messages = [msg['text'] for msg in response['messages'] if 'subtype' not in msg]
        return messages
    except SlackApiError as e:
        print(f"❌ Slack 메시지 조회 실패: {e.response['error']}")
        return []

# ✅ Slack 메시지 전송
async def send_slack_message(channel_id: str, text: str):
    try:
        slack_client.chat_postMessage(channel=channel_id, text=text)
        print(f"✅ Slack 메시지 전송 성공")
    except SlackApiError as e:
        print(f"❌ Slack 메시지 전송 실패: {e.response['error']}")