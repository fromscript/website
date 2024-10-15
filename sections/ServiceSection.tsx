"use client";

import {useState} from "react";
import FeatureCard, {Feature} from "../components/FeatureCard";


type Props = {
    tagline: string;
    heading: string;
    description: string;
    features: Feature[];
};

export type Layout351Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ServiceSection = (props: Layout351Props) => {
    const {tagline, heading, description, features} = {
        ...Layout351Defaults,
        ...props,
    } as Props;

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleSetIsActive = (index: number) => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === index && features.filter((_, i) => i === prevIndex).length === 1) {
                return prevIndex;
            }
            return prevIndex === index ? null : index;
        });
    };

    return (
        <section id="services" className="px-[5%] bg-blue-700 py-16 md:py-24 lg:py-28">
            <div className="flex flex-col justify-center">
                <div className="rb-12 mb-12 justify-center">
                    <h1 className="text-white text-center text-5xl font-bold mb-8">Nos solutions technologiques</h1>
                    <div className="text-center">
                        <span className="text-red-100 text-lg font-normal leading-7">Toutes nos solutions incluent un accompagnement sur mesure et </span>
                        <span className="text-blue-500 text-lg font-normal leading-7">une période de <br/> formation sur l’utilisation de la solution à la fin de la programmation.</span>
                    </div>
                </div>
                <div
                    className="flex bg-white w-full flex-row overflow-hidden rounded-3xl h-auto">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            isActive={activeIndex === index}
                            setIsActive={() => handleSetIsActive(index)}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


export const Layout351Defaults: Layout351Props = {
    features: [
        {
            columnText: "01",
            verticalText: "Développement d'application",
            horizontalText: "Développement Web & Mobile",
            heading: "Développement d'application web et mobile",
            description:
                "Nous concevons des applications sur mesure, adaptées à vos besoins, qu'elles soient destinées au web ou aux appareils mobiles. Nos solutions sont modernes, performantes, et sécurisées.",
            image: {
                src: "/services/developement.webp", // Adjust the path based on your project structure
                alt: "Développement d'application web et mobile",
            },
        },
        {
            columnText: "02",
            verticalText: "Consultation logiciel",
            horizontalText: "Consultation",
            heading: "Consultation logiciel",
            description:
                "Nos experts vous accompagnent dans toutes les étapes de la création de logiciels. De la conception à la mise en œuvre, nous fournissons des conseils stratégiques et techniques pour garantir le succès de votre projet.",
            image: {
                src: "/services/consulation.webp", // Adjust the path based on your project structure
                alt: "Consultation logiciel",
            },
        },
        {
            columnText: "03",
            verticalText: "Solution Open Source",
            horizontalText: "Open Source",
            heading: "Solution Open Source",
            description:
                "Nous intégrons et développons des solutions open source qui réduisent les coûts et augmentent la flexibilité de votre infrastructure technologique. Nous assurons une personnalisation complète pour répondre à vos besoins spécifiques.",
            image: {
                src: "/services/opensource.webp", // Adjust the path based on your project structure
                alt: "Solution Open Source",
            },
        },
        {
            columnText: "04",
            verticalText: "Analyse de sécurité",
            horizontalText: "Sécurité",
            heading: "Analyse de sécurité",
            description:
                "Nous offrons des services d’analyse approfondie pour garantir la sécurité de vos systèmes informatiques. De la gestion des vulnérabilités à la protection des données, nous assurons la sécurité de vos infrastructures numériques.",
            image: {
                src: "/services/security.webp", // Adjust the path based on your project structure
                alt: "Analyse de sécurité",
            },
        },
    ],
};



export default ServiceSection;