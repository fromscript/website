import Marquee from 'react-fast-marquee';
import Logo from './Logo';

const logos = [
    { src: "/logos/Secondaire_bleu.svg", alt: "Client 1" },
    { src: "/logos/Secondaire_bleu.svg", alt: "Client 2" },
    { src: "/logos/Secondaire_bleu.svg", alt: "Client 3" },
    { src: "/logos/Secondaire_bleu.svg", alt: "Client 4" },
    { src: "/logos/Secondaire_bleu.svg", alt: "Client 5" },
];

const LogoCarousel: React.FC = () => {
    return (
        <div className="self-stretch flex justify-center items-center overflow-hidden">
            <Marquee gradient={false} speed={40} pauseOnHover={true} autoFill={true} className="h-24">
                {logos.concat(logos).map((logo, index) => (
                    <Logo key={index} src={logo.src} alt={logo.alt} />
                ))}
            </Marquee>
        </div>
    );
};

export default LogoCarousel;
