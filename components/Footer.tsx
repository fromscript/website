import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import SectionScrollButton from "./SectionScrollButton";

type LinkItemProps = {
    text: string;
    onClick?: () => void;
    isBlue?: boolean;
};

const LinkItem: React.FC<LinkItemProps> = ({ text, onClick, isBlue }) => {
    return (
        <button
            onClick={onClick}
            className={`text-sm font-normal ${isBlue ? "text-blue-500 underline" : "text-white"} `}
        >
            {text}
        </button>
    );
};

const Footer: NextPage = () => {
    return (
        <footer className="w-full h-72 flex flex-col pr-10 pl-10 bg-blue-700">
            <div className="flex-grow h-3/4 flex items-center">
                <div className="flex-1 flex justify-start items-center">
                    <Image
                        priority
                        src="logos/H_bleu.svg"
                        height={109.36}
                        width={279}
                        alt="FromScript"
                    />
                </div>
                <div className="flex-1 flex justify-end items-center gap-8">
                    <SectionScrollButton text="À propos" className="text-white text-base font-semibold leading-normal" targetSection="about" />
                    <SectionScrollButton text="Services" className="text-white text-base font-semibold leading-normal" targetSection="services" />
                    <SectionScrollButton text="Contact" className="text-white text-base font-semibold leading-normal" targetSection="contact" />
                </div>
            </div>
            <div className="h-px border border-blue-500" />
            <div className="flex justify-center items-center gap-6 p-5">
                <div className="text-white text-sm font-normal">© 2024 FromScript. Tous droits réservés.</div>
                <LinkItem text="Politique de confidentialité" isBlue />
                <LinkItem text="Conditions d'utilisation" isBlue />
                <LinkItem text="Paramètres des cookies" isBlue />
            </div>
        </footer>
    );
};

export default Footer;
