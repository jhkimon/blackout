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
        <div className="overflow-hidden relative reactive w-[281.6px] h-[auto] bg-black">
            {/* 상단 박스 */}
            <div className="absolute top-0 left-0 w-[352] h-[86] mt-[2%] bg-black flex items-center justify-between px-4">
                {/* 텍스트 로고 */}
                <img
                    src="/images/Logo.png" // 아이콘 파일 경로
                    alt="Logo"
                    className="w-30 h-8 mt-[2%]"
                />
                {/* 이미지 아이콘 */}
                <img
                    src="/images/BookIcon.png" // 아이콘 파일 경로
                    alt="Icon Description"
                    className="w-8 h-8 mt-[2%] ml-[70%]"
                />
            </div>
            <div className="scale-[0.9] w-[352] h-full bg-black p-4 relative top-[86]">
                {/* 상위 카드 섹션 */}
                <div className="flex flex-col gap-6 mb-12">
                    {cards.slice(0, 2).map((card, index) => (
                        <div key={index} className="flex flex-col gap-2 p-4 bg-black rounded-lg shadow-lg">
                            {/* 날짜 */}
                            <p className="text-lg font-medium text-[#828282]">{card.date}</p>

                            {/* 방법 */}
                            <p className="text-sm text-[#ff6501]">{card.method}</p>

                            {/* 제목 */}
                            <p className="text-xl font-medium text-white">{card.title}</p>

                            {/* 하단 정보 */}
                            <div className="flex justify-between items-center">
                                {/* 참여자 */}
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUser} className="text-[#828282] w-4 h-4" />
                                    <span className="text-xs text-[#828282]">{card.participants}명</span>
                                </div>

                                {/* 진행 상태 */}
                                <p
                                    className={`text-xs ${
                                        card.status === '진행완료' ? 'text-[#40d34e]' : 'text-[#ff0000]'
                                    }`}
                                >
                                    {card.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 하단 카드 섹션 */}
                <div className="flex flex-col gap-8">
                    {cards.slice(2, 5).map((card, index) => (
                        <div key={index} className="flex flex-col gap-2 p-4 bg-black rounded-lg shadow-lg">
                            {/* 날짜 */}
                            <p className="text-lg font-medium text-[#828282]">{card.date}</p>

                            {/* 방법 */}
                            <p className="text-sm text-[#ff6501]">{card.method}</p>

                            {/* 제목 */}
                            <p className="text-xl font-medium text-white">{card.title}</p>

                            {/* 하단 정보 */}
                            <div className="flex justify-between items-center">
                                {/* 참여자 */}
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUser} className="text-[#828282] w-4 h-4" />
                                    <span className="text-xs text-[#828282]">{card.participants}명</span>
                                </div>

                                {/* 진행 상태 및 이미지 */}
                                <div className="flex items-center gap-2">
                                    <p
                                        className={`text-xs ${
                                            card.status === '진행 중' ? 'text-[#FCB620]' : 'text-[#FCB620]'
                                        }`}
                                    >
                                        {card.status}
                                    </p>
                                    {card.status === '진행 중' &&
                                        card.progressIcon && ( // 아이콘이 있는 경우만 렌더링
                                            <img src={card.progressIcon} alt="Progress Icon" className="w-89 h-4" />
                                        )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 좌측 하단 아이콘 섹션 */}
            <div className="absolute top-[1030] left-4 flex gap-4">
                <img
                    src="/images/SlackWhiteIcon.png" // 첫 번째 아이콘 파일 경로
                    alt="Icon 1"
                    className="w-6 h-6"
                />
                <img
                    src="/images/SettingsIcon.png" // 두 번째 아이콘 파일 경로
                    alt="Icon 2"
                    className="w-7 h-7 relative -top-0.5"
                />
            </div>
        </div>
    );
};

export default LeftBar;
