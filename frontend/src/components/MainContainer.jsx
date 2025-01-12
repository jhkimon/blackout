import React from "react";
import HeaderTwo from './HeaderTwo';
import Middle from "./Middle";
import PromptInput from "./PromptInput";
import ProgressBar from "./ProgressBar";

const MainContainer = () => {
  return (
    <div className="flex reactive overflow-hidden flex-col items-center max-w-[1568px] min-h-screen bg-[#1a1a1a] font-sans">
      <HeaderTwo />
      <ProgressBar />
      <Middle />
      <PromptInput /> 
   
    </div>
 
  );
};

export default MainContainer;