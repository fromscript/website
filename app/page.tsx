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
            <div className="w-full flex flex-col">
                <Navbar/>
                <LandingScreen/>
                <AboutSection/>
                <ServiceSection/>
                <TimeLineSection/>
                <InfiniteMarquee/>
                <HeroSection/>
                <OpenSourceProjectSection/>
                {/*<PreviousClientSection/>*/}
                <ContactForm/>
                <Footer/>
            </div>
    );
}
