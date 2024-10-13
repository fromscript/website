"use client";

import React from 'react';
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

const AboutSection: React.FC = () => {
    return (
        <ParallaxProvider>
            <div className="w-screen h-auto bg-white flex flex-col items-center relative overflow-hidden">
                <div className="self-stretch flex flex-col px-16 py-28 overflow-hidden h-72">
                    <Parallax translateX={[80, 15]} easing="easeOutQuad">
                        <div className="text-blue-700 text-8xl font-bold font-brockmann">
                            La technologie
                        </div>
                    </Parallax>
                    <Parallax translateX={[15, 55]} easing="easeOutQuad">
                        <div className="text-blue-700 text-8xl font-bold font-brockmann">
                            accessible à tous
                        </div>
                    </Parallax>
                </div>
                <div className="w-full h-auto px-16 py-28 bg-white flex justify-between items-center">
                    <div className="flex-grow flex flex-col justify-center items-center text-left">
                        <div className="text-blue-500 text-[40px] font-bold font-brockmann leading-tight">
                            Découvrez l'expertise de<br/>FromScript en développement<br/>logiciel et sécurité<br/>informatique.
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center items-center text-left">
                        <div className="justify-start">
                            <p className="text-blue-700 text-lg font-normal leading-7">
                                Avec plus de 8 ans d'expérience, FromScript se spécialise dans le<br/>développement de
                                solutions logicielles sur mesure et la sécurité<br/>informatique. Nous nous engageons à
                                rendre la technologie<br/>accessible tout en garantissant une sécurité optimale.
                            </p>
                            <br/>
                            <p className="text-blue-700 text-lg font-bold leading-7">
                                Nos valeurs fondamentales sont l'accompagnement<br/>personnalisé, la qualité et la
                                satisfaction client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default AboutSection;
