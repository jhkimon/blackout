import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  { name: "아직 아무 아이디어도 없을 때", description: "고든법, 시네틱스법 등" },
  { name: "아이디어 여러 개가 충돌할 때", description: "□□법, □□법 등" },
  { name: "아이디어나 프로젝트를 개선할 때", description: "□□법, □□법 등" },
];

export default function Example({ onSelect }) {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="flex flex-col w-full">
      <RadioGroup
        value={selected}
        onChange={(value) => {
          setSelected(value);
          onSelect(value); // 선택 시 부모 컴포넌트로 전달
        }}
      >
        <div className="flex flex-col gap-2">
          {plans.map((plan, index) => (
            <RadioGroup.Option
              key={index}
              value={plan}
              className={({ checked }) =>
                `
                  relative flex justify-between items-center
                  gap-4 p-4 rounded-lg
                  border cursor-pointer ${
                    checked
                      ? "bg-[#343434] border-transparent"
                      : "bg-[#1a1a1a]/70 border-[#4e4e4e] backdrop-blur-2xl"
                  } transition-colors hover:border-gray-500
                `
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex flex-col gap-1">
                    <RadioGroup.Label className="text-base font-medium text-white">
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      className={`text-sm ${
                        checked ? "text-[#b5b5b5]" : "text-[#828282]"
                      }`}
                    >
                      {plan.description}
                    </RadioGroup.Description>
                  </div>
                  {checked && (
                    <div className="flex items-center justify-center w-6 h-6 bg-[#ff6501] rounded-full">
                      <svg
                        width={18}
                        height={19}
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 10.25L6.75 13.25L14.25 5.75"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
