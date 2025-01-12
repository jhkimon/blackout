// src/components/LoadingMessage.jsx
import React from "react";

const LoadingMessage = ({ step }) => {
  const messages = ["주제 파악 중...", "핵심 단어 추출 중...", "연상 단어 생각 중..."];
  return <h3 className="text-2xl text-orange-500">{messages[step - 1]}</h3>;
};

export default LoadingMessage;
