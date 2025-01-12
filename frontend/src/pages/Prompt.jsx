import React from "react";
import MainContainer from "../components/MainContainer";
import LeftBar from "../components/LeftBar";


const Prompt = () => {


  // 이미 있는 디자인/레이아웃 코드를 그대로 둡니다.
  // 아래 handleapi도 지금은 크게 필요가 없을 수 있으니, 
  // 필요에 맞춰 활용하거나 제거하셔도 됩니다.
 

  return (
    <div
      className="w-full relative reactive overflow-hidden flex flex-row"
      style={{ overflowY: "hidden" }}
    >
      <div className=" w-[281.6px]">
        <LeftBar />
      </div>
      <div className=" w-[1,254.4px] ">
        {/*
          MainContainer 안에서 topic과 email을 가지고 
          API 호출을 하도록 만들어줄 거예요.
        */}
        <MainContainer />
      </div>
    </div>
  );
};

export default Prompt;
