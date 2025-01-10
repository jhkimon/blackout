import React from 'react';

const CornerRadiusDemo = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Corner Radius</h1>
            <div className="flex space-x-4">
                {/* Rounded Small */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-small"></div>
                    <p className="mt-2 text-sm font-medium">Rounded_Small</p>
                    <p className="text-gray-600 text-sm">4px</p>
                </div>

                {/* Rounded Medium */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-medium"></div>
                    <p className="mt-2 text-sm font-medium">Rounded_Medium</p>
                    <p className="text-gray-600 text-sm">8px</p>
                </div>

                {/* Rounded Large */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-large"></div>
                    <p className="mt-2 text-sm font-medium">Rounded_Large</p>
                    <p className="text-gray-600 text-sm">16px</p>
                </div>

                {/* Rounded XLarge */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-xlarge"></div>
                    <p className="mt-2 text-sm font-medium">Rounded_XLarge</p>
                    <p className="text-gray-600 text-sm">24px</p>
                </div>

                {/* Rounded 2XLarge */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-2xlarge"></div>
                    <p className="mt-2 text-sm font-medium">Rounded_2XLarge</p>
                    <p className="text-gray-600 text-sm">32px</p>
                </div>

                {/* Full Rounded */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                    <p className="mt-2 text-sm font-medium">Full Rounded</p>
                    <p className="text-gray-600 text-sm">9999px</p>
                </div>
            </div>
        </div>
    );
};

export default CornerRadiusDemo;
