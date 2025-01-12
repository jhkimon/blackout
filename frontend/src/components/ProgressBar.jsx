import React from "react";

const ProgressBar = () => {
  return (
    <div className="overflow-hidden scale-[0.8] reactive flex flex-col justify-start items-start w-[1254.4px] h-[155px] gap-2.5 px-6 py-4 rounded-lg bg-[#343434] mt-[-1%] font-sans">
      <div className="flex justify-start items-center w-full gap-4">
        {/* Step 1 - Active */}
        <div className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-4">
          <div className="w-full h-2 rounded-full bg-[#ff6501]" />
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <p className="text-2xl font-semibold text-left text-[#ff6501]">
              문제 정의
            </p>
            <p className="text-base text-left text-white">
              생각을 하고 결론을 얻어야 하는 주제를 공유합니다.
            </p>
          </div>
        </div>

        {/* Step 2 - Inactive */}
        <div className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-4">
          <div className="w-full h-2 rounded-full bg-[#4e4e4e]" />
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <p className="text-2xl font-semibold text-left text-white opacity-50">
              단어 제시
            </p>
            <p className="text-base text-left text-white opacity-50">
              생각을 전개할 단어를 자동으로 추출하여 제시합니다.
            </p>
          </div>
        </div>

        {/* Step 3 - Inactive */}
        <div className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-4">
          <div className="w-full h-2 rounded-full bg-[#4e4e4e]" />
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <p className="text-2xl font-semibold text-left text-white opacity-50">
              아이디어 전개
            </p>
            <p className="text-base text-left text-white opacity-50">
              두 개의 단어를 유추를 통해 연관지어 아이디어를 전개합니다.
            </p>
          </div>
        </div>

        {/* Step 4 - Inactive */}
        <div className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-4">
          <div className="w-full h-2 rounded-full bg-[#4e4e4e]" />
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <p className="text-2xl font-semibold text-left text-white opacity-50">
              아이디어 정리
            </p>
            <p className="text-base text-left text-white opacity-50">
              전개된 아이디어를 요약하여 정리합니다.
            </p>
          </div>
        </div>

        {/* Step 5 - Inactive */}
        <div className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-4">
          <div className="w-full h-2 rounded-full bg-[#4e4e4e]" />
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <p className="text-2xl font-semibold text-left text-white opacity-50">
              결론 도출
            </p>
            <p className="text-base text-left text-white opacity-50">
              정리되어 선정된 아이디어와 실제 주제를 연결해 결론을 도출합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;