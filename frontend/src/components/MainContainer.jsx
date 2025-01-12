import React, { useState } from "react";
import HeaderTwo from "./HeaderTwo";
import Middle from "./Middle";
import PromptInput from "./PromptInput";
import ProgressBar from "./ProgressBar";
import { useAppContext } from "../context/AppContext";
import { updateTopic, generateSynectics } from "../services/api";

const MainContainer = () => {
  

  // 상태 관리
  const [loadingStep, setLoadingStep] = useState(0); // 0: Idle, 1: 첫 번째 단계, 2: 두 번째 단계, 3: 세 번째 단계
  const [result, setResult] = useState(null); // 최종 결과 단어 저장

  const handleInputSubmit = async (input) => {
    const email = "user@example.com"; // 하드코딩된 email (실제 앱에서는 동적으로 받아야 할 수도 있음)
    const topic = input;

    setLoadingStep(1); // 첫 번째 단계: "주제 파악 중..."
    setResult(null); // 기존 결과 초기화

    try {
      // 첫 번째 API 호출
      await updateTopic(email, topic);
      setLoadingStep(2); // 두 번째 단계: "핵심 단어 추출 중..."

      // 두 번째 API 호출
      const response = await generateSynectics(email);
      setLoadingStep(3); // 세 번째 단계: "연상 단어 생각 중..."

      // 결과 저장
      setResult(response.words); // API의 결과 데이터가 'words'라는 키에 있다고 가정
      setLoadingStep(0); // 로딩 상태 초기화
    } catch (error) {
      console.error("Error occurred during API calls:", error);
      setLoadingStep(0); // 에러 발생 시 로딩 초기화
    }
  };

  return (
    <div className="flex reactive overflow-hidden flex-col items-center max-w-[1568px] min-h-screen bg-[#1a1a1a] font-sans">
      <HeaderTwo />
      <ProgressBar />
      {/* Middle 컴포넌트에 로딩 상태 및 결과 전달 */}
      <Middle loadingStep={loadingStep} result={result} />
      <PromptInput onInputSubmit={handleInputSubmit} />
    </div>
  );
};

export default MainContainer;
