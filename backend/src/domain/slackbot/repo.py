# 예시 데이터: 아이데이션 방식과 설명
IDEATION_METHODS = {
    "브레인스토밍": "자유롭게 아이디어를 나누고 확장하는 방식입니다.",
    "SCAMPER": "기존 아이디어를 대체·결합·수정·확장하는 방식입니다.",
    "마인드맵": "주제를 중심으로 관련 아이디어를 시각화하는 방식입니다."
}

# 전체 아이데이션 방식 반환
def get_all_ideation_methods():
    return IDEATION_METHODS

# 특정 아이데이션 방식 설명 반환
def get_ideation_method_by_name(name: str):
    return IDEATION_METHODS.get(name, None)