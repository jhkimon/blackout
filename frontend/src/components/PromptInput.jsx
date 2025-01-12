import React, { useState } from "react";

const PromptInput = ({ onInputSubmit }) => {
  const [inputValue, setInputValue] = useState(""); // Local input state

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onInputSubmit(inputValue); // Pass the input value to the parent
    }
  };

  return (
    <div className="overflow-hidden scale-[0.8]   mt-[-4%] reactive flex items-center flex-col w-[828px] px-8 py-8 bg-[#1a1a1a]">
      <h3 className="text-4xl font-semibold text-white font-sans mb-6">
        어떤 문제에 대한 아이디어가 필요하신가요?
      </h3>
      <div className="flex items-center gap-4 w-full">
        {/* Input */}
        <div className="flex flex-grow items-center px-4 py-3 bg-[#4e4e4e] rounded-full text-white">
          <input
            type="text"
            placeholder="예) 에너지 음료 회사 신제품의 마케팅 전략에 대한 아이디어"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none font-sans"
          />
        </div>

        {/* Submit Button */}
        <button
          className="p-4 rounded-full bg-[#ff6501] hover:bg-[#e55b01]"
          onClick={handleSubmit}
        >
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.8455 4.14543L13.041 24.5051L11.0922 14.4758L2.33425 9.21428L25.8455 4.14543Z"
              stroke="white"
              strokeWidth={2}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
