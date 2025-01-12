import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // React Router 훅 가져오기

const BoxComponent = () => {
    const navigate = useNavigate(); // navigate 함수 초기화

    const handleGetStarted = () => {
        navigate('/step1'); // /step1 경로로 이동
    };

    return (
        <div className="container mx-auto px-4 mt-40 pl-48">
            <div className="max-w-[800px]">
                <h1 className="text-5xl font-bold mb-6 text-white">무한한 상상의 연결</h1>
                <p className="text-lg text-white mb-8 max-w-[600px]">
                    아이디어를 내는 상황에 직면할 때, 막막함에 직면하곤 합니다.
                    <br />
                    발상법에 기반하여 아이디어 발상 과정을 효율적으로 관리하고, 멋진 아이디어 문 앞까지 데려다주는
                    리디아를 지금 만나보세요.
                </p>
                <div className="flex gap-4">
                    {/* Get Started 버튼 */}
                    <button
                        onClick={handleGetStarted} // 클릭 시 handleGetStarted 호출
                        className="bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-400 transition-colors"
                    >
                        Get Started
                    </button>
                    {/* Learn More 버튼 */}
                    <button className="text-white py-3 px-6 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BoxComponent;
