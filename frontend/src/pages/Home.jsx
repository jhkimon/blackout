import React from "react";
import RadioGroup from "../components/RadioGroup";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();

  const handleSelect = (selectedValue) => {
    setTimeout(() => {
      navigate("/step2");
    }, 1000);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black flex flex-col">
      {/* Header */}
      <Header title="LOGO" leftLabel="Home" />

      {/* Main content */}
      <div className="w-full h-[980px] flex-grow flex justify-center items-start relative top-[10%] mt-[3%]">
        <div className="flex flex-col justify-center items-center gap-16 w-[473px]">
          <p className="text-4xl font-bold text-center text-white leading-relaxed mt-[-2%]">
            <span>어떤 상황에서</span>
            <br />
            <span>도움이 필요하신가요?</span>
          </p>
          <div className="mt-[-10%] w-full ">
            <RadioGroup onSelect={handleSelect} />
          </div>
        </div>
      </div>

      {/* Floating help icon */}
      <div className="absolute bottom-[5%] right-[5%] flex justify-center items-center w-12 h-12 gap-2.5 p-2.5 rounded-full bg-[#4e4e4e]">
        <p className="text-2xl font-semibold text-white">?</p>
      </div>
    </div>
  );
}
