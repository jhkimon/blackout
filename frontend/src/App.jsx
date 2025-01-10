import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ColorPalette from './components/ColorPalette';
import Semantic from './components/Semantic';
import Typography from './components/Typography';
import CornerRadiusDemo from './components/CornerRadiusDemo';
import Grid from './components/Grid';
import ExamplePage from './components/ExamplePage';

const App = () => {
    const [backendData, setBackendData] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ 백엔드에서 데이터 가져오기
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/health')
            .then((response) => {
                setBackendData(response.data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data from backend:', error);
                setBackendData('백엔드 연결 실패');
                setLoading(false);
            });
    }, []);

    return (
        <Router>
            <Routes>
                {/* 메인 페이지 */}
                <Route
                    path="/"
                    element={
                        <>
                            <h1>FastAPI 연결 상태</h1>
                            {loading ? <p>로딩 중...</p> : <p>{backendData}</p>}
                            <ColorPalette />
                            <Semantic />
                            <Typography />
                            <CornerRadiusDemo />
                            <Grid />
                        </>
                    }
                />

                {/* Example 페이지 */}
                <Route path="/example" element={<ExamplePage />} />
            </Routes>
        </Router>
    );
};

export default App;
