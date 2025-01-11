from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
import os

# ✅ Slack WebClient 초기화
slack_client = WebClient(token=os.getenv("SLACK_BOT_TOKEN"))

# ✅ Slack 메시지 전송 함수
def send_slack_message(channel_id: str, text: str):
    try:
        response = slack_client.chat_postMessage(channel=channel_id, text=text)
        print(f"✅ Slack 메시지 전송 성공: {response.data}")
    except SlackApiError as e:
        print(f"❌ Slack API 에러: {e.response['error']}")

# ✅ Slack 최근 메시지 조회
def get_recent_messages(channel_id: str, limit: int = 10):
    try:
        response = slack_client.conversations_history(channel=channel_id, limit=limit)
        messages = [msg['text'] for msg in response['messages'] if 'subtype' not in msg]
        return messages
    except SlackApiError as e:
        print(f"❌ Slack 메시지 조회 실패: {e.response['error']}")
        return []