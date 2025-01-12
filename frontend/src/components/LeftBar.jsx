import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const LeftBar = () => {
    const cards = [
        {
            date: '01.12 일요일',
            method: '오스본 자문법',
            title: '전동 킥보드의 사회적 인식을 개...',
            participants: 3,
            status: '진행완료',
        },
        {
            date: '01.13 월요일',
            method: '카탈로그법',
            title: '2025 트렌드를 변화시킬 마케팅...',
            participants: 1,
            status: '진행완료',
        },
        {
            date: '01.14 화요일',
            method: '브레인스토밍',
            title: 'AI와 인간의 협업 가능성을 확...',
            participants: 5,
            status: '진행 중',
            progressIcon: '/images/fourcircle.png',
        },
        {
            date: '01.15 수요일',
            method: '스캠퍼',
            title: '혁신적인 제품 개발을 위한 아이...',
            participants: 2,
            status: '진행 중',
            progressIcon: '/images/onecircle.png',
        },
        {
            date: '01.16 목요일',
            method: '6가지 사고 모자',
            title: '창의적 문제 해결의 핵심 전략...',
            participants: 4,
            status: '진행 중',
            progressIcon: '/images/fourcircle.png',
        },
    ];

    return (
        <div className="overflow-hidden relative w-[281.6px] h-screen bg-black">
            {/* 상단 박스 */}
            <div className="flex items-center justify-between px-4 py-2 ">
                {/* 텍스트 로고 */}
                <img
                    src="/images/Logo.png"
                    alt="Logo"
                    className="w-30 h-8"
                />
                {/* 이미지 아이콘 */}
                <img
                    src="/images/BookIcon.png"
                    alt="Icon Description"
                    className="w-8 h-8"
                />
            </div>
            <div className="scale-[0.9] mt-[-15%] p-4 bg-black">
                {/* 상위 카드 섹션 */}
                <div className="flex flex-col items-center gap-6 mb-12">
                    {cards.slice(0, 2).map((card, index) => (
                        <div key={index} className="flex flex-col w-80% gap-2 p-4  rounded-lg shadow-lg">
                            <p className="text-lg font-medium text-[#828282]">{card.date}</p>
                            <p className="text-sm text-[#ff6501]">{card.method}</p>
                            <p className="text-xl font-medium text-white">{card.title}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUser} className="text-[#828282] w-4 h-4" />
                                    <span className="text-xs text-[#828282]">{card.participants}명</span>
                                </div>
                                <p className={`text-xs ${card.status === '진행완료' ? 'text-[#40d34e]' : 'text-[#ff0000]'}`}>
                                    {card.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 하단 카드 섹션 */}
                <div className="flex flex-col items-center gap-8">
                    {cards.slice(2, 5).map((card, index) => (
                        <div key={index} className="flex flex-col w-80% gap-2 p-4  rounded-lg shadow-lg">
                            <p className="text-lg font-medium text-[#828282]">{card.date}</p>
                            <p className="text-sm text-[#ff6501]">{card.method}</p>
                            <p className="text-xl font-medium text-white">{card.title}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUser} className="text-[#828282] w-4 h-4" />
                                    <span className="text-xs text-[#828282]">{card.participants}명</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs text-[#FCB620]">{card.status}</p>
                          
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftBar;
