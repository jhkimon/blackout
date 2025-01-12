from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
from fastapi import HTTPException
import os

# ✅ Slack WebClient 초기화
slack_client = WebClient(token=os.getenv("SLACK_BOT_TOKEN"))

async def get_user_email(user_id: str) -> str:
    try:
        response = slack_client.users_info(user=user_id)
        email = response["user"]["profile"]["email"]
        return email
    except SlackApiError as e:
        print(f"❌ Slack 사용자 이메일 조회 실패: {e.response['error']}")
        raise HTTPException(status_code=500, detail="Slack 사용자 이메일 조회 실패")
    
async def get_slack_user_email(user_id: str) -> str:
    try:
        response = slack_client.users_info(user=user_id)
        return response["user"]["profile"]["email"]
    except SlackApiError as e:
        print(f"❌ Slack 사용자 이메일 조회 실패: {e.response['error']}")
        return None
    
async def send_message_with_buttons(channel_id: str, summary: str):
    message_payload = format_summary_with_buttons(summary)

    try:
        response = slack_client.chat_postMessage(
            channel=channel_id,
            blocks=message_payload["blocks"],
            text="📝 요약 결과입니다!"  # Fallback 텍스트
        )
        print(f"✅ 버튼 포함 메시지 전송 성공: {response['ts']}")
    except SlackApiError as e:
        print(f"❌ 버튼 포함 메시지 전송 실패: {e.response['error']}")

        
# ✅ 버튼 포함 메시지 전송 함수
async def send_slack_message_with_blocks(channel_id: str, blocks: list, text: str = "📝 요약 결과입니다!"):
    """
    Slack에 버튼 포함 메시지를 전송합니다.
    """
    try:
        response = slack_client.chat_postMessage(
            channel=channel_id,
            blocks=blocks,
            text=text  # ✅ Fallback 텍스트
        )
        print(f"✅ 버튼 포함 메시지 전송 성공: {response['ts']}")
    except SlackApiError as e:
        print(f"❌ 버튼 포함 메시지 전송 실패: {e.response['error']}")
        
# ✅ Slack 메시지 전송 함수
def send_slack_message(channel_id: str, text: str):
    try:
        slack_client.chat_postMessage(channel=channel_id, text=text)
        print(f"✅ Slack 메시지 전송 성공: {text}")
    except SlackApiError as e:
        print(f"❌ Slack 메시지 전송 실패: {e.response['error']}")

from slack_sdk.web.async_client import AsyncWebClient

# ✅ Slack 비동기 클라이언트
slack_async_client = AsyncWebClient(token=os.getenv("SLACK_BOT_TOKEN"))

async def send_slack_message_async(channel_id: str, text: str):
    """
    Slack 메시지를 비동기적으로 전송합니다. (대화 정리하기, 다시 발상하기)
    """
    try:
        await slack_async_client.chat_postMessage(
            channel=channel_id,
            text=text
        )
        print(f"✅ [비동기] Slack 메시지 전송 성공: {text}")
    except SlackApiError as e:
        print(f"❌ [비동기] Slack 메시지 전송 실패: {e.response['error']}")
        
def format_summary_with_buttons(summary: str) -> dict:
    return {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": f"📝 *요약 결과:*\n{summary}"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {"type": "plain_text", "text": "📂 대화 정리하기"},
                        "value": "done",
                        "action_id": "done_action"
                    },
                    {
                        "type": "button",
                        "text": {"type": "plain_text", "text": "🔄 다시 발상하기"},
                        "value": "resynectics",
                        "action_id": "resynectics_action"
                    }
                ]
            }
        ]
    }

async def send_message_with_buttons(channel_id: str, summary: str):
    message_payload = format_summary_with_buttons(summary)

    try:
        slack_client.chat_postMessage(
            channel=channel_id,
            blocks=message_payload["blocks"],  # ✅ 버튼 포함 블록 전송
            text="📝 요약 결과입니다!"  # ✅ Fallback 텍스트
        )
        print(f"✅ 버튼 포함 메시지 전송 성공")
    except SlackApiError as e:
        print(f"❌ 버튼 포함 메시지 전송 실패: {e.response['error']}")


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