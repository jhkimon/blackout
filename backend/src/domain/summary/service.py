from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains import LLMChain

# ✅ GPT-4o 초기화
llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

# ✅ 요약 프롬프트 템플릿
prompt_template = ChatPromptTemplate.from_template("""
다음은 최근 대화 내용입니다. 이 대화를 기반으로 중요한 흐름과 핵심 아이디어를 자연스럽고 부드럽게 요약해 주세요.
직접적인 언급은 피하고, 은근한 힌트를 포함하세요.

최근 대화:  
{recent_messages}

⚡️ **요약 조건:**  
1. 전체 흐름을 부드럽게 요약하되, 세부적인 내용은 생략해도 괜찮습니다.  
2. '{topic}'과 연결되는 방향성을 암시하세요.  
3. 명확한 결론보다는 열린 결말로 마무리하세요.
""")

# ✅ LangChain 체인 생성
chain = LLMChain(prompt=prompt_template, llm=llm)

# ✅ 요약 생성 함수
def generate_summary(recent_messages: list, topic: str):
    context = "\n".join(recent_messages)
    response = chain.invoke({"recent_messages": context, "topic": topic})
    return response.content