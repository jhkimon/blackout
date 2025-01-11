from pydantic import BaseModel

# Slack 명령어 요청 데이터
class SlackCommandRequest(BaseModel):
    command: str
    text: str
    user_id: str
    channel_id: str
    response_url: str