from src.domain.slackbot.repo import get_user_email, send_slack_message_async
from src.domain.user.repo import UserRepository
from src.domain.done.repo import get_recent_messages
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains import LLMChain
import logging

# ✅ 로깅 설정
logger = logging.getLogger(__name__)

# ✅ GPT-4o 모델 초기화
llm = ChatOpenAI(model="gpt-4o", temperature=0.5)

# ✅ 요약 + 힌트 프롬프트 템플릿
prompt_template = ChatPromptTemplate.from_template("""
다음은 최근 대화 내용입니다. 이 대화를 기반으로 중요한 흐름과 핵심 아이디어를 자연스럽고 부드럽게 요약해 주세요.  
그리고 현재 주제인 '{topic}'과 연결되도록 자연스러운 흐름을 유지하면서, 새로운 자극을 줄 수 있는 힌트를 포함하세요. 1문단 정도의 답이면 충분해요.

최근 대화:  
{recent_messages}
""")

# ✅ LangChain 체인 생성
chain = LLMChain(prompt=prompt_template, llm=llm)

# ✅ "대화 정리하기" 실행
async def generate_done_summary(user_id: str, channel_id: str):
    try:
        # ✅ Slack ID로 유저 이메일 조회
        user_email = await get_user_email(user_id)
        if not user_email:
            raise ValueError("유저 이메일 조회 실패")

        # ✅ 이메일로 유저 조회
        user = await UserRepository.find_by_email(user_email)
        if not user:
            raise ValueError("유저 정보를 찾을 수 없습니다.")

        # ✅ 주제가 없을 경우 기본 주제 설정
        topic = user.get("topic") or "일반적인 주제"

        # ✅ 최근 메시지 불러오기
        recent_messages = await get_recent_messages(channel_id, limit=10)
        if not recent_messages:
            raise ValueError("최근 대화 내용이 없습니다.")

        context = "\n".join(recent_messages)

        # ✅ 요약 및 힌트 생성 (ainvoke 사용)
        response = await chain.ainvoke({"recent_messages": context, "topic": topic})

        # ✅ 응답 내용 추출 (response.content 또는 response['text'])
        summary = response.get("text") or response.get("content", "요약이 생성되지 않았습니다.").strip()

        # ✅ Slack으로 결과 전송
        await send_slack_message_async(channel_id, f"📂 *'{topic}'* \n[주제와 연결된 대화 요약]:\n\n{summary}")

    except Exception as e:
        logger.error(f"대화 정리 실패: {e}")
        await send_slack_message_async(channel_id, f"❌ 대화 정리 실패: {str(e)}")