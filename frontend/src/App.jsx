import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorPalette from './components/ColorPalette';
import Semantic from './components/Semantic';
import Typography from './components/Typography';
import CornerRadiusDemo from './components/CornerRadiusDemo';
import Grid from './components/Grid';
import ExamplePage from './components/ExamplePage';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* 메인 페이지 */}
                <Route
                    path="/"
                    element={
                        <>
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
