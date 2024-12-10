import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-center items-center">
                <div className="space-x-6 flex text-base sm:text-lg md:text-xl lg:text-3xl">
                    
                    <Link to="/" className="hover:text-gray-400">About Me</Link>
                    <Link to="/skills" className="hover:text-gray-400">Skills</Link>
                    <Link to="/projects" className="hover:text-gray-400">Projects</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;

