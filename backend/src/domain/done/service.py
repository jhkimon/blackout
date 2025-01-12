from src.domain.slackbot.repo import get_user_email, send_slack_message_async
from src.domain.user.repo import UserRepository
from src.domain.done.repo import get_recent_messages, send_slack_message
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains import LLMChain

# ✅ GPT-4o 모델 초기화
llm = ChatOpenAI(model="gpt-4o", temperature=0.5)

# ✅ 요약 + 힌트 프롬프트 템플릿
prompt_template = ChatPromptTemplate.from_template("""
다음은 최근 대화 내용입니다. 이 대화를 기반으로 중요한 흐름과 핵심 아이디어를 자연스럽고 부드럽게 요약해 주세요.  
그리고 현재 주제인 '{topic}'과 연결되도록 자연스러운 흐름을 유지하면서, 새로운 자극을 줄 수 있는 힌트를 포함하세요.  

최근 대화:  
{recent_messages}
""")

# ✅ LangChain 체인 생성
chain = LLMChain(prompt=prompt_template, llm=llm)

# ✅ "대화 정리하기" 실행
# ✅ "대화 정리하기" 실행
async def generate_done_summary(user_id: str, channel_id: str):
    try:
        # ✅ Slack ID로 유저 조회
        user_email = await get_user_email(user_id)
        user = await UserRepository.find_by_email(user_email)
        topic = user.get("topic", "주제가 아직 설정되지 않았습니다.")

        # ✅ 최근 메시지 불러오기
        recent_messages = await get_recent_messages(channel_id, limit=10)
        context = "\n".join(recent_messages)

        # ✅ 요약 및 힌트 생성 (apredict → ainvoke로 변경)
        response = await chain.ainvoke({"recent_messages": context, "topic": topic})

        # ✅ 응답 내용 추출 및 전송
        summary = response.get("text", "").strip()  # dict에서 'text' 키로 접근

        # ✅ Slack으로 결과 전송
        await send_slack_message_async(channel_id, f"📂 *'{topic}'* 주제와 연결된 대화 요약:\n\n{summary}")

    except Exception as e:
        await send_slack_message_async(channel_id, f"❌ 대화 정리 실패: {str(e)}")