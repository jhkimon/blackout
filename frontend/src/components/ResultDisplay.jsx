// src/components/ResultDisplay.jsx
import React from "react";

const ResultDisplay = ({ result }) => {
  return (
    <div className="mt-6 text-center">
      <h3 className="text-xl font-semibold text-white mb-4">추출된 단어</h3>
      <div className="flex justify-center gap-4">
        {result.map((word, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-orange-500 rounded-full text-white text-lg"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResultDisplay;
