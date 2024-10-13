"use client";

import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import SectionScrollButton from "../components/SectionScrollButton";

// Reusable Timeline Item Component
const TimelineItem: React.FC<{ title: string; description: string; isLast?: boolean }> = ({ title, description, isLast = false }) => {
    return (
        <div className="flex gap-8">
            <div className="flex flex-col justify-between items-center">
                <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {!isLast && <div className="w-0.5 h-12 bg-[#64a8c5]"></div>}
            </div>
            <div className="flex-col gap-4">
                <p className="font-bold text-xl text-white leading-7">{title}</p>
                <p className="text-sm text-white">{description}</p>
            </div>
        </div>
    );
};

const TimeLineSection: React.FC = () => {
    // Timeline Data
    const timelineData = [
        { title: "Développement web custom", description: "Nous construisons sur mesure nos solutions logicielles de A à Z pour les adapter à vos besoins." },
        { title: "La sécurité avant tout!", description: "Nous développons des logiciels FromScript qui protègent vos données confidentielles." },
        { title: "Conformité à la loi 25", description: "Nous mettons tout en place pour respecter la loi 25 et protéger les données de vos clients." },
        { title: "Accompagnement humain", description: "Nous travaillons pour vous, mais surtout avec vous. On vous accompagne dans la création du début à la fin." }
    ];

    return (
        <ParallaxProvider>
            <div className="w-screen h-auto bg-fond3 flex items-center gap-14 justify-center relative overflow-hidden py-16 px-10">
                <div className="self-stretch flex flex-col gap-6">
                    <Parallax translateY={[-50, 150]} easing="easeOutQuad">
                        <div className="text-white text-base font-semibold font-brockmann">
                            À propos
                        </div>
                        <div className="text-blue-500 text-5xl font-bold font-brockmann">
                            Pourquoi FromScript?
                        </div>

                        <div className="flex flex-row justify-center mt-6">
                            <SectionScrollButton text='En savoir plus' className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-500 transition duration-300 mr-4" targetSection='about'/>
                            <SectionScrollButton text='Contact' className="px-6 py-3 text-white underline hover:text-teal-300 transition duration-300" targetSection='contact'/>
                        </div>
                    </Parallax>
                </div>

                {/* Right Side: Timeline */}
                <div className="flex flex-col space-y-8 max-w-lg">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            isLast={index === timelineData.length - 1} // Condition to check if it's the last item
                        />
                    ))}
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default TimeLineSection;
