import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './pages/Home';
import Step2 from './pages/step2';
import Prompt from './pages/Prompt'; // 새로 추가된 Prompt 컴포넌트
import SignupPage from './pages/SignupPage'; // 새로 추가된 Prompt 컴포넌트
import Login from './pages/Login'; // 새로 추가된 Prompt 컴포넌트
import Home from './pages/Main'; // 새로 추가된 Prompt 컴포넌트

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/step1" element={<Step1 />} />
                <Route path="/" element={<Home />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/prompt" element={<Prompt />} /> {/* 새 라우트 추가 */}
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
