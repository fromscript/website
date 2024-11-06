"use client";

import React from 'react';

type SectionScrollButtonProps = {
    text: string;
    className?: string;
    targetSection: string;
};

const SectionScrollButton: React.FC<SectionScrollButtonProps> = ({ text, className = '', targetSection }) => {
    const handleScroll = () => {
        const section = document.getElementById(targetSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex justify-center items-center gap-2">
            <button className={`rounded-3xl whitespace-nowrap ${className}`} onClick={handleScroll}>
                {text}
            </button>
        </div>
    );
};

export default SectionScrollButton;
