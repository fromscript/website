"use client";

import React from 'react';
import Image from 'next/image';


const LogoCarousel: React.FC = () => {
    return (
        <div className="flex self-stretch justify-end w-full overflow-hidden">
            <div className="flex items-center justify-center gap-8">
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 1" width={140} height={56}/>
                </div>
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 2" width={140} height={56}/>
                </div>
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 3" width={140} height={56}/>
                </div>
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 4" width={140} height={56}/>
                </div>
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 5" width={140} height={56}/>
                </div>
                {/* Repeat logos for continuous scrolling */}
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 1" width={140} height={56}/>
                </div>
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 2" width={140} height={56}/>
                </div>
                <div className="w-[140px] h-14">
                    <Image src="logos/Secondaire_bleu.svg" alt="Client 3" width={140} height={56}/>
                </div>
            </div>
        </div>
    );
};

const PreviousClientSection: React.FC = () => {

    const handleGithubRedirect = () => {
        window.open('https://github.com/fromscript', '_blank');
    };

    return (
        <div className="w-full bg-blue-700 px-16 py-20 flex flex-col justify-center items-center gap-20">
            <div className="flex justify-between items-start gap-10">
                <div className="flex items-center">
                    <h2 className="text-red-100 text-5xl font-bold font-brockmann">
                        Ils nous ont<br/>fait confiance
                    </h2>
                </div>
                <div className="flex items-center">
                    <LogoCarousel/>
                </div>
            </div>
            <button
                onClick={handleGithubRedirect}
                className="px-6 py-3 bg-white text-blue-700 text-xl font-bold font-brockmann rounded-full"
            >
                Voir tous nos projets sur Github
            </button>
        </div>
    );
};

export default PreviousClientSection;
