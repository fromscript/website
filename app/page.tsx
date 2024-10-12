import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Home() {
    return (
        <div className="w-screen flex-col">
            <Navbar/>
            <div className="w-screen h-screen flex-grow justify-center items-center inline-flex bg-fond3">
                <div className="w-2/4 flex-col justify-start items-center gap-8 inline-flex">
                    <div className="flex-col justify-center items-center gap-6 flex">
                        <div className="flex-grow justify-center text-red-100 text-6xl font-bold font-brockmann">
                            {`{FromScript}`}
                        </div>
                        <div className="self-stretch text-center"><span
                            className="text-red-100 text-xl font-bold font-brockmann">Nom masculin<br/></span><span
                            className="text-red-100 text-lg font-normal">Déf.: La version moderne du concept «from scratch» appliquée au web.</span>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <div
                            className="px-6 py-3 bg-white rounded-full border border-white justify-center items-center gap-2 flex">
                            <button className="text-blue-700 text-xl font-bold font-Brockmann leading-7">En savoir plus
                            </button>
                        </div>
                        <div
                            className="px-6 py-3 rounded-full border-2 border-white justify-center items-center gap-2 flex">
                            <button className="text-white text-xl font-bold font-Brockmann">Contact</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <div className="w-screen h-1/6 px-16 py-28 bg-white flex-col justify-start items-center inline-flex">
                <div className="w-screen relative">
                    <div className="py-3 px-3 text-right text-blue-700 text-8xl font-bold font-brockmann">
                        La technologie
                    </div>
                    <div className="py-3 px-3 text-left text-blue-700 text-8xl font-bold font-brockmann">
                        accessible à tous
                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <div
                className="w-screen h-[416px] px-16 py-28 bg-white flex-col justify-start items-start gap-20 inline-flex">
                <div className="self-stretch justify-center gap-20 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex">
                        <div
                            className="w-1/2 text-left text-blue-500 text-[40px] font-bold font-brockmann leading-tight">Découvrez
                            l'expertise de FromScript en développement logiciel et sécurité informatique.
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-center items-center gap-6 inline-flex">
                        <div className="w-1/2 justify-center items-center">
                            <span className="text-blue-700 text-lg font-normal leading-7">Avec plus de 8 ans d'expérience, FromScript se spécialise dans le développement de solutions logicielles sur mesure et la sécurité informatique. Nous nous engageons à rendre la technologie accessible tout en garantissant une sécurité optimale. <br/><br/></span>
                            <span className="text-blue-700 text-lg font-bold leading-7">Nos valeurs fondamentales sont l'accompagnement personnalisé, la qualité et la satisfaction client.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}


            <div className="h-[720px] bg-white rounded-[20px] flex flex-col p-6">
                <div className="flex grow">
                    {/* First Section: Mobile and Web Applications */}
                    <div
                        className="flex flex-col justify-between items-center bg-blue-500 text-white rounded-l-[20px] p-8">
                        <div className="text-2xl font-bold font-brockmann leading-[33.60px]">01</div>
                        <div className="-rotate-90 text-2xl font-bold font-brockmann leading-[33.60px]">Applications
                            mobiles et web
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex flex-col justify-start items-start gap-12 p-12 grow">
                        <div>
                            <h2 className="text-blue-700 text-[40px] font-bold font-brockmann leading-[48px]">
                                Développement d’applications mobiles et web
                            </h2>
                            <p className="text-blue-700 text-base font-normal font-montserrat leading-normal space-y-4">
                                Nous créons votre application... <strong className="font-bold">FromScript!</strong> Nous
                                prenons votre idée et votre concept, puis lui donnons vie avec la magie du code! Nous
                                développons pour IOS, Android et web. Tous les produits que nous créons partent de code
                                brut personnalisé.
                            </p>
                        </div>
                        <img className="w-[544px] h-[400px] rounded-[20px]" src="https://via.placeholder.com/544x400"
                             alt="Application Screenshot"/>
                    </div>

                    {/* Vertical Dividers */}
                    <div className="w-px bg-black self-stretch"/>

                    {/* Additional Sections */}
                    {[
                        {id: "02", title: "Consultation logicielle"},
                        {id: "03", title: "Solutions open source"},
                        {id: "04", title: "Création de sites web"}
                    ].map(section => (
                        <div key={section.id} className="flex flex-col justify-between items-center p-8">
                            <div className="text-blue-500 text-2xl font-bold font-brockmann">{section.id}</div>
                            <div
                                className="-rotate-90 text-blue-700 text-2xl font-bold font-brockmann">{section.title}</div>
                        </div>
                    ))}

                    {/* Vertical Dividers */}
                    <div className="w-px bg-black self-stretch"/>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <div
                className="w-[1440px] h-[785.10px] px-16 pt-[74px] pb-28 flex-col justify-start items-start gap-20 inline-flex">
                <div className="self-stretch justify-start items-start gap-20 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="self-stretch h-[145px] flex-col justify-start items-start gap-4 flex">
                            <div className="justify-start items-center inline-flex">
                                <div
                                    className="text-[#fef3f2] text-base font-semibold font-brockmann leading-normal">À
                                    propos
                                </div>
                            </div>
                            <div
                                className="w-[656px] h-[105px] text-blue-500 text-5xl font-bold font-brockmann leading-[57.60px]">Pourquoi
                                FromScript?
                            </div>
                        </div>
                        <div className="justify-start items-center gap-6 inline-flex">
                            <div
                                className="px-6 py-3 rounded-[30px] border-2 border-white justify-center items-center gap-2 flex">
                                <div className="text-[#fef3f2] text-xl font-bold font-brockmann leading-7">En savoir
                                    plus
                                </div>
                            </div>
                            <div className="justify-center items-center gap-2 flex">
                                <div
                                    className="text-[#fef3f2] text-lg font-bold font-['Montserrat'] leading-[27px]">Contact
                                </div>
                                <div className="w-6 h-6 relative"/>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch justify-start items-start gap-10 inline-flex">
                            <div className="flex-col justify-start items-center gap-4 inline-flex">
                                <div
                                    className="w-[100px] h-[0px] origin-top-left rotate-90 bg-blue-500 border-2 border-blue-500"></div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div
                                    className="self-stretch text-[#fef3f2] text-xl font-bold font-brockmann leading-7">Développement
                                    web custom
                                </div>
                                <div
                                    className="self-stretch text-[#fef3f2] text-base font-normal font-['Montserrat'] leading-normal">Nous
                                    construisons sur mesure nos solutions logicielles de A à Z pour les adapter à vos
                                    besoins.
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-10 inline-flex">
                            <div className="flex-col justify-start items-center gap-4 inline-flex">
                                <div
                                    className="w-[100px] h-[0px] origin-top-left rotate-90 bg-blue-500 border-2 border-blue-500"></div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div
                                    className="self-stretch text-[#fef3f2] text-xl font-bold font-brockmann leading-7">La
                                    sécurité avant tout!
                                </div>
                                <div className="self-stretch"><span
                                    className="text-[#fef3f2] text-base font-normal font-['Montserrat'] leading-normal">Nous développons des logiciels </span><span
                                    className="text-[#fef3f2] text-base font-bold font-['Montserrat'] leading-normal">FromScript</span><span
                                    className="text-[#fef3f2] text-base font-normal font-['Montserrat'] leading-normal"> qui protègent vos données confidentielles.</span>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-10 inline-flex">
                            <div className="flex-col justify-start items-center gap-4 inline-flex">
                                <div
                                    className="w-[100px] h-[0px] origin-top-left rotate-90 bg-blue-500 border-2 border-blue-500"></div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div
                                    className="self-stretch text-[#fef3f2] text-xl font-bold font-brockmann leading-7">Conformité
                                    à la loi 25
                                </div>
                                <div
                                    className="self-stretch text-[#fef3f2] text-base font-normal font-['Montserrat'] leading-normal">Nous
                                    mettons tout en place pour respecter la loi 25 et protéger les données de vos
                                    clients.
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-10 inline-flex">
                            <div className="flex-col justify-start items-center gap-4 inline-flex"/>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div
                                    className="self-stretch text-[#fef3f2] text-xl font-bold font-brockmann leading-7">Accompagnement
                                    humain
                                </div>
                                <div className="self-stretch"><span
                                    className="text-[#fef3f2] text-base font-normal font-['Montserrat'] leading-normal">Nous travaillons pour vous, mais surtout </span><span
                                    className="text-[#fef3f2] text-base font-bold font-['Montserrat'] leading-normal">avec</span><span
                                    className="text-[#fef3f2] text-base font-normal font-['Montserrat'] leading-normal"> vous. On vous accompagne dans la création du début à la fin.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <div className="w-[1440px] h-[99px] bg-blue-700 flex-col justify-start items-center inline-flex">
                <div className="w-[2450px] py-4 justify-start items-start inline-flex">
                    <div className="px-4 justify-start items-start flex">
                        <div className="text-blue-500 text-xl font-bold font-brockmann leading-7">Conformité à la
                            Loi
                        </div>
                    </div>
                    <div className="px-4 justify-start items-start flex">
                        <div className="text-blue-500 text-xl font-bold font-brockmann leading-7">Sécurité des
                            données
                        </div>
                    </div>
                    <div className="h-[67px] px-4 justify-center items-start flex">
                        <div
                            className="w-[778px] text-blue-500 text-6xlfont-bold font-brockmann leading-tight">Protection
                            des données
                        </div>
                    </div>
                    <div className="h-[67px] px-4 justify-center items-start flex">
                        <div
                            className="w-[200px] text-blue-500 text-6xlfont-bold font-brockmann leading-tight">Loi
                            25
                        </div>
                    </div>
                    <div className="px-4 justify-center items-start flex">
                        <div
                            className="w-[556px] text-blue-500 text-6xlfont-bold font-brockmann leading-tight">Respect
                            des normes
                        </div>
                    </div>
                    <div className="h-[67px] justify-center items-start flex">
                        <div
                            className="w-[598px] text-blue-500 text-6xlfont-bold font-brockmann leading-tight">Sécurité
                            informatique
                        </div>
                    </div>
                    <div className="justify-start items-start flex">
                        <div
                            className="text-blue-500 text-6xlfont-bold font-brockmann leading-tight">Conformité
                            assurée
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <div
                className="w-[1440px] h-[689px] px-16 py-28 bg-white flex-col justify-start items-start gap-20 inline-flex">
                <div className="self-stretch justify-start items-center gap-20 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="self-stretch h-[381px] flex-col justify-start items-start gap-6 flex">
                            <div
                                className="self-stretch text-blue-700 text-5xl font-bold font-brockmann leading-[57.60px]">Les
                                cookies, ça vous parle?
                            </div>
                            <div
                                className="self-stretch text-blue-500 text-xl font-bold font-brockmann leading-7">On
                                s’occupe de tout.
                            </div>
                            <div
                                className="self-stretch text-blue-700 text-lg font-normal font-['Montserrat'] leading-[27px]">Depuis
                                cette année, tous les commerces au Québec doivent se soumettre à la loi 25 et à ses
                                politiques de protection de données personnelles. Vous ignorez par ou commencer? Pas de
                                panique, nous sommes là pour vous simplifier la vie! <br/><br/>Bannières, politique de
                                cookies, politique de confidentialité, collecte et gestion des données... Laissez-nous
                                nous en occuper!
                            </div>
                        </div>
                        <div className="justify-start items-start gap-4 inline-flex">
                            <div
                                className="px-6 py-3 bg-blue-700 rounded-[30px] border-2 border-blue-700 justify-center items-center gap-2 flex">
                                <div className="text-[#fef3f2] text-xl font-bold font-brockmann leading-7">Contact
                                </div>
                            </div>
                            <div
                                className="px-6 py-3 rounded-[30px] border-2 border-blue-700 justify-center items-center gap-2 flex">
                                <div className="text-blue-700 text-xl font-bold font-brockmann leading-7">En savoir
                                    plus
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="grow shrink basis-0 h-[400px] rounded-[20px]"
                         src="https://via.placeholder.com/616x400"/>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <div className="w-[1459px] h-[534px] px-16 py-28 flex-col justify-start items-center gap-20 inline-flex">
                <div className="h-[310px] flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch h-[226px] flex-col justify-start items-center gap-6 flex">
                        <div
                            className="self-stretch text-center text-blue-700 text-5xl font-bold font-brockmann leading-[57.60px]">Un
                            projet? <br/>Un concept?<br/>L'idée du siècle?
                        </div>
                        <div
                            className="self-stretch text-center text-blue-500 text-xl font-bold font-brockmann leading-7">On
                            veut l’entendre!
                        </div>
                    </div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <div
                            className="px-6 py-3 bg-white rounded-[30px] border border-white justify-center items-center gap-2 flex">
                            <div className="text-blue-700 text-xl font-bold font-brockmann leading-7">Contact</div>
                        </div>
                        <div
                            className="px-6 py-3 bg-blue-700 rounded-[30px] border-2 border-blue-700 justify-center items-center gap-2 flex">
                            <div className="text-[#fef3f2] text-xl font-bold font-brockmann leading-7">Demander une
                                consultation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <div
                className="w-[1440px] h-[408px] px-16 py-20 bg-blue-700 flex-col justify-center items-center gap-20 inline-flex">
                <div className="self-stretch justify-start items-center gap-16 inline-flex">
                    <div className="w-80 text-[#fef3f2] text-5xl font-bold font-brockmann leading-[57.60px]">Ils
                        nous ont fait confiance
                    </div>
                    <div className="grow shrink basis-0 h-14 justify-end items-center gap-8 flex">
                        <div className="w-[140px] h-14 relative"/>
                        <div className="w-[140px] h-14 relative"/>
                        <div className="w-[140px] h-14 relative"/>
                        <div className="w-[140px] h-14 relative"/>
                        <div className="w-[140px] h-14 relative"/>
                    </div>
                </div>
                <div
                    className="px-6 py-3 bg-white rounded-[30px] border border-white justify-center items-center gap-2 inline-flex">
                    <div className="text-blue-700 text-xl font-bold font-brockmann leading-7">Voir tous nos projets
                        sur Github
                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <ContactForm/>

            <Footer/>
        </div>
    );
}
