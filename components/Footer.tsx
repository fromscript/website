// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import FooterLink from './FooterLink';
import SectionScrollButton from "./SectionScrollButton";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-blue-700 py-8 px-10">
            <div className="flex flex-row justify-between items-center gap-6 md:gap-0">
                <div className="flex justify-start items-center">
                    <Image
                        src="/logos/H_bleu.svg"
                        height={109.36}
                        width={279}
                        alt="FromScript Logo"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <SectionScrollButton text="À propos" className="text-white text-base font-semibold leading-normal" targetSection="about"/>
                    <SectionScrollButton text="Services" className="text-white text-base font-semibold leading-normal" targetSection="services" />
                    <SectionScrollButton text="Contact" className="text-white text-base font-semibold leading-normal" targetSection="contact" />
                </div>
            </div>
            <div className="mt-6 border-t border-blue-500"></div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
                <div className="text-white text-center md:text-left">
                    © 2024 FromScript. Tous droits réservés.
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <FooterLink text="Politique de confidentialité" className="text-blue-500 underline" href="/privacy-policy" />
                    <FooterLink text="Conditions d'utilisation" className="text-blue-500 underline" href="/terms" />
                    <FooterLink text="Paramètres des cookies" className="text-blue-500 underline" href="/cookie-settings" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
