import React from 'react';

// grid 기본 설정으로 grid grid-cols-3 md:grid-cols-4, gap-2 사용.
const Grid = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">12-Column Grid</h1>
            <section className="container mx-auto grid grid-cols-3 md:grid-cols-4 gap-2 py-10">
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
                <div className="bg-gray-800 h-40 rounded-md"></div>
            </section>
            <div className="mt-4 text-sm text-gray-600">
                <p>Column: 12</p>
                <p>Margin: Centered (via Tailwind container)</p>
                <p>Padding: 64px</p>
                <p>Gutter: 8px (gap-2)</p>
            </div>
        </div>
    );
};

export default Grid;
