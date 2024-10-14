import Image from 'next/image';
import React from 'react';
import SectionScrollButton from "../components/SectionScrollButton";

const HeroSection: React.FC = () => {
    return (
        <div id="fact" className="w-full bg-white flex justify-center items-center">
            <div className="flex self-stretch px-16 py-28 flex-row justify-between items-center gap-10">
                <div className="flex flex-col justify-center items-start gap-8">
                    {/* Text Block */}
                    <div className="flex flex-col justify-start items-start gap-6">
                        <h1 className="text-blue-700 text-5xl font-bold font-brockmann leading-tight">
                            Les cookies,<br/>ça vous parle?
                        </h1>
                        <h2 className="text-blue-500 text-xl font-bold font-brockmann leading-7">
                            On s’occupe de tout.
                        </h2>
                        <p className="text-blue-700 text-lg font-normal leading-7">
                            Depuis cette année, tous les commerces au Québec doivent se<br/>
                            soumettre à la loi 25 et à ses politiques de protection de données<br/>
                            personnelles. Vous ignorez par où commencer? Pas de panique,<br/>
                            nous sommes là pour vous simplifier la vie!
                            <br/>
                            <br/>
                            Bannières, politique de cookies, politique de confidentialité, collecte<br/>
                            et gestion des données... Laissez-nous nous en occuper!
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <SectionScrollButton text="Contact" className='px-6 py-3 bg-blue-700 rounded-full border-2 border-blue-700 text-red-100 text-xl font-bold font-brockmann leading-7' targetSection="contact"/>
                        <SectionScrollButton text="En savoir plus" className='px-6 py-3 rounded-full border-2 border-blue-700 text-blue-700 text-xl font-bold font-brockmann leading-7'  targetSection="about"/>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <Image
                        src='hero/cookies.webp'
                        alt="Image related to cookies and data protection"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
