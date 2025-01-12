import React, { createContext, useState, useContext } from "react";

// Context 생성
const AppContext = createContext();

// Context Provider
export const AppProvider = ({ children }) => {
  const [email, setEmail] = useState(""); // 이메일 상태 추가
  const [topic, setTopic] = useState(""); // 사용자가 입력한 topic 값 저장

  return (
    <AppContext.Provider value={{ email, setEmail, topic, setTopic }}>
      {children}
    </AppContext.Provider>
  );
};

// Context를 사용하기 위한 Custom Hook
export const useAppContext = () => useContext(AppContext);
