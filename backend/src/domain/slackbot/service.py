from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
from src.domain.slackbot.repo import get_all_ideation_methods, get_ideation_method_by_name
from langchain.agents import initialize_agent, AgentType
from langchain.chat_models import ChatOpenAI
from langchain.tools import Tool
import os

# Slack WebClient 초기화
slack_client = WebClient(token=os.getenv("SLACK_BOT_TOKEN"))

# 사용 중인 세션 관리
active_sessions = {}

# ✅ Slack 메시지 전송 함수
def send_slack_message(channel_id: str, text: str):
    try:
        slack_client.chat_postMessage(channel=channel_id, text=text)
    except SlackApiError as e:
        print(f"Slack API 에러: {e.response['error']}")

# ✅ 전체 아이데이션 목록 반환
def list_ideation_methods():
    methods = get_all_ideation_methods()
    return "\n".join([f"• *{method}*: {desc}" for method, desc in methods.items()])

# ✅ LangChain ReAct Agent 초기화
def initialize_react_agent():
    llm = ChatOpenAI(model_name="gpt-4", temperature=0.7)
    brainstorming_tool = Tool(
        name="Brainstorming Tool",
        func=lambda x: f"🔍 '{x}'에 대한 아이디어를 생각 중입니다...",
        description="새로운 아이디어나 문제 해결 방안을 도출합니다."
    )
    return initialize_agent(
        tools=[brainstorming_tool],
        llm=llm,
        agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True
    )

# ✅ 실시간 아이디어 생성 시작
def start_ideation(channel_id: str, method: str, topic: str = None):
    agent = initialize_react_agent()
    prompt = f"{method} 방식으로 '{topic}'에 대한 아이디어를 제안해줘." if topic else f"{method} 방식으로 아이디어를 제안해줘."
    ai_response = agent.run(prompt)

    # ✅ 멈춤 버튼 포함한 인터랙티브 메시지 전송
    slack_client.chat_postMessage(
        channel=channel_id,
        text=f"🚀 *{method}* 아이데이션을 시작합니다!\n\n💡 {ai_response}",
        blocks=[
            {
                "type": "section",
                "text": {"type": "mrkdwn", "text": f"🚀 *{method}* 아이데이션을 시작합니다!\n\n💡 {ai_response}"}
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {"type": "plain_text", "text": "🛑 멈추기"},
                        "style": "danger",
                        "action_id": "stop_ideation"
                    }
                ]
            }
        ]
    )

    # ✅ 세션 활성화
    active_sessions[channel_id] = True

# ✅ 아이데이션 중단
def stop_ideation(channel_id: str):
    if channel_id in active_sessions:
        del active_sessions[channel_id]
        send_slack_message(channel_id, "🛑 아이데이션을 중단했습니다.")