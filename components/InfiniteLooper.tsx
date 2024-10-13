import Marquee from 'react-fast-marquee';

const InfiniteMarquee: React.FC = () => {
    const items = [
        "Conformité à la Loi",
        "Sécurité des données",
        "Protection des données",
        "Conformité assurée",
        "Loi 25",
        "Respect des normes",
        "Sécurité informatique"
    ];

    return (
        <div className="w-full bg-blue-700 self-stretch flex items-center">
            <Marquee className="h-24" gradient={false} speed={50} pauseOnHover={true} autoFill={true}>
                {items.map((item, index) => (
                    <div key={index} className="px-8 text-blue-500 text-6xl font-bold font-brockmann leading-7">
                        {item}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default InfiniteMarquee;
