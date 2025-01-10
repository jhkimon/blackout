import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const ExamplePage = () => {
    return (
        <div className="bg-surface text-on-surface min-h-screen">
            {/* Navbar */}
            <header className="container mx-auto py-6 flex justify-between items-center">
                <div className="text-heading-5 font-bold md:text-heading-3">LOGO</div>
                <nav className="hidden md:flex space-x-12">
                    <a href="/" className="text-heading-5 hover:text-gray-400">
                        Nav1
                    </a>
                    <a href="/" className="text-heading-5 hover:text-gray-400">
                        Nav2
                    </a>
                    <a href="/" className="text-heading-5 hover:text-gray-400">
                        Nav3
                    </a>
                    <a href="/" className="text-heading-5 hover:text-gray-400">
                        Nav4
                    </a>
                </nav>
                <div className="flex space-x-4 md:space-x-6">
                    <button className="text-heading-5 hover:text-gray-400">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="text-heading-5 hover:text-gray-400">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto text-center py-16">
                <h1 className="text-heading-1 md:text-display font-bold mb-6">Walk through the world with us</h1>
                <p className="text-body-large md:text-body-base text-gray-400 max-w-2xl mx-auto mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus interdum sed id elementum. Quam vel
                    aliquam sit volutpat. Faucibus nec gravida ipsum pulvinar vel.
                </p>
                <button className="bg-primary-500 text-heading-5 md:text-heading-4 px-6 py-3 rounded-full font-medium hover:bg-primary-400">
                    Get started
                </button>
            </section>

            {/* Grid Section */}
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
        </div>
    );
};

export default ExamplePage;
