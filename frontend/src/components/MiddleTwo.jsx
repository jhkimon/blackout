import React from "react";

const Middle = () => {
  return (
    <div className="rounded-lg overflow-hidden z-10 scale-[0.6] mt-[-4%] reactive flex flex-col items-center w-[1,254.4pxpx] h-[371px] px-8 py-10 pb-[2%]">
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Title */}
        <div className="flex items-end gap-2 mt-[-2%]">
       
          <p className="text-6xl font-semibold text-white font-sans">
    두가지 단어
          </p>
        </div>

        {/* Description Section */}
        <div className="bg-[#4e4e4e] mr-[3%] flex flex-row scale-[0.95] mt-[-1.5%] gap-4 w-full">
          <div className=" p-6 rounded-lg text-white font-sans">
            <h3 className="text-3xl text-center font-bold mb-4">비행기</h3>
            <p className="text-base">
             

            </p>
          </div>

          <div className="bg-[#4e4e4e] p-6 rounded-lg text-white font-sans">
            <h3 className="text-3xl text-center font-bold mb-4">칫솔</h3>
            <p className="text-base">
             
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;