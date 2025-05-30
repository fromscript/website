"use client";

import React from 'react';

type SectionScrollButtonProps = {
    text: string;
    className?: string;
    targetSection: string;
    toggleMenu?: () => void; // <-- New optional prop
};

const SectionScrollButton: React.FC<SectionScrollButtonProps> = ({ text, className = '', targetSection, toggleMenu }) => { // <-- toggleMenu added to destructuring
    const handleScroll = () => {
        const section = document.getElementById(targetSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            if (toggleMenu) { // <-- Check if toggleMenu is provided
                toggleMenu(); // <-- Call toggleMenu
            }
        }
    };

    return (
        <button className={`rounded-3xl whitespace-nowrap ${className}`} onClick={handleScroll}>
            {text}
        </button>
    );
};

export default SectionScrollButton;
