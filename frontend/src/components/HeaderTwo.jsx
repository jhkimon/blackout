import React from "react";

const HeaderTwo = () => {
  return (
    <div className="overflow-hidden flex flex-col justify-end items-end w-[1254.4px] h-[94px] reactive px-8 py-4 bg-[#1a1a1a]">
      <div className="flex justify-between items-center w-full">
        {/* Title Section */}
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold text-[#ff6501] font-sans">
            시네틱스 발상법
          </p>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 px-6 py-2 rounded-lg bg-white">
            <span className="text-base font-semibold text-black font-sans">
              공유하기
            </span>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6673 10.8334V15.5C16.6673 16.6046 15.7719 17.5 14.6673 17.5H5.33398C4.22941 17.5 3.33398 16.6046 3.33398 15.5V10.8334"
                stroke="#131927"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99935 12.5V2.5M9.99935 2.5L7.08268 5.41667M9.99935 2.5L12.916 5.41667"
                stroke="#131927"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="flex items-center gap-1 px-6 py-2 rounded-lg bg-transparent border border-white">
            <span className="text-base font-semibold text-white font-sans">
              종료
            </span>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;