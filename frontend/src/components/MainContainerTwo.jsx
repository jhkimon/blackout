import React from "react";

const MainContainerTwo = ({ userInput }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[500px] px-8 py-8 bg-[#343434] rounded-lg">
      <h3 className="text-3xl font-semibold text-white font-sans mb-4">
        아이디어 제안
      </h3>
      <div className="flex flex-col items-center justify-center gap-4 w-full bg-[#4e4e4e] px-6 py-4 rounded-lg">
        <p className="text-lg font-medium text-white">
          {userInput || "사용자 입력이 여기에 표시됩니다."}
        </p>
        <p className="text-base text-white opacity-75">
          입력한 내용을 기반으로 다음 단계를 진행합니다.
        </p>
      </div>
    </div>
  );
};

export default MainContainerTwo;
