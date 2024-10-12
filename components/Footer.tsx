import {NextPage} from "next";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

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
                    <div className="text-white text-base font-semibold leading-normal">À
                        propos
                    </div>
                    <div
                        className="text-white text-base font-semibold leading-normal">Services
                    </div>
                    <div className="text-white text-base font-semibold leading-normal">Contact
                    </div>
                </div>
            </div>
            <div className="h-px border border-blue-500"/>
            <div className="flex justify-center items-center gap-6 p-5">
                <div className="text-white text-sm font-normal">© 2024
                    FromScript. Tous droits réservés.
                </div>
                <div
                    className="text-blue-500 text-sm font-normal underline">Politique
                    de confidentialité
                </div>
                <div
                    className="text-blue-500 text-sm font-normal underline">Conditions
                    d'utilisation
                </div>
                <div
                    className="text-blue-500 text-sm font-normal underline">Paramètres
                    des cookies
                </div>
            </div>
        </footer>

    )
}

export default Footer;