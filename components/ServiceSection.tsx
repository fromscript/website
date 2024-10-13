// "use client";
//
// import React, { useState } from 'react';
// import Image from 'next/image';
//
// // Data for the sections
// const sections = [
//     {
//         id: 1,
//         title: 'Applications mobiles et web',
//         description:
//             'Nous créons votre application... FromScript! Nous prenons votre idée et votre concept, puis lui donnons vie avec la magie du code! Nous développons pour IOS, Android et web. Tous les produits que nous créons partent de code brut personnalisé.',
//         imgSrc: 'https://via.placeholder.com/616x400',
//     },
//     {
//         id: 2,
//         title: 'Consultation logicielle',
//         description:
//             'Conseils experts pour toutes vos questions logicielles. Nous vous accompagnons dans la sélection, le développement, et l’optimisation de vos solutions logicielles.',
//         imgSrc: 'https://via.placeholder.com/616x400',
//     },
//     {
//         id: 3,
//         title: 'Solutions open source',
//         description:
//             'Nous proposons des solutions open source flexibles, économiques et personnalisables pour répondre aux besoins uniques de votre entreprise.',
//         imgSrc: 'https://via.placeholder.com/616x400',
//     },
// ];
//
// // The main component
// const ServiceSection: React.FC = () => {
//     const [activeSection, setActiveSection] = useState<number | null>(1); // Active section starts at 1
//
//     const handleSectionClick = (id: number) => {
//         setActiveSection((prevId) => (prevId === id ? null : id)); // Toggle the section
//     };
//
//     return (
//         <div className="w-full h-auto bg-blue-700 py-12 flex flex-col items-center relative">
//             <h2 className="text-white text-3xl font-bold mb-8">Nos solutions technologiques</h2>
//             <p className="text-white mb-12 text-lg text-center">
//                 Toutes nos solutions incluent un accompagnement sur mesure et une période de formation sur l’utilisation de la solution à la fin de la programmation.
//             </p>
//
//             <div className="w-full p-3 flex justify-center items-start relative">
//                 {/*/!* Left Sticky Label *!/*/}
//                 {/*<div*/}
//                 {/*    className="sticky left-0 top-0 h-auto bg-blue-700 text-white py-8 px-4 text-left flex flex-col items-center">*/}
//                 {/*    <div className="rotate-180 text-2xl font-bold">Applications mobiles et web</div>*/}
//                 {/*</div>*/}
//
//                 {/* Sections */}
//                 <div className="self-stretch bg-white rounded-lg h-[720px] justify-between items-center inline-flex">
//                     {sections.map((section) => (
//                         <div className="w-16 self-stretch border border-black flex-col justify-between items-center flex">
//                             <div className="pt-5 text-center text-blue-500 text-2xl font-bold font-brockmann">
//                                 0{section.id}
//                             </div>
//                             <div
//                                 className="mb-36 justify-self-start p-4 inline -rotate-90 text-blue-500 text-2xl font-bold font-brockmann whitespace-nowrap">
//                                 {section.title}
//                             </div>
//                         </div>
//                         // <div
//                         //     key={section.id}
//                         //     className={`min-w-[200px] transition-all duration-500 ease-in-out ${
//                         //         activeSection === section.id ? 'w-full' : 'w-[60px]'
//                         //     } bg-white border-l border-gray-200 cursor-pointer`}
//                         //     onClick={() => handleSectionClick(section.id)}
//                         // >
//                         //     <div className="flex flex-col h-full py-8 px-4 text-left">
//                         //         {/* Display number and title */}
//                         //         <div className="text-blue-700 text-lg font-bold mb-4">{`0${section.id}`}</div>
//                         //         <div className="font-brockmann text-lg leading-tight">
//                         //             {activeSection === section.id ? (
//                         //                 <div className="text-3xl font-bold">{section.title}</div>
//                         //             ) : (
//                         //                 <div className="-rotate-90 text-blue-700">0{section.id}</div>
//                         //             )}
//                         //         </div>
//                         //
//                         //         {/* If the section is active, display the description and image */}
//                         //         {activeSection === section.id && (
//                         //             <div className="mt-6 transition-all duration-500 ease-in">
//                         //                 <p className="text-gray-600 mb-6">{section.description}</p>
//                         //                 <Image
//                         //                     src={section.imgSrc}
//                         //                     alt={section.title}
//                         //                     width={616}
//                         //                     height={400}
//                         //                     className="rounded-lg"
//                         //                 />
//                         //             </div>
//                         //         )}
//                         //     </div>
//                         // </div>
//                     ))}
//                 </div>
//                 </div>
//             </div>
//             );
//             };
//
//             export default ServiceSection;



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@relume_io/relume-ui";

type ImageProps = {
    src: string;
    alt?: string;
};

type Feature = {
    columnText: string;
    verticalText: string;
    horizontalText: string;
    heading: string;
    description: string;
    image: ImageProps;
};

type FeatureWithState = Feature & {
    isActive: boolean;
    setIsActive: () => void;
};

type Props = {
    tagline: string;
    heading: string;
    description: string;
    features: Feature[];
};

export type Layout351Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ServiceSection = (props: Layout351Props) => {
    const { tagline, heading, description, features } = {
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
        <section id="relume" className="px-[5%] bg-blue-700 py-16 md:py-24 lg:py-28">
            <div className="flex flex-col justify-center">
                <div className="rb-12 mb-12 justify-center">
                    <h1 className="text-white text-center text-5xl font-bold mb-8">Nos solutions technologiques</h1>
                    <div className="text-center">
                        <span className="text-red-100 text-lg font-normal leading-7">Toutes nos solutions incluent un accompagnement sur mesure et </span>
                        <span className="text-blue-500 text-lg font-normal leading-7">une période de <br/> formation sur l’utilisation de la solution à la fin de la programmation.</span>
                    </div>
                </div>
                <div
                    className="flex bg-white w-full flex-col overflow-hidden border rounded-3xl h-auto lg:flex-row">
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

const FeatureCard = ({ isActive, setIsActive, ...feature }: FeatureWithState) => {
    const isMobile = useMediaQuery("(max-width: 991px)");
    const CardContent = isMobile ? motion.div : "div";
    return (
        <motion.div
            className="flex flex-col justify-start overflow-hidden h-auto lg:min-w-20 lg:flex-row"
            onClick={setIsActive}
            initial={false}
            animate={{
                width: isMobile ? "100%" : isActive ? "100%" : "5rem",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
                <p className="absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
                    {feature.columnText}
                </p>
                <h2 className="hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold">
                    {feature.verticalText}
                </h2>
                <p className="text-xl font-bold md:text-2xl lg:hidden">{feature.horizontalText}</p>
            </div>
            <CardContent
                className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
                initial={false}
                animate={{
                    height: isActive ? "auto" : "0px",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
                    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                        {feature.heading}
                    </h3>
                    <p className="md:text-md">{feature.description}</p>
                    <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                        <img
                            src={feature.image.src}
                            alt={feature.image.alt}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
            </CardContent>
        </motion.div>
    );
};

export const Layout351Defaults: Layout351Props = {
    tagline: "Tagline",
    heading: "Medium length section heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    features: [
        {
            columnText: "01",
            verticalText: "Feature one",
            horizontalText: "Feature one",
            heading: "Short heading goes here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                alt: "Relume placeholder image 1",
            },
        },
        {
            columnText: "02",
            verticalText: "Feature two",
            horizontalText: "Feature two",
            heading: "Short heading goes here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                alt: "Relume placeholder image 2",
            },
        },
        {
            columnText: "03",
            verticalText: "Feature three",
            horizontalText: "Feature three",
            heading: "Short heading goes here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                alt: "Relume placeholder image 3",
            },
        },
        {
            columnText: "04",
            verticalText: "Feature four",
            horizontalText: "Feature four",
            heading: "Short heading goes here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                alt: "Relume placeholder image 4",
            },
        },
    ],
};

export default ServiceSection;