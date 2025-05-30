import NavLinks from "./NavLinks";

type MobileMenuProps = {
    isMenuOpen: boolean;
    toggleMenu: () => void; // <-- New prop
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => { // <-- toggleMenu added to destructuring
    if (!isMenuOpen) return null;

    return (
        <div className="md:hidden flex flex-col items-center px-8 py-4 gap-4 bg-black">
            <NavLinks className="flex-col" toggleMenu={toggleMenu} /> {/* <-- Pass toggleMenu */}
        </div>
    );
};

export default MobileMenu;
