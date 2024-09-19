"use client";
import { useState } from 'react';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue-800 text-white py-4 font-brockmann">
            <div className="mx-auto px-4 flex justify-between items-center">
                <div>
                    <h1 className=" text-2xl font-bold">FromScript</h1>
                </div>
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-xl px-3 py-1 rounded focus:outline-none focus:shadow-outline"
                    aria-label="Toggle navigation"
                >
                    &#9776; {/* Hamburger Icon */}
                </button>
                <div
                    className={`${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-full left-0 right-0 z-10 flex-col md:flex-row md:flex bg-blue-800 md:bg-transparent shadow-md md:shadow-none`}
                    style={{zIndex: 1000}}  // Ensure it's on top of other content
                >
                    <a href="#" className="px-4 py-2 block text-sm hover:underline">Services</a>
                    <a href="#" className="px-4 py-2 block text-sm hover:underline">About</a>
                    <a href="#" className="px-4 py-2 block text-sm hover:underline">Contact</a>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
