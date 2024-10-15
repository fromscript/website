import NavLinks from "./NavLinks";

type MobileMenuProps = {
    isMenuOpen: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen }) => {
    if (!isMenuOpen) return null;

    return (
        <div className="md:hidden flex flex-col items-center gap-4 bg-black"> //px-8 py-4
            <NavLinks className="flex-col" />
        </div>
    );
};

export default MobileMenu;
