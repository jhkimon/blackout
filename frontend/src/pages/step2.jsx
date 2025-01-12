import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Step2() {
  const [selectedCard, setSelectedCard] = useState(null); // 선택된 카드 상태 관리
  const navigate = useNavigate();

  const handleCardSelect = (index) => {
    setSelectedCard(index); // 선택된 카드 업데이트
  };

  const handleStartThinking = () => {
    if (selectedCard !== null) {
      navigate("/prompt"); // prompt.jsx로 이동
    }
  };

  const cards = [
    {
      title: "브레인스토밍",
      description: "개방적인 분위기에서 아이디어를 발산하고 싶을 때 사용해요.",
    },
    {
      title: "시네틱스법",
      description: "기존 관점을 뒤집어 창의적 시각을 얻고 싶을 때 사용해요.",
    },
    {
      title: "속성열거법",
      description: "주제의 특성을 나열하고 새롭게 조합해 아이디어를 만들어요.",
    },
    {
      title: "KJ법",
      description: "아이디어를 카드에 적어 분류하고 구조화하는 방법이에요.",
    },
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black flex flex-col font-sans">
      {/* Header */}
      <Header title="LOGO" leftLabel="Back" />

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center mt-[8%]">
        {/* Title Section */}
        <div className="text-center mb-12 mt-[-10%]">
          <p className="text-4xl font-bold font-sans text-white mb-4">사용하실 발상법을 골라주세요</p>
          <p className="text-2xl font-semibold font-sans text-white">멋진 생각을 이끌어 줄 도구예요</p>
        </div>

        {/* Card List */}
        <div className="flex justify-center flex-wrap gap-6 px-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-[200px] h-[200px] flex flex-col items-center justify-center p-4 ${
                selectedCard === index
                  ? "border-[1px] border-[#ff6501]" // 선택된 카드에만 Primary 색상 적용
                  : "border border-[#4e4e4e]"
              } bg-[#1a1a1a]/70 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
              onClick={() => handleCardSelect(index)} // 카드 선택
            >
              <h3 className="text-lg font-bold text-white mb-2 text-center font-sans">{card.title}</h3>
              <p className="text-sm text-gray-300 text-center font-sans">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 생각 시작하기 버튼 */}
      {selectedCard !== null && (
        <div className="absolute bottom-16 w-full flex justify-center">
          <div
            className="flex items-center justify-center gap-2 w-[200px] h-[50px] bg-[#ff6501] rounded-lg cursor-pointer"
            onClick={handleStartThinking}
          >
            <p className="text-base font-semibold text-white">생각 시작하기</p>
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M18.5 8L22.5 12M22.5 12L18.5 16M22.5 12H2.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Floating Help Icon */}
      <div className="absolute bottom-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-[#4e4e4e]">
        <p className="text-lg font-semibold text-white">?</p>
      </div>
    </div>
  );
}
