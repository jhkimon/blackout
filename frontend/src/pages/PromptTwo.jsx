import React from "react";
import MainContainerTwo from "../components/MainContainerTwo";
import LeftBar from "../components/LeftBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Prompt = () => {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  // 이미 있는 디자인/레이아웃 코드를 그대로 둡니다.
  // 아래 handleapi도 지금은 크게 필요가 없을 수 있으니, 
  // 필요에 맞춰 활용하거나 제거하셔도 됩니다.
  const handleapi = async () => {
    try {
      setTimeout(() => navigate("/prompt"), 2000);
    } catch (err) {
      console.log("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

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
        <MainContainerTwo />
      </div>
    </div>
  );
};

export default Prompt;
