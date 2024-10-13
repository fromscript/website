import Marquee from 'react-fast-marquee';

const InfiniteMarquee: React.FC = () => {
    return (
        <div className="w-full bg-blue-700 self-stretch flex items-center">
            <Marquee className="h-24" gradient={false} speed={50} pauseOnHover={true} autoFill={true}>
                <div className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                    Conformité à la Loi
                </div>
                <div className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                    Sécurité des données
                </div>
                <div className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                    Protection des données
                </div>
                <div className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                    Conformité assurée
                </div>
                <div className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                    Loi 25
                </div>
                <div className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                    Respect des normes
                </div>
                <div className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                    Sécurité informatique
                </div>
            </Marquee>
        </div>
    );
};

export default InfiniteMarquee;
