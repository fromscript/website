import React from 'react';
import LogoCarousel from './LogoCarousel';

const PreviousClientSection: React.FC = () => {

    const handleGithubRedirect = () => {
        window.open('https://github.com/fromscript', '_blank');
    };

    return (
        <div className="w-full bg-blue-700 px-6 md:px-16 py-20 flex flex-col justify-between items-center gap-12 md:gap-20">
            <div className="self-stretch flex flex-col md:flex-row justify-center items-center text-center md:items-start gap-6 md:gap-16">
                <h2 className="text-red-100 text-5xl text-center md:text-start font-bold font-brockmann whitespace-nowrap">
                    Ils nous ont<br />fait confiance
                </h2>
                <div className="w-full md:w-1/2 justify-center items-center overflow-hidden">
                    <LogoCarousel />
                </div>
            </div>
            <button
                onClick={handleGithubRedirect}
                className="px-6 py-3 bg-white text-blue-700 text-xl font-bold font-brockmann rounded-3xl"
            >
                Voir tous nos projets sur Github
            </button>
        </div>
    );
};

export default PreviousClientSection;
