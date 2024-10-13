import type {NextPage} from 'next';
import Image from "next/image";
import React from "react";
import SectionScrollButton from "./SectionScrollButton";

const Navbar: NextPage = () => {
    return (
        <div className="h-24 px-8 w-screen bg-black border-b border-black flex-col justify-center items-center inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-center items-center flex">
                    <Image
                        priority
                        src="logos/V_bleu.svg"
                        height={60}
                        width={150}
                        alt="FromScript"
                    />
                </div>
                <div className="justify-center items-center gap-8 flex">
                    <div className="justify-end items-center gap-8 flex">
                        <SectionScrollButton text="Accueil" className="text-white text-base font-semibold leading-normal" targetSection="landing" />
                        <SectionScrollButton text="Services" className="text-white text-base font-semibold leading-normal" targetSection="services" />
                        <SectionScrollButton text="À propos" className="text-white text-base font-semibold leading-normal" targetSection="about" />
                    </div>
                    <div className="justify-center items-center gap-4 flex">
                        <SectionScrollButton text="Contact" className="px-5 py-2 rounded-full border-2 border-blue-500 text-white text-base font-extrabold leading-normal" targetSection="contact" />
                    </div>
                </div>
            </div>
        </div>);
};

export default Navbar;
