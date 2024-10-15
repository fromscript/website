"use client";

import React from 'react';
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

const AboutSection: React.FC = () => {
    return (
        <ParallaxProvider>
            <section id="about" className="w-full py-12 h-auto bg-white flex flex-col items-center relative overflow-hidden">
                <div className="self-stretch flex justify-center items-center flex-col overflow-hidden h-72">
                    <Parallax
                        className="text-blue-700 text-8xl font-bold font-brockmann"
                        translateX={[60, -40]}
                        easing="easeOutQuad"
                        disabled={false}
                    >
                        La technologie
                    </Parallax>
                    <Parallax
                        className="text-start text-blue-700 text-8xl font-bold font-brockmann"
                        translateX={[-60, 40]}
                        easing="easeOutQuad"
                        disabled={false}
                    >
                        accessible à tous
                    </Parallax>
                </div>

                <div className="self-stretch h-auto bg-white flex justify-center items-center gap-20">
                    <div className="flex flex-col justify-center items-center text-left">
                        <div className="text-blue-500 text-[40px] font-bold font-brockmann leading-tight">
                            Découvrez l'expertise de<br/>FromScript en développement<br/>logiciel et sécurité<br/>informatique.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-left">
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
            </section>
        </ParallaxProvider>
    );
};

export default AboutSection;
