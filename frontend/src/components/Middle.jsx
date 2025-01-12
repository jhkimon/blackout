import React from "react";

const Middle = () => {
  return (
    <div className="rounded-lg overflow-hidden z-10 scale-[0.7] mt-[-7%] reactive flex flex-col items-center w-[1,254.4pxpx] h-[371px] px-8 py-10 bg-[#343434] pb-[2%]">
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Title */}
        <div className="flex items-end gap-2 mt-[-2%]">
        <svg
  width={29}
  height={28}
  viewBox="0 0 29 28"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    d="M25 2.33325L23.8333 3.49992"
    stroke="white"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M4 2.33325L5.16667 3.49992"
    stroke="white"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M25 18.6667L23.8333 17.5001"
    stroke="white"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M4 18.6667L5.16667 17.5001"
    stroke="white"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M11 21H18"
    stroke="white"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M12.166 24.5H16.8327"
    stroke="white"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M14.501 3.5C9.83412 3.5 7.44498 5.77533 7.50096 9.33333C7.52826 11.068 8.08412 12.25 9.25096 13.4167C10.4178 14.5833 11.0011 15.1667 11.001 17.5H18.001C18.0011 15.1668 18.5844 14.5834 19.7508 13.4168L19.751 13.4167C20.9174 12.25 21.4737 11.068 21.501 9.33333C21.5569 5.77533 19.1678 3.5 14.501 3.5Z"
    stroke="white"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

          <p className="text-2xl font-semibold text-white font-sans">
    시네틱스(Synectics) 발상법이란?
          </p>
        </div>

        {/* Description Section */}
        <div className="flex flex-row scale-[0.95] mt-[-1.5%] gap-4 w-full">
          <div className="bg-[#4e4e4e] p-6 rounded-lg text-white font-sans">
            <h3 className="text-xl font-bold mb-4">개념</h3>
            <p className="text-base">
              시네틱스(Synectics)는 문제 해결이나 창의적인 아이디어 개발을 위해
              <span className="font-bold">유추와 비유를 활용</span>하는<br />
              발상법입니다.
            </p>
            <p className="text-base">
            시네틱스 발상법은 <span className="font-bold">서로 관련 없어 보이는 요소들을 연결</span>하여 <span className="font-bold">새로운 관점과 창의적인 솔루션을 도출</span>하는<br />데 초점을 맞춥니다.

            </p>
          </div>

          <div className="bg-[#4e4e4e] p-6 rounded-lg text-white font-sans">
            <h3 className="text-xl font-bold mb-4">수행 조건</h3>
            <p className="text-base">
              <span className="font-bold">심리적 안전감:</span> 참가자들이
              자유롭게 아이디어를 낼 수 있는 안전한 분위기가 필요합니다.
            </p><br/>
            <p className="text-base">
              <span className="font-bold">개방성과 수용성
              </span>: 기존의 지식과 관점에서 벗어나 새로운 접근 방식을 수용하려는 태도가 중요합니다.
            </p><br/>
            <p className="text-base">
              <span className="font-bold">의도적 비논리: </span>논리적으로 접근하기 어려운 문제를 해결하기 위해 일부러 비논리적이거나 비현실적인<br /> 아이디어를 허용합니다.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;