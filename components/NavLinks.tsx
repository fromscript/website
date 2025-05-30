import SectionScrollButton from "./SectionScrollButton";

type NavLinksProps = {
    className?: string;
    linkClass?: string;
    toggleMenu?: () => void; // <-- New optional prop
};

const NavLinks: React.FC<NavLinksProps> = ({ className = "", linkClass = "", toggleMenu }) => ( // <-- toggleMenu added to destructuring
    <div className={`flex justify-center items-center gap-8 ${className}`}>
        <SectionScrollButton
            text="Accueil"
            className={`text-white text-base font-semibold leading-normal ${linkClass}`}
            targetSection="landing"
            toggleMenu={toggleMenu} // <-- Pass toggleMenu
        />
        <SectionScrollButton
            text="Services"
            className={`text-white text-base font-semibold leading-normal ${linkClass}`}
            targetSection="services"
            toggleMenu={toggleMenu} // <-- Pass toggleMenu
        />
        <SectionScrollButton
            text="À propos"
            className={`text-white text-base font-semibold leading-normal ${linkClass}`}
            targetSection="about"
            toggleMenu={toggleMenu} // <-- Pass toggleMenu
        />
        <SectionScrollButton
            text="Contact"
            className={`px-5 py-2 border-2 border-blue-500 text-white text-base font-extrabold leading-normal ${linkClass}`}
            targetSection="contact"
            toggleMenu={toggleMenu} // <-- Pass toggleMenu
        />
    </div>
);

export default NavLinks;
