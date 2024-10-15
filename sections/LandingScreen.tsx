"use client";

import React from 'react';
import SectionScrollButton from '../components/SectionScrollButton';

const LandingText: React.FC = () => (
    <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-red-100 text-6xl md:text-5xl sm:text-4xl font-bold font-brockmann text-center">
            {`{FromScript}`}
        </div>
        <div className="text-center">
            <span className="block text-red-100 text-xl md:text-lg sm:text-base font-bold font-brockmann">
                Nom masculin
            </span>
            <span className="block text-red-100 text-lg md:text-base sm:text-sm font-normal">
                Déf.: La version moderne du concept «from scratch» appliquée au web.
            </span>
        </div>
    </div>
);

const LandingScreen: React.FC = () => {
    return (
        <section id="landing" className="w-full h-screen flex justify-center items-center bg-fond3">
            <div className="w-3/4 lg:w-2/4 md:w-3/4 sm:w-full flex flex-col justify-center items-center gap-8">
                <LandingText />
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start gap-4">
                    <SectionScrollButton
                        text="En savoir plus"
                        className="px-6 py-3 bg-white border border-white text-blue-700 text-xl font-bold font-brockmann leading-7"
                        targetSection="about"
                    />
                    <SectionScrollButton
                        text="Contact"
                        className="px-6 py-3 border-2 border-white text-white text-xl font-bold font-brockmann"
                        targetSection="contact"
                    />
                </div>
            </div>
        </section>
    );
};

export default LandingScreen;
