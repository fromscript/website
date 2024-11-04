"use client";

import React from "react";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import useIsMobile from "../hook/useIsMobile";

const AboutSection: React.FC = () => {
  // Check if the screen size is mobile using `window.matchMedia`
  const isMobile = useIsMobile();

  return (
    <ParallaxProvider>
      <section id="about"
               className="w-full pb-12 md:py-12 bg-white flex flex-col items-center relative overflow-hidden">
        {/* Parallax Effect Section */}
        <div className="self-stretch flex text-5xl md:text-7xl lg:text-8xl  font-bold font-brockmann justify-center items-center flex-col overflow-hidden h-72">
          <Parallax className="text-blue-700"
                    translateX={[60, -40]}
                    easing="easeOutQuad"
                    disabled={isMobile}
          >
            La technologie
          </Parallax>
          <Parallax className="text-center lg:text-start text-blue-700"
                    translateX={[-60, 40]}
                    easing="easeOutQuad"
                    disabled={isMobile}
          >
            accessible à tous
          </Parallax>
        </div>

        {/* Text Content Section */}
        <div className="flex =self-stretch justify-center items-center">
          <div className="md:max-w-5xl h-auto bg-white flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4 lg:px-0">
            <div className="flex flex-col justify-center items-center">
              <div className="text-blue-500 text-center lg:text-start text-2xl md:text-[40px] text-wrap font-bold font-brockmann leading-tight">
                Découvrez l'expertise de FromScript en développement logiciel et sécurité informatique.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-left">
              <div className="justify-start text-center lg:text-start">
                <p className="text-blue-700 text-base md:text-lg font-normal leading-6 md:leading-7">
                  Avec plus de 8 ans d'expérience, FromScript se spécialise dans le développement de solutions
                  logicielles sur mesure et la sécurité informatique. Nous nous engageons à rendre la technologie
                  accessible tout en garantissant une sécurité optimale. </p><br/>
                <p className="text-blue-700 text-base md:text-lg font-bold leading-6 md:leading-7">
                  Nos valeurs fondamentales sont l'accompagnement personnalisé, la qualité et la satisfaction
                  client. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default AboutSection;
