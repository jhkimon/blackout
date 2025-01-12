import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { signup } from '../api/auth'; // 회원가입 API 호출 함수
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // 에러 상태
    const [success, setSuccess] = useState(false); // 성공 상태
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            setError(''); // 에러 초기화
            setSuccess(true); // 성공 상태 업데이트
            setTimeout(() => navigate('/login'), 2000); // 2초 후 로그인 페이지로 이동
        } catch (err) {
            setError('회원가입에 실패했습니다. 다시 시도해주세요.');
            console.log('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className="w-full h-screen flex flex-col bg-black font-sans">
            <Header
                title="LOGO"
                leftLabel="Home"
                leftIcon={
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
                }
            />
            {/* 입력 필드와 버튼 섹션 */}
            <div className="flex flex-col items-center justify-center flex-1 mt-[5%] gap-3 px-6">
                {/* 제목 */}
                <h1 className="text-white font-bold text-5xl leading-snug text-center">무한한 상상의 연결</h1>

                {/* 입력 필드 */}
                <div className="flex flex-col items-center gap-1 w-full max-w-[384px] scale-[0.94]">
                    <div className="w-full ">
                        <label htmlFor="email" className="text-white mb-2 font-semibold text-base">
                            이메일<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="이메일을 입력해주세요"
                            className="w-full h-[48px] px-4 text-sm rounded-lg focus:ring-2 focus:ring-white focus:outline-none  text-on-surface bg-surface-container"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="username" className="text-white mb-2 font-semibold text-base ">
                            닉네임<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="닉네임을 입력해주세요"
                            className="w-full h-[48px] px-4 text-sm rounded-lg  focus:ring-2 focus:ring-white focus:outline-none  text-on-surface bg-surface-container"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="text-white mb-2 font-semibold text-base">
                            비밀번호<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            className="w-full h-[48px] px-4 text-sm rounded-lg  focus:ring-2 focus:ring-white focus:outline-none  text-on-surface bg-surface-container"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    {success && (
                        <p className="text-green-500 text-sm mt-2">
                            회원가입이 성공했습니다! 로그인 페이지로 이동합니다.
                        </p>
                    )}

                    {/* 회원가입 버튼 */}
                    <div className="w-full max-w-[384px]">
                        <button
                            className="
              w-full h-[48px] rounded-lg
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
              flex justify-center items-center gap-2 mt-[2%]
              border bg-white text-black border-white
            "
                            onClick={handleSignup}
                        >
                            회원가입
                        </button>
                    </div>
                    <div className="flex items-center w-full gap-4">
                        <div className="flex-grow border-t border-gray-500" />
                        <span className="text-gray-500 text-sm">또는</span>
                        <div className="flex-grow border-t border-gray-500" />
                    </div>
                    {/* 소셜 로그인 */}
                    <div className="flex flex-col  justify-center items-center gap-4 w-full max-w-[384px] ml-[-9%]">
                        <Button
                            label="Sign in with Slack"
                            showIcon={true}
                            iconSrc="/images/SlackIcon.png"
                            bgColor="bg-black"
                            textColor="text-white"
                            borderColor="border-white"
                        />
                        <Button
                            label="Sign in with Google"
                            showIcon={true}
                            iconSrc="/images/GoogleIcon.png"
                            bgColor="bg-black"
                            textColor="text-white"
                            borderColor="border-white"
                        />

                        {/* 로그인 링크 */}
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <p className="text-gray-300 text-sm">이미 계정이 있으신가요?</p>
                        <a href="/login" className="text-primary-500 text-sm underline hover:text-primary-600">
                            로그인 하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
