import {useMediaQuery} from "@relume_io/relume-ui";
import {motion} from "framer-motion";

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
  const isMobile = useMediaQuery("(max-width: 991px)");
  const CardContent = isMobile ? motion.div : "div";
  return (
    <motion.div
      className="flex justify-start overflow-hidden border border-black min-w-20 flex-row"
      onClick={setIsActive}
      initial={false}
      animate={{
        width: isMobile ? "100%" : isActive ? "100%" : "5rem",
      }}
      transition={{duration: 0.3, ease: "easeInOut"}}
    >
      <div
        className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
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
        transition={{duration: 0.3, ease: "easeInOut"}}
      >
        <div
          className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
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

export default FeatureCard;
