import React from 'react';
import RadioGroup from '../components/RadioGroup';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Home() {
    const navigate = useNavigate();

    const handleSelect = (selectedValue) => {
        setTimeout(() => {
            navigate('/step2');
        }, 1000);
    };

    return (
        <div className="w-full h-screen relative overflow-hidden bg-black flex flex-col">
            {/* 배경 이미지 레이어 */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/images/background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* blur 오버레이 레이어 */}
            <div className="absolute inset-0 z-0 backdrop-blur-md bg-black/30" />

            {/* 컨텐츠 wrapper */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-center items-center mt-10">
                    <img src="/images/Logo.png" alt="Logo" className="w-23 h-10" />
                </div>

                {/* Main content */}
                <div className="w-full h-[980px] flex-grow flex justify-center items-start relative top-[10%]">
                    <div className="flex flex-col justify-center items-center gap-16 w-[473px]">
                        <p className="text-4xl font-bold text-center text-white leading-relaxed mt-[-2%]">
                            <span>어떤 상황에서</span>
                            <br />
                            <span>도움이 필요하신가요?</span>
                        </p>
                        <div className="mt-[-10%] w-full">
                            <RadioGroup onSelect={handleSelect} />
                        </div>
                    </div>
                </div>

                {/* Floating help icon */}
                <div className="absolute bottom-[5%] right-[5%] flex justify-center items-center w-12 h-12 gap-2.5 p-2.5 rounded-full bg-[#4e4e4e]">
                    <p className="text-2xl font-semibold text-white">?</p>
                </div>
            </div>
        </div>
    );
}
