import { NextPage } from "next";
import React from "react";
import FormField from './FormField';
import CheckboxField from "./CheckboxField";

const ContactForm: NextPage = () => {
    return (
        <section id="contact" className="w-full flex px-16 py-28 bg-white flex-col justify-center items-center gap-12">
            <div className="self-stretch pb-8 justify-center items-center gap-4 flex">
                <div className="self-stretch flex-col gap-6 flex">
                    <h1 className="text-center text-blue-700 text-6xl font-bold font-brockmann leading-tight">
                        Contactez-nous
                    </h1>
                    <p className="text-center text-blue-500 text-xl font-bold font-brockmann leading-7">
                        Nous sommes là pour répondre à vos questions.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-start gap-20">
                <div className="w-[616px] flex-col justify-start items-start gap-6 inline-flex">
                    <FormField label="Nom" type="text"/>
                    <FormField label="Email" type="email"/>
                    <FormField label="Type de projet" type="text"/>
                    <FormField label="Message" type="textarea"/>
                    <CheckboxField label="J'accepte de me faire contacter"/>
                    <CheckboxField label="J'accepte la politique de confidentialité"/>
                    <button
                        className="px-6 py-3 bg-blue-700 rounded-[30px] border-2 border-blue-700 text-red-100 text-xl font-bold font-brockmann leading-7">
                        Envoyer
                    </button>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-8 h-8 relative"/>
                            <div className="self-stretch h-[92px] flex-col justify-start items-start gap-2 flex">
                                <h2 className="self-stretch text-blue-700 text-xl font-bold font-brockmann leading-7">
                                    Email
                                </h2>
                                <p className="self-stretch text-blue-700 text-base font-normal  leading-normal">
                                    Contactez-nous à tout moment.
                                </p>
                                <a
                                    href="mailto:info@fromscript.ca"
                                    className="self-stretch text-blue-500 text-base font-normal font-['Roboto'] underline leading-normal"
                                >
                                    info@fromscript.ca
                                </a>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-8 h-8 relative"/>
                            <div className="self-stretch h-[92px] flex-col justify-start items-start gap-2 flex">
                                <h2 className="self-stretch text-blue-700 text-xl font-bold font-brockmann leading-7">
                                    Téléphone
                                </h2>
                                <p className="self-stretch text-blue-700 text-base font-normal  leading-normal">
                                    Appelez-nous pour plus d'infos.
                                </p>
                                <a
                                    href="tel:+15550000000"
                                    className="self-stretch text-blue-500 text-base font-normal font-['Roboto'] underline leading-normal"
                                >
                                    +1 (555) 000-0000
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[148px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-8 h-8 relative"/>
                        <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex">
                            <h2 className="w-[447px] text-blue-700 text-xl font-bold font-brockmann leading-7">
                                Situé à Québec, disponible partout
                            </h2>
                            <p className="self-stretch text-blue-500 text-base font-normal  leading-normal">
                                Adresse, si on veut la mettre
                            </p>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <a
                                    href="#"
                                    className="justify-center items-center gap-2 inline-flex text-blue-700 text-base font-normal  leading-normal"
                                >
                                    Obtenir l'itinéraire
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
        };

        export default ContactForm;