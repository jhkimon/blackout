import React from 'react';

const ColorPalette = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Tailwind CSS Color Palette</h1>

            {/* Primary Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Primary Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-primary-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-primary-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-primary-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-primary-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-primary-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-primary-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-primary-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-primary-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-primary-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>

            {/* Success Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Success Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-success-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-success-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-success-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-success-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-success-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-success-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-success-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-success-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-success-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>

            {/* Info Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Info Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-info-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-info-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-info-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-info-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-info-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-info-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-info-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-info-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-info-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>

            {/* Warning Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Warning Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-warning-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-warning-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-warning-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-warning-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-warning-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-warning-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-warning-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-warning-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-warning-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>

            {/* Danger Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Danger Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-danger-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-danger-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-danger-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-danger-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-danger-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-danger-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-danger-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-danger-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-danger-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-4">Grey Scale</h1>
            {/* Grey - Cool Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Cool Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-cool-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-cool-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-cool-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-cool-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-cool-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-cool-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-cool-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-cool-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-cool-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>
            {/* Grey - Neutral Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Neutral Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-gray-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-gray-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-gray-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-gray-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-gray-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-gray-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-gray-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-gray-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-gray-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>
            {/* Grey - Warm Colors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Warm Colors</h2>
                <div className="flex">
                    <div className="w-20 h-36 bg-warm-100 flex items-center justify-center">100</div>
                    <div className="w-20 h-36 bg-warm-200 flex items-center justify-center">200</div>
                    <div className="w-20 h-36 bg-warm-300 flex items-center justify-center">300</div>
                    <div className="w-20 h-36 bg-warm-400 flex items-center justify-center">400</div>
                    <div className="w-20 h-36 bg-warm-500 text-white flex items-center justify-center">500</div>
                    <div className="w-20 h-36 bg-warm-600 text-white flex items-center justify-center">600</div>
                    <div className="w-20 h-36 bg-warm-700 text-white flex items-center justify-center">700</div>
                    <div className="w-20 h-36 bg-warm-800 text-white flex items-center justify-center">800</div>
                    <div className="w-20 h-36 bg-warm-900 text-white flex items-center justify-center">900</div>
                </div>
            </div>
        </div>
    );
};

export default ColorPalette;
