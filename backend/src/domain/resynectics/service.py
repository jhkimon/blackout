from src.domain.slackbot.repo import send_slack_message_async
from src.domain.done.repo import get_recent_messages
from langchain_openai import ChatOpenAI

# ✅ GPT-4o 모델 초기화
llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

# ✅ 다시 발상하기 전체 로직 통합
async def generate_resynectics_idea(user_id: str, channel_id: str):
    try:
        # ✅ 1️⃣ 최근 대화 불러오기
        recent_messages = await get_recent_messages(channel_id, limit=10)
        if not recent_messages:
            await send_slack_message_async(channel_id, "❗ 최근 대화 기록이 없습니다.")
            return

        context = "\n".join(recent_messages)

        # ✅ 2️⃣ 프롬프트 작성 (단어 추출)
        word_prompt = f"다음 대화에서 서로 다른 특성을 가진 두 단어를 추출해줘. 쉼표로 구분해줘.\n\n대화 내용:\n{context}"

        # ✅ 3️⃣ 단어 추출 (LangChain 활용)
        word_response = await llm.ainvoke(word_prompt)

        # ✅ 4️⃣ 응답 검증 및 단어 분리
        words = [word.strip() for word in word_response.content.split(",")]
        if len(words) != 2:
            raise ValueError("❗ 두 개의 단어를 추출하지 못했습니다. 다시 시도해 주세요.")

        word_a, word_b = words

        # ✅ 5️⃣ 시네틱스 문장 생성 프롬프트 작성
        sentence_prompt = f"'{word_a}'와 '{word_b}'를 활용해 창의적인 시네틱스 문장을 작성해줘."

        # ✅ 6️⃣ 시네틱스 문장 생성
        sentence_response = await llm.ainvoke(sentence_prompt)
        synectics_sentence = sentence_response.content.strip()

        if not synectics_sentence:
            raise ValueError("❗ 시네틱스 문장 생성에 실패했습니다.")

        # ✅ 7️⃣ Slack으로 결과 전송
        await send_slack_message_async(channel_id, f"💡 *새로운 아이디어:*\n\n{synectics_sentence}")

    except Exception as e:
        await send_slack_message_async(channel_id, f"❌ 다시 발상하기 실패: {str(e)}")