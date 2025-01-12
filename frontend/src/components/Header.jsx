import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ title, leftLabel, leftAction }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-16 flex items-center bg-black fixed pt-[1%] z-10">
      {/* Left button */}
      <div
        className="flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer absolute left-8"
        onClick={leftAction || (() => navigate(-1))}
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-base font-semibold text-white">{leftLabel}</p>
      </div>

      {/* Center title */}
      <div className="flex-grow flex justify-center">
        <p className="text-4xl font-bold text-white">{title}</p>
      </div>

      {/* Right close button */}
      <div className="absolute right-8 flex items-center gap-2.5">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
