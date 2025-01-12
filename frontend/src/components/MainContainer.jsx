import React from "react";
import HeaderTwo from "./HeaderTwo";
import Middle from "./Middle";
import PromptInput from "./PromptInput";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

// 전역 email 사용
import { useAppContext } from "../context/AppContext";

// API 함수들
import { updateTopic, generateSynectics } from "../api/topic";

const MainContainer = () => {
  // Context 에서 email 가져오기 (로그인 시 저장된 값)
  const { email } = useAppContext();
  const navigate = useNavigate();

  // PromptInput -> onInputSubmit 에서 topic을 받아서 처리
  const handleTopicSubmit = async (topic) => {
    console.log("[MainContainer] Received topic:", topic);
    console.log("[MainContainer] Current email from context:", email);

    try {
      // (1) updateTopic 호출
      const updateResponse = await updateTopic(email, topic);
      console.log("[MainContainer] updateTopic response:", updateResponse);

      // (2) generateSynectics 호출
      const generateResponse = await generateSynectics(email);
      console.log("[MainContainer] generateSynectics response:", generateResponse);
    } catch (error) {
      console.error("[MainContainer] API error:", error);
    }
    navigate("/prompt2")
  };

  return (
    <div className="flex reactive overflow-hidden flex-col items-center max-w-[1568px] min-h-screen bg-[#1a1a1a] font-sans">
      <HeaderTwo />
      <ProgressBar />
      <Middle />
      
      {/* PromptInput에서 입력 받은 topic을 handleTopicSubmit로 보내도록 연결 */}
      <PromptInput onInputSubmit={handleTopicSubmit} />
    </div>
  );
};

export default MainContainer;
