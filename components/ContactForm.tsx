import {NextPage} from "next";
import React from "react";

const ContactForm: NextPage = () => {
    return (
        <div className="w-full flex px-16 py-28 bg-white flex-col justify-start items-start gap-12">
            <div className="self-stretch pb-8 justify-center items-center gap-4 flex">
                <div className="self-stretch flex-col gap-6 flex">
                    <div
                        className="text-center text-blue-700 text-6xl font-bold font-brockmann leading-tight">Contactez-nous
                    </div>
                    <div
                        className="text-center text-blue-500 text-xl font-bold font-brockmann leading-7">Nous
                        sommes là pour répondre à vos questions.
                    </div>
                </div>
            </div>
            <div className="self-stretch flex justify-start items-start gap-20">
                <div className="w-[616px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch h-[83px] flex-col justify-start items-start gap-2 flex">
                        <div
                            className="self-stretch text-blue-700 text-lg font-bold font-['Montserrat'] leading-[27px]">Nom
                        </div>
                        <div className="self-stretch p-3 rounded-[20px] border-2 border-blue-700"/>
                    </div>
                    <div className="self-stretch h-[83px] flex-col justify-start items-start gap-2 flex">
                        <div
                            className="self-stretch text-blue-700 text-lg font-bold font-['Montserrat'] leading-[27px]">Email
                        </div>
                        <div className="self-stretch p-3 rounded-[20px] border-2 border-blue-700"/>
                    </div>
                    <div className="self-stretch h-[83px] flex-col justify-start items-start gap-2 flex">
                        <div
                            className="self-stretch text-blue-700 text-lg font-bold font-['Montserrat'] leading-[27px]">Type
                            de projet
                        </div>
                        <div className="self-stretch p-3 rounded-[20px] border-2 border-blue-700"/>
                    </div>
                    <div className="self-stretch h-[216px] flex-col justify-start items-start gap-2 flex">
                        <div
                            className="self-stretch text-blue-700 text-xl font-bold font-brockmann leading-7">Message
                        </div>
                        <div
                            className="self-stretch h-[180px] p-3 rounded-[20px] border-2 border-blue-700 justify-start items-start inline-flex">
                            <div
                                className="grow shrink basis-0 text-[#666666] text-base font-normal font-['Montserrat'] leading-normal">Écrivez
                                votre message...
                            </div>
                            <div
                                className="w-[2.83px] h-[0px] origin-top-left rotate-[135deg] border border-black"></div>
                            <div
                                className="w-[8.49px] h-[0px] origin-top-left rotate-[135deg] border border-black"></div>
                        </div>
                    </div>
                    <div className="pb-4 justify-start items-center gap-2 inline-flex">
                        <div className="w-[18px] h-[18px] relative bg-white border-2 border-blue-700"/>
                        <div
                            className="text-blue-700 text-sm font-normal font-['Montserrat'] leading-[21px]">J'accepte
                            de me faire contacter
                        </div>
                    </div>
                    <div className="pb-4 justify-start items-center gap-2 inline-flex">
                        <div className="w-[18px] h-[18px] relative bg-white border-2 border-blue-700"/>
                        <div
                            className="text-blue-700 text-sm font-normal font-['Montserrat'] leading-[21px]">J'accepte
                            la politique de condifentialité
                        </div>
                    </div>
                    <div
                        className="px-6 py-3 bg-blue-700 rounded-[30px] border-2 border-blue-700 justify-center items-center gap-2 inline-flex">
                        <div className="text-[#fef3f2] text-xl font-bold font-brockmann leading-7">Envoyer</div>
                    </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-8 h-8 relative"/>
                            <div className="self-stretch h-[92px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-blue-700 text-xl font-bold font-brockmann leading-7">Email
                                </div>
                                <div
                                    className="self-stretch text-blue-700 text-base font-normal font-['Montserrat'] leading-normal">Contactez-nous
                                    à tout moment.
                                </div>
                                <div
                                    className="self-stretch text-blue-500 text-base font-normal font-['Roboto'] underline leading-normal">email@example.com
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-8 h-8 relative"/>
                            <div className="self-stretch h-[92px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-blue-700 text-xl font-bold font-brockmann leading-7">Téléphone
                                </div>
                                <div
                                    className="self-stretch text-blue-700 text-base font-normal font-['Montserrat'] leading-normal">Appelez-nous
                                    pour plus d'infos.
                                </div>
                                <div
                                    className="self-stretch text-blue-500 text-base font-normal font-['Roboto'] underline leading-normal">+1
                                    (555) 000-0000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[148px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-8 h-8 relative"/>
                        <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="w-[447px] text-blue-700 text-xl font-bold font-brockmann leading-7">Situé
                                    à Québec, disponible partout
                                </div>
                                <div
                                    className="self-stretch text-blue-500 text-base font-normal font-['Montserrat'] leading-normal">Adresse,
                                    si on veut la mettre
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="justify-center items-center gap-2 inline-flex">
                                    <div
                                        className="text-blue-700 text-base font-normal font-['Montserrat'] leading-normal">Obtenir
                                        l'itinéraire
                                    </div>
                                    <div className="w-6 h-6 relative"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactForm;