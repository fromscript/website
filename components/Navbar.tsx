import { NextPage } from 'next';
import Image from 'next/image';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import HamburgerMenu from './HamburgerMenu';

const Navbar: NextPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-black border-b border-black">
            <div className="h-24 px-8 w-full flex justify-between items-center">
                {/* Logo */}
                <div className="flex justify-center items-center">
                    <Image
                        priority
                        src="/logos/V_bleu.svg"
                        height={60}
                        width={150}
                        alt="FromScript"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    <NavLinks />
                </div>

                {/* Hamburger Menu */}
                <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>

            {/* Mobile Menu */}
            <MobileMenu isMenuOpen={isMenuOpen} />
        </nav>
    );
};

export default Navbar;
