import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [problem, setProblem] = useState("");

  return (
    <AppContext.Provider
      value={{
        step1,
        setStep1,
        step2,
        setStep2,
        problem,
        setProblem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
