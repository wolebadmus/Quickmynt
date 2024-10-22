import NavBar from "./NavBar";
import MbNavBar from "./MbNavBar";
import logo from "../assets/LOGO.svg";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {

    const [showMbMenu, setShowMbMenu] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    // Function to handle scroll and change state based on scroll position
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
          setIsScrolled(true); // User has scrolled down
        } else {
          setIsScrolled(false); // User is at the top of the page
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
      };
    }, []);

    return(
        <>
        <header className={`fixed z-50 w-full transition-all duration-500 ${ isScrolled ? 'bg-white' : 'bg-transparent'}  flex justify-center`}>
            <div className="flex justify-between lg:justify-evenly items-center w-full px-[.9em] lg:max-w-[71.25em] h-[4.81em] px-[0.25em] lg:px-[0.19em] py-[0.06em] ">
                <img src={logo} alt="Quick Mynt" className="w-[6.2em] h-[2.51em] lg:w-[9.33em] lg:h-[3.78em] object-contain" />
                <NavBar showMbMenu={showMbMenu} isScrolled = {isScrolled} />
                <a href="/" className={`hidden ${ isScrolled ? 'bg-[#488559]' : 'bg-transparent border-2 border-[#fff]'} text-white hover:text-[#488559] hover:bg-[#FFF] hover:border lg:flex justify-center items-center hover:border-[#488559] text-center rounded-full w-[9.28em] h-[2.5em] text-[1.31em] leading-[25.36px] font-[600] font-graphik`}>
                    Sign up
                </a>
                {!showMbMenu && 
                    <button className="bg-transparent lg:hidden p-0 border-none outline-none focus:border-none focus:outline-none" 
                            onClick={() => setShowMbMenu(true)}>
                        <FaBars size={25} color="#434343" />
                    </button>
                }
            </div>
        </header>

        <MbNavBar setShowMbMenu = {setShowMbMenu} showMbMenu = {showMbMenu} />
        
        </>
    );
};

export default Header;