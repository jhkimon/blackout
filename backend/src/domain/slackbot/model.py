from pydantic import BaseModel

# 아이데이션 방식 데이터 모델
class IdeationMethod(BaseModel):
    name: str
    description: str