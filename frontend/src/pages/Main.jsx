import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BoxComponent from '../components/BoxComponent';

const HomePage = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: 'url(/images/background.png)' }}
        >
            <div className="bg-black/30 text-on-surface">
                {/* Navbar */}
                <header className="w-full px-6 py-6 flex justify-between items-center backdrop-blur-lg bg-black/20">
                    {' '}
                    {/* container 제거하고 w-full 추가 */}
                    <img src="/images/Logo.png" alt="Logo" className="w-30 h-8" />
                    <nav className="hidden md:flex space-x-12">
                        <a href="/" className="text-heading-5 hover:text-gray-400 flex items-center gap-2">
                            Ideas
                            <img src="/images/toggleIcon.png" alt="Toggle Icon" className="w-4 h-4" />
                        </a>
                        <a href="/" className="text-heading-5 hover:text-gray-400 flex items-center gap-2">
                            Prompts
                            <img src="/images/toggleIcon.png" alt="Toggle Icon" className="w-4 h-4" />
                        </a>
                        <a href="/" className="text-heading-5 hover:text-gray-400 flex items-center gap-2">
                            User
                            <img src="/images/toggleIcon.png" alt="Toggle Icon" className="w-4 h-4" />
                        </a>
                        <a href="/" className="text-heading-5 hover:text-gray-400 flex items-center gap-2">
                            Settings
                            <img src="/images/toggleIcon.png" alt="Toggle Icon" className="w-4 h-4" />
                        </a>
                    </nav>
                    <div className="flex space-x-4 md:space-x-6">
                        <button className="text-heading-5 hover:text-gray-400">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </header>
            </div>

            {/* Box 컴포넌트 사용 */}
            <BoxComponent />
        </div>
    );
};

export default HomePage;
