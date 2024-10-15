import Image from 'next/image';

type LogoProps = {
    src: string;
    alt: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
    <div className="px-4 md:px-8">
        <Image src={src} alt={alt} width={140} height={56} />
    </div>
);

export default Logo;
