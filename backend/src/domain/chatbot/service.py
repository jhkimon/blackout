from fastapi import UploadFile
from src.core.exceptions import ValidationError, FileUploadError
from src.domain.chatbot.repo import extract_text_from_pdf
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
import os

UPLOAD_DIR = "./uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

class ChatbotService:
    def __init__(self):
        self.qa_chain = None

    # ✅ PDF 업로드 및 처리
    async def upload_pdf(self, file: UploadFile):
        if not file.filename.endswith(".pdf"):
            raise FileUploadError("PDF 파일만 업로드 가능합니다.")

        file_path = os.path.join(UPLOAD_DIR, file.filename)
        try:
            with open(file_path, "wb") as f:
                f.write(await file.read())
        except Exception:
            raise FileUploadError("파일 저장 중 오류가 발생했습니다.")

        # ✅ PDF 내용 처리
        pdf_text = extract_text_from_pdf(file_path)
        self.qa_chain = self._initialize_qa_chain(pdf_text)

    # ✅ 질문 응답 처리
    async def ask_question(self, question: str) -> str:
        if self.qa_chain is None:
            raise ValidationError("먼저 PDF 파일을 업로드하세요.")
        try:
            return self.qa_chain.run(question)
        except Exception:
            raise ValidationError("질문 처리 중 오류가 발생했습니다.")

    # ✅ QA 체인 초기화
    def _initialize_qa_chain(self, text: str):
        splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
        documents = splitter.create_documents([text])

        embeddings = OpenAIEmbeddings()
        vector_store = Chroma.from_documents(documents, embeddings)

        llm = OpenAI(temperature=0.1)
        return RetrievalQA.from_chain_type(llm=llm, retriever=vector_store.as_retriever())