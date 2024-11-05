"use client";

import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import SectionScrollButton from "../components/SectionScrollButton";

// Reusable Timeline Item Component
const TimelineItem: React.FC<{ title: string; description: string; isLast?: boolean }> = ({
                                                                                            title,
                                                                                            description,
                                                                                            isLast = false
                                                                                          }) => {
  return (
    <div className="flex gap-4 md:gap-8">
      <div className="flex flex-col justify-between items-center">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        {!isLast && <div className="w-0.5 h-8 md:h-12 bg-[#64a8c5]"></div>}
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="font-bold text-lg md:text-xl text-white leading-6 md:leading-7">{title}</p>
        <p className="text-xs md:text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

const TimeLineSection: React.FC = () => {
  // Timeline Data
  const timelineData = [
    {
      title: "Développement web custom",
      description: "Nous construisons sur mesure nos solutions logicielles de A à Z pour les adapter à vos besoins."
    },
    {
      title: "La sécurité avant tout!",
      description: "Nous développons des logiciels FromScript qui protègent vos données confidentielles."
    },
    {
      title: "Conformité à la loi 25",
      description: "Nous mettons tout en place pour respecter la loi 25 et protéger les données de vos clients."
    },
    {
      title: "Accompagnement humain",
      description: "Nous travaillons pour vous, mais surtout avec vous. On vous accompagne dans la création du début à la fin."
    }
  ];

  return (
    <ParallaxProvider>
      <div
        className="w-full py-12 h-auto bg-fond3 flex flex-col md:flex-row items-center md:gap-14 justify-center relative overflow-hidden px-4 md:px-10"
      >
        {/* Left Side: About Content */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <Parallax translateY={[0, 100]} easing="easeOutQuad">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-white text-sm md:text-base font-semibold font-brockmann">
                À propos
              </div>
              <div className="text-blue-500 text-3xl md:text-5xl font-bold font-brockmann">
                Pourquoi FromScript?
              </div>

              <div className="flex flex-col md:flex-row justify-center md:justify-start mt-4 md:mt-6">
                <SectionScrollButton
                  text="En savoir plus"
                  className="px-4 py-2 md:px-6 md:py-3 border-2 border-white text-white hover:bg-white hover:text-blue-500 transition duration-300 mb-4 md:mb-0 md:mr-4"
                  targetSection="about"
                />
                <SectionScrollButton
                  text="Contact"
                  className="px-4 py-2 md:px-6 md:py-3 text-white underline hover:text-teal-300 transition duration-300"
                  targetSection="contact"
                />
              </div>
            </div>
          </Parallax>
        </div>

        {/* Right Side: Timeline */}
        <div className="flex flex-col space-y-6 md:space-y-8 max-w-md">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              description={item.description}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default TimeLineSection;
