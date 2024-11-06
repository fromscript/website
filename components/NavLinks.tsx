import SectionScrollButton from "./SectionScrollButton";

type NavLinksProps = {
    className?: string;
    linkClass?: string;
};

const NavLinks: React.FC<NavLinksProps> = ({ className = "", linkClass = "" }) => (
    <div className={`flex justify-center items-center gap-8 ${className}`}>
        <SectionScrollButton
            text="Accueil"
            className={`text-white text-base font-semibold leading-normal ${linkClass}`}
            targetSection="landing"
        />
        <SectionScrollButton
            text="Services"
            className={`text-white text-base font-semibold leading-normal ${linkClass}`}
            targetSection="services"
        />
        <SectionScrollButton
            text="À propos"
            className={`text-white text-base font-semibold leading-normal ${linkClass}`}
            targetSection="about"
        />
        <SectionScrollButton
            text="Contact"
            className={`px-5 py-2 border-2 border-blue-500 text-white text-base font-extrabold leading-normal ${linkClass}`}
            targetSection="contact"
        />
    </div>
);

export default NavLinks;
