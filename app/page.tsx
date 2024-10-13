"use client";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../sections/ContactForm";
import LandingScreen from "../sections/LandingScreen";
import OpenSourceProjectSection from "../components/OpenSourceProjectSection";
import PreviousClientSection from "../components/PreviousClientSection";
import InfiniteMarquee from "../components/InfiniteLooper";
import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import ServiceSection from "../sections/ServiceSection";
import TimeLineSection from "../sections/TimeLineSection";

export default function Home() {
    return (
            <div className="w-screen flex-col">
                <Navbar/>
                <LandingScreen/>
                <AboutSection/>
                <ServiceSection/>
                <TimeLineSection/>
                {/*/!*------------------------------------------------*!/*/}

                {/*<div*/}
                {/*    className="w-[1440px] h-[785.10px] px-16 pt-[74px] pb-28 flex-col justify-start items-start gap-20 inline-flex">*/}
                {/*    <div className="self-stretch justify-start items-start gap-20 inline-flex">*/}
                {/*        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">*/}
                {/*            <div className="self-stretch h-[145px] flex-col justify-start items-start gap-4 flex">*/}
                {/*                <div className="justify-start items-center inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="text-red-100 text-base font-semibold font-brockmann leading-normal">À*/}
                {/*                        propos*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div*/}
                {/*                    className="w-[656px] h-[105px] text-blue-500 text-5xl font-bold font-brockmann leading-[57.60px]">Pourquoi*/}
                {/*                    FromScript?*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="justify-start items-center gap-6 inline-flex">*/}
                {/*                <div*/}
                {/*                    className="px-6 py-3 rounded-[30px] border-2 border-white justify-center items-center gap-2 flex">*/}
                {/*                    <div className="text-red-100 text-xl font-bold font-brockmann leading-7">En savoir*/}
                {/*                        plus*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className="justify-center items-center gap-2 flex">*/}
                {/*                    <div*/}
                {/*                        className="text-red-100 text-lg font-bold  leading-7">Contact*/}
                {/*                    </div>*/}
                {/*                    <div className="w-6 h-6 relative"/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">*/}
                {/*            <div className="self-stretch justify-start items-start gap-10 inline-flex">*/}
                {/*                <div className="flex-col justify-start items-center gap-4 inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="w-[100px] h-[0px] origin-top-left rotate-90 bg-blue-500 border-2 border-blue-500"></div>*/}
                {/*                </div>*/}
                {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="self-stretch text-red-100 text-xl font-bold font-brockmann leading-7">Développement*/}
                {/*                        web custom*/}
                {/*                    </div>*/}
                {/*                    <div*/}
                {/*                        className="self-stretch text-red-100 text-base font-normal  leading-normal">Nous*/}
                {/*                        construisons sur mesure nos solutions logicielles de A à Z pour les adapter à vos*/}
                {/*                        besoins.*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="self-stretch justify-start items-start gap-10 inline-flex">*/}
                {/*                <div className="flex-col justify-start items-center gap-4 inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="w-[100px] h-[0px] origin-top-left rotate-90 bg-blue-500 border-2 border-blue-500"></div>*/}
                {/*                </div>*/}
                {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="self-stretch text-red-100 text-xl font-bold font-brockmann leading-7">La*/}
                {/*                        sécurité avant tout!*/}
                {/*                    </div>*/}
                {/*                    <div className="self-stretch"><span*/}
                {/*                        className="text-red-100 text-base font-normal  leading-normal">Nous développons des logiciels </span><span*/}
                {/*                        className="text-red-100 text-base font-bold  leading-normal">FromScript</span><span*/}
                {/*                        className="text-red-100 text-base font-normal  leading-normal"> qui protègent vos données confidentielles.</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="self-stretch justify-start items-start gap-10 inline-flex">*/}
                {/*                <div className="flex-col justify-start items-center gap-4 inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="w-[100px] h-[0px] origin-top-left rotate-90 bg-blue-500 border-2 border-blue-500"></div>*/}
                {/*                </div>*/}
                {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="self-stretch text-red-100 text-xl font-bold font-brockmann leading-7">Conformité*/}
                {/*                        à la loi 25*/}
                {/*                    </div>*/}
                {/*                    <div*/}
                {/*                        className="self-stretch text-red-100 text-base font-normal  leading-normal">Nous*/}
                {/*                        mettons tout en place pour respecter la loi 25 et protéger les données de vos*/}
                {/*                        clients.*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="self-stretch justify-start items-start gap-10 inline-flex">*/}
                {/*                <div className="flex-col justify-start items-center gap-4 inline-flex"/>*/}
                {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">*/}
                {/*                    <div*/}
                {/*                        className="self-stretch text-red-100 text-xl font-bold font-brockmann leading-7">Accompagnement*/}
                {/*                        humain*/}
                {/*                    </div>*/}
                {/*                    <div className="self-stretch"><span*/}
                {/*                        className="text-red-100 text-base font-normal  leading-normal">Nous travaillons pour vous, mais surtout </span><span*/}
                {/*                        className="text-red-100 text-base font-bold  leading-normal">avec</span><span*/}
                {/*                        className="text-red-100 text-base font-normal  leading-normal"> vous. On vous accompagne dans la création du début à la fin.</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*------------------------------------------------*/}
                <InfiniteMarquee/>
                <HeroSection/>
                <OpenSourceProjectSection/>
                <PreviousClientSection/>
                <ContactForm/>
                <Footer/>
            </div>
    );
}
