"use client";

import React from "react";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

const TimeLineSection: React.FC = () => {
    return (
        <ParallaxProvider>
            <div
                className="w-screen h-auto bg-fond3 flex items-center gap-14 justify-center relative overflow-hidden py-16 px-10">
                <div className="self-stretch flex flex-col gap-6">
                    <Parallax translateY={[-50, 150]} easing="easeOutQuad">
                        <div className="text-white text-base font-semibold font-brockmann">
                            À propos
                        </div>
                        <div className="text-blue-500 text-5xl font-bold font-brockmann">
                            Pourquoi FromScript?
                        </div>

                        <div className="mt-6">
                            <button
                                className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-500 transition duration-300 mr-4">
                                En savoir plus
                            </button>
                            <button
                                className="px-6 py-3 text-white underline hover:text-teal-300 transition duration-300">
                                Contact
                            </button>
                        </div>
                    </Parallax>
                </div>

                {/* Right Side: Timeline */}
                <div className="flex flex-col space-y-8 max-w-lg">
                    {/* Timeline Item 1 */}
                    <div className="flex items-start gap-10">
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <div className="w-0.5 h-12 bg-[#64a8c5]"></div>
                        </div>
                        <div className="flex-col gap-4">
                            <p className="font-bold text-xl text-white leading-7">Développement web custom</p>
                            <p className="text-sm text-white">
                                Nous construisons sur mesure nos solutions logicielles de A à Z pour les adapter à vos
                                besoins.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="flex items-start gap-10">
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <div className="w-0.5 h-12 bg-[#64a8c5]"></div>
                        </div>
                        <div className="flex-col gap-4">
                            <p className="font-bold text-xl text-white leading-7">La sécurité avant tout!</p>
                            <p className="text-sm text-white">
                                Nous développons des logiciels FromScript qui protègent vos données confidentielles.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="flex items-start gap-10">
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <div className="w-0.5 h-12 bg-[#64a8c5]"></div>
                        </div>
                        <div className="flex-col gap-4">
                            <p className="font-bold text-xl text-white leading-7">Conformité à la loi 25</p>
                            <p className="text-sm text-white">
                                Nous mettons tout en place pour respecter la loi 25 et protéger les données de vos
                                clients.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="flex items-start gap-10">
                        <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <div className="flex-col gap-4">
                            <p className="font-bold text-xl text-white leading-7">Accompagnement humain</p>
                            <p className="text-sm text-white">
                                Nous travaillons pour vous, mais surtout avec vous. On vous accompagne dans la création
                                du début à la
                                fin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default TimeLineSection;
