import React, { useState } from "react";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
// 1) AppContext import
import { useAppContext } from "../context/AppContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 2) Context에서 setEmail을 가져오기
  const { setEmail: setGlobalEmail } = useAppContext();

  const handleLogin = async () => {
    try {
      setError(""); // Clear error

      // 실제 로그인 API 호출
      const response = await login(email, password);

      // 로그인 성공 시 access_token 저장
      localStorage.setItem("access_token", response.access_token);

      // 3) Context에 이메일 저장
      setGlobalEmail(email);
      console.log("Stored email in context:", email);

      // 로그인 성공 후 이동할 페이지
      navigate("/");
    } catch (err) {
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black flex flex-col font-sans">
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
      <div className="flex flex-col items-center justify-center w-full h-full gap-6 px-6">
        <div className="text-center mb-6">
          <h1 className="text-white font-sans font-bold text-5xl leading-snug mt-[20%]">
            무한한 상상의 연결
          </h1>
        </div>
        <div className="scale-[0.9] mt-[-3%] font-sans">
          {/* Email Input */}
          <InputBox
            label="이메일"
            showLabel={true}
            showAsterisk={true}
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password Input */}
          <div className="mt-[2%]">
            <InputBox
              label="비밀번호"
              showLabel={true}
              showAsterisk={true}
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Login Button */}
          <Button
            label="로그인"
            bgColor="bg-white"
            textColor="text-black"
            borderColor="border-white"
            onClick={handleLogin}
          />

          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-[400px] ml-[3%] my-4">
            <div className="flex-grow border-t border-gray-500" />
            <span className="text-gray-500 text-sm">또는</span>
            <div className="flex-grow border-t border-gray-500" />
          </div>

          {/* Social Login Buttons */}
          <Button
            label="Sign in with Slack"
            showIcon={true}
            iconSrc="/images/SlackIcon.png"
            bgColor="bg-black"
            textColor="text-white"
            borderColor="border-white"
            onClick={() => console.log("Slack 로그인")}
          />
          <Button
            label="Sign in with Google"
            showIcon={true}
            iconSrc="/images/GoogleIcon.png"
            bgColor="bg-black"
            textColor="text-white"
            borderColor="border-white"
            onClick={() => console.log("Google 로그인")}
          />

          {/* Signup Link */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="text-gray-300 text-sm">계정이 없으신가요?</p>
            <a
              href="/signup"
              className="text-primary-500 text-sm underline hover:text-primary-600"
            >
              회원가입
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
