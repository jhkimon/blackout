from src.domain.slackbot.repo import send_slack_message_async
from src.domain.synectics.service import generate_synectics_sentence
from src.domain.done.repo import get_recent_messages


# ✅ 문장에서 단어 2개 추출 및 시네틱스 문장 생성
async def regenerate_synectics_sentence(recent_messages: list) -> str:
    """
    최근 대화 내용을 기반으로 시네틱스 문장을 생성합니다.
    """
    # 최근 메시지 합치기
    context = "\n".join(recent_messages)
    
    # 프롬프트 구성
    prompt = f"다음 대화에서 서로 다른 특성을 가진 두 단어를 추출해줘. 쉼표로 구분해줘.\n\n대화 내용:\n{context}"
    
    # 단어 추출
    response = await generate_synectics_sentence(prompt)
    words = [word.strip() for word in response.split(",")]

    if len(words) != 2:
        raise ValueError("❗ 단어 추출에 실패했습니다.")

    # ✅ 시네틱스 문장 생성
    return await generate_synectics_sentence(words)

# ✅ 다시 발상하기 아이디어 생성 함수
from src.domain.done.repo import get_recent_messages, send_slack_message
from src.domain.synectics.service import generate_synectics_sentence

# ✅ 다시 발상하기 아이디어 생성
async def generate_resynectics_idea(user_id: str, channel_id: str):
    try:
        # ✅ 최근 대화 불러오기
        recent_messages = await get_recent_messages(channel_id, limit=10)
        context = "\n".join(recent_messages)

        # ✅ 시네틱스 문장 생성 (await 추가)
        synectics_sentence = await generate_synectics_sentence(context)

        # ✅ Slack으로 결과 전송
        await send_slack_message(channel_id, f"💡 *새로운 아이디어:*\n\n{synectics_sentence}")

    except Exception as e:
        await send_slack_message(channel_id, f"❌ 다시 발상하기 실패: {str(e)}")