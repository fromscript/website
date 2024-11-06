type HamburgerMenuProps = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default HamburgerMenu;
