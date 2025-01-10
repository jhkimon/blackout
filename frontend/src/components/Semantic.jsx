import React from 'react';

const SemanticPalette = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Tailwind CSS Semantic Palette</h1>
            <div className="flex space-x-4">
                {/* Primary */}
                <div className="text-center">
                    <div className="w-60 h-20 bg-primary-500 text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FF6901</p>
                    </div>
                    <div className="w-60 h-20 bg-white text-primary-500 relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">On Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FFFFFF</p>
                    </div>
                </div>

                {/* Success */}
                <div className="text-center">
                    <div className="w-60 h-20 bg-success-500 text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#40D34E</p>
                    </div>
                    <div className="w-60 h-20 bg-white text-success-500 relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">On Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FFFFFF</p>
                    </div>
                </div>

                {/* Info */}
                <div className="text-center">
                    <div className="w-60 h-20 bg-info-500 text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">00B0FC</p>
                    </div>
                    <div className="w-60 h-20 bg-white text-info-500 relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">On Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FFFFFF</p>
                    </div>
                </div>

                {/* Warning */}
                <div className="text-center">
                    <div className="w-60 h-20 bg-warning-500 text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FCB620</p>
                    </div>
                    <div className="w-60 h-20 bg-white text-warning-500 relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">On Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FFFFFF</p>
                    </div>
                </div>

                {/* Danger */}
                <div className="text-center">
                    <div className="w-60 h-20 bg-danger-500 text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FF5139</p>
                    </div>
                    <div className="w-60 h-20 bg-white text-danger-500 relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">On Primary</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#FFFFFF</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex space-x-4">
                <div className="text-center flex space-x-4">
                    <div className="w-60 h-20 bg-surface text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Surface</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#000000</p>
                    </div>
                    <div className="w-60 h-20 bg-surface-bright text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Surface Bright</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#1A1A1A</p>
                    </div>
                    <div className="w-60 h-20 bg-outline text-white relative">
                        <p className="absolute top-2 left-2 text-sm font-semibold">Outline</p>
                        <p className="absolute bottom-2 right-2 text-xs font-semibold">#828282</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SemanticPalette;
