from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains import LLMChain
from src.domain.slackbot.repo import send_slack_message


# ✅ GPT-4o 모델 초기화
llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

# ✅ 1️⃣ A, B 단어 연상 단어 생성
def generate_related_words(word: str) -> list:
    prompt = f"'{word}'와 연상될 수 있으나 직접적이지 않은 단어 50개를 쉼표로 구분해줘."
    response = llm.invoke(prompt)
    return [w.strip() for w in response.content.split(",")]

# ✅ 2️⃣ 공통 단어 추출
def extract_common_words(words_a: list, words_b: list) -> list:
    prompt = f"다음 두 목록에서 공통적으로 연관성 있는 단어만 추출해줘.\n목록 A: {', '.join(words_a)}\n목록 B: {', '.join(words_b)}\n결과를 쉼표로 구분해줘."
    response = llm.invoke(prompt)
    return [w.strip() for w in response.content.split(",")]

# ✅ 3️⃣ 시네틱스 문장 생성
def generate_synectics_sentence(common_words: list) -> str:
    prompt = f"다음 단어들을 활용해 창의적인 시네틱스 문장 하나를 만들어줘: {', '.join(common_words)}"
    response = llm.invoke(prompt)
    return response.content.strip()

# ✅ 4️⃣ 전체 파이프라인 실행 함수
def generate_synectics(word_a: str, word_b: str) -> str:
    # 1️⃣ A, B 연상 단어 생성
    related_words_a = generate_related_words(word_a)
    related_words_b = generate_related_words(word_b)

    # 2️⃣ 공통 단어 추출
    common_words = extract_common_words(related_words_a, related_words_b)

    # 3️⃣ 시네틱스 문장 생성
    synectics_sentence = generate_synectics_sentence(common_words)

    # ✅ 4️⃣ 시네틱스 문장만 반환
    return synectics_sentence

prompt_template = ChatPromptTemplate.from_template("""
'{topic}'과 관련 있지만 서로 완전히 다른 특성을 가진 **두 개의 창의적인 단어**를 제시해줘.
두 단어는 서로 다른 관점에서 '{topic}'을 바라보는 것이어야 해.
결과는 '단어1, 단어2' 형식으로 쉼표로 구분해서 제공해줘.
""")

# ✅ LangChain 체인 생성
chain = LLMChain(prompt=prompt_template, llm=llm)

# ✅ 두 단어 생성 함수 (명확하고 창의적)
async def generate_distinct_synectics_words(topic: str) -> tuple:
    response = await chain.arun({"topic": topic})  # 비동기 실행
    words = [word.strip() for word in response.split(",")]

    # ✅ 단어가 2개 미만일 경우 오류 처리
    if len(words) != 2:
        raise ValueError(f"❗ 예상치 못한 결과입니다. '{response}'에서 두 단어를 추출할 수 없습니다.")

    return words[0], words[1]  # word_a, word_b