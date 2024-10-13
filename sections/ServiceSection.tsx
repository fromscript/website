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

// const FeatureCard = ({ isActive, setIsActive, ...feature }: FeatureWithState) => {
//     const isMobile = useMediaQuery("(max-width: 991px)");
//     const CardContent = isMobile ? motion.div : "div";
//     return (
//         <motion.div
//             className="flex justify-start overflow-hidden border border-black min-w-20 flex-row"
//             onClick={setIsActive}
//             initial={false}
//             animate={{
//                 width: isMobile ? "100%" : isActive ? "100%" : "5rem",
//             }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//             <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
//                 <p className="absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
//                     {feature.columnText}
//                 </p>
//                 <h2 className="hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold">
//                     {feature.verticalText}
//                 </h2>
//                 <p className="text-xl font-bold md:text-2xl lg:hidden">{feature.horizontalText}</p>
//             </div>
//             <CardContent
//                 className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
//                 initial={false}
//                 animate={{
//                     height: isActive ? "auto" : "0px",
//                 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//                 <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
//                     <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
//                         {feature.heading}
//                     </h3>
//                     <p className="md:text-md">{feature.description}</p>
//                     <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
//                         <img
//                             src={feature.image.src}
//                             alt={feature.image.alt}
//                             className="size-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </CardContent>
//         </motion.div>
//     );
// };

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