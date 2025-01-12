import React from "react";
import MainContainer from "../components/MainContainer";
import LeftBar from "../components/LeftBar";

const Prompt = () => {
  return (
    <div
      className="w-full relative reactive overflow-hidden flex flex-row"
    >
      <div className=" w-[281.6px]">
        <LeftBar />
      </div>
      <div className=" w-[1,254.4px] ">
        <MainContainer />
      </div>
      <div className="absolute bottom-[5%] right-[5%] flex justify-center items-center w-12 h-12 gap-2.5 p-2.5 rounded-full bg-[#4e4e4e]">
    <p className="text-2xl font-semibold text-white">?</p>
  </div>
    </div>
  );
};

export default Prompt;
