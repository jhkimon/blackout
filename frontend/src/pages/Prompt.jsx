import React from "react";
import MainContainer from "../components/MainContainer";
import LeftBar from "../components/LeftBar";

const Prompt = () => {
  return (
    <div
      className="w-full relative reactive overflow-hidden flex flex-row"
      style={{ overflowY: "hidden" }}
    >
      <div className=" w-[281.6px]">
        <LeftBar />
      </div>
      <div className=" w-[1,254.4px] ">
        <MainContainer /> 
      </div>

    </div>
  );
};

export default Prompt;
