"use client";

import React from 'react';
import SectionScrollButton from './SectionScrollButton';

const LandingText: React.FC = () => (
    <div className="flex-col justify-center items-center gap-6 flex">
        <div className="flex-grow justify-center text-red-100 text-6xl font-bold font-brockmann">
            {`{FromScript}`}
        </div>
        <div className="self-stretch text-center">
      <span className="text-red-100 text-xl font-bold font-brockmann">
        Nom masculin
        <br />
      </span>
            <span className="text-red-100 text-lg font-normal">
        Déf.: La version moderne du concept «from scratch» appliquée au web.
      </span>
        </div>
    </div>
);

const LandingScreen: React.FC = () => {
    return (
        <>
            {/* Landing Page Section */}
            <div className="w-screen h-screen flex-grow justify-center items-center inline-flex bg-fond3">
                <div className="w-2/4 flex-col justify-start items-center gap-8 inline-flex">
                    <LandingText />
                    <div className="justify-start items-start gap-4 inline-flex">
                        <SectionScrollButton text="En savoir plus" className="px-6 py-3 bg-white rounded-full border border-white text-blue-700 text-xl font-bold font-brockmann leading-7" targetSection="about" />
                        <SectionScrollButton text="Contact" className="px-6 py-3 rounded-full border-2 border-white text-white text-xl font-bold font-brockmann" targetSection="contact" />
                    </div>
                </div>
            </div>

            {/*/!* About Section *!/*/}
            {/*<section id="about" className="h-screen flex justify-center items-center bg-gray-200">*/}
            {/*    <h2 className="text-4xl font-bold">About FromScript</h2>*/}
            {/*</section>*/}
        </>
    );
};

export default LandingScreen;
