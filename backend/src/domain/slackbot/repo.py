from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
import os

# ✅ Slack WebClient 초기화
slack_client = WebClient(token=os.getenv("SLACK_BOT_TOKEN"))

# ✅ Slack 메시지 전송 함수
def send_slack_message(channel_id: str, text: str):
    """
    Slack 채널로 메시지를 전송합니다.
    """
    try:
        response = slack_client.chat_postMessage(channel=channel_id, text=text)
        print(f"✅ Slack 메시지 전송 성공: {response.data}")
    except SlackApiError as e:
        print(f"❌ Slack API 에러: {e.response['error']}")

# ✅ Slack 최근 메시지 조회 함수
def get_recent_messages(channel_id: str, limit: int = 10):
    """
    Slack 채널의 최근 메시지를 조회합니다.
    """
    try:
        response = slack_client.conversations_history(channel=channel_id, limit=limit)
        messages = [msg['text'] for msg in response['messages'] if 'subtype' not in msg]
        return messages
    except SlackApiError as e:
        print(f"❌ Slack 메시지 조회 실패: {e.response['error']}")
        return []

# ✅ Slack 팀 및 채널 정보 조회 함수
def get_slack_team_info():
    """
    Slack 팀 정보 및 채널 목록을 조회합니다.
    """
    try:
        team_info = slack_client.team_info()
        team_id = team_info["team"]["id"]
        team_name = team_info["team"]["name"]

        channels_response = slack_client.conversations_list(types="public_channel,private_channel")
        channels = [
            {"name": channel["name"], "id": channel["id"]}
            for channel in channels_response["channels"]
        ]

        return {
            "team_id": team_id,
            "team_name": team_name,
            "channels": channels
        }
    except SlackApiError as e:
        print(f"❌ Slack 팀/채널 정보 조회 실패: {e.response['error']}")
        return {}