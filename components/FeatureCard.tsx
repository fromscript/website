import {motion} from "framer-motion";
import useIsMobile from "../hook/useIsMobile";

type ImageProps = {
  src: string;
  alt?: string;
};
export type Feature = {
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
const FeatureCard = ({isActive, setIsActive, ...feature}: FeatureWithState) => {
  const isMobile = useIsMobile();
  const CardContent = isMobile ? motion.div : "div";
  return (
    <motion.div className="flex self-stretch h-full w-full bg-white overflow-hidden border border-black flex-col lg:flex-row"
                onClick={setIsActive}
                initial={false}
                animate={{
                  width: isMobile ? "100%" : isActive ? "100%" : "5rem",
                  height: isMobile ? (isActive ? "100%" : "5rem") : "100%",
                }}
                transition={{duration: 0.3, ease: "easeInOut"}}>
      <div className="flex flex-col h-full justify-center lg:justify-between items-center cursor-pointer py-8">
        <p className="hidden lg:block text-xl font-bold md:text-2xl">
          {feature.columnText}
        </p>
        <h2 className="hidden [writing-mode:vertical-rl] md:mx-auto lg:block md:rotate-180 md:text-2xl md:font-bold">
          {feature.verticalText}
        </h2>
        <p className="text-xl font-bold md:text-5xl lg:hidden">
          {feature.horizontalText}
        </p>
      </div>
      <CardContent className="w-full overflow-hidden"
                   initial={false}
                   animate={{
                     height: isActive ? "auto" : "0px",
                   }}
                   transition={{duration: 0.3, ease: "easeInOut"}}>
        <div className="flex flex-col px-6 pb-8 md:px-10 md:pb-12 pt-0 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
          <h3 className="hidden lg:block mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            {feature.heading}
          </h3>
          <p className="md:text-md">{feature.description}</p>
          <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
            <img src={feature.image.src}
                 alt={feature.image.alt}
                 className="size-full object-cover"/>
          </div>
        </div>
      </CardContent>
    </motion.div>
  )
    ;
};

export default FeatureCard;
