import React, { createContext, useContext, useState } from "react";

// Context 생성
const AppContext = createContext();

// Context Provider
export const AppProvider = ({ children }) => {
  // 전역으로 관리할 상태
  const [email, setEmail] = useState("");

  return (
    <AppContext.Provider value={{ email, setEmail }}>
      {children}
    </AppContext.Provider>
  );
};

// Context 를 가져다 쓰는 커스텀 Hook
export const useAppContext = () => useContext(AppContext);
