import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ColorPalette from '../components/ColorPalette';
import Semantic from '../components/Semantic';
import Typography from '../components/Typography';
import CornerRadiusDemo from '../components/CornerRadiusDemo';
import Grid from '../components/Grid';

const Debugging = () => {
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
        <>
            <h1>FastAPI 연결 상태</h1>
            {loading ? <p>로딩 중...</p> : <p>{backendData}</p>}

        </>
    );
};

export default Debugging;
