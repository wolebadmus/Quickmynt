import NavBar from "./NavBar";
import MbNavBar from "./MbNavBar";
import logo from "../assets/newLogo.png";
// import logo_white from "../assets/LOGO-WHITE.svg";
import new_logo_white from "../assets/newLogo.png";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useModalStore from "../store/modalStore";
import ReactGA from "react-ga4";

const Header = () => {
  const [showMbMenu, setShowMbMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

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

    if (location.pathname !== "/") {
      setIsScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

  const { setIsOpen } = useModalStore();

  const trackButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });

    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Demo/Sign Up",
    });
  };

  return (
    <>
      <header className={`tiny:height-[6rem] tiny:!p-[0] !fixed lg:h-[5rem] lg:!p-0 z-50 w-full transition-all duration-500 ${isScrolled && location.pathname === "/" ? "bg-white shadow-2xl fixed" : isScrolled && location.pathname !== "/" ? "bg-white" : "bg-white shadow-2xl relative"} lg:py-4 h-[4.81em] lg:h-[2.688em] flex justify-center  `}>
        <div
          className="tiny:m-[0] lg:ml-[1rem] flex justify-between lg:justify-evenly items-center w-full px-[1em] lg:max-w-[90em] h-full 
             px-[0.25em] lg:px-[0.19em] py-[0.06em] ">
          <NavLink to={"/"}>{location.pathname === "/" ? <img src={new_logo_white} alt="Quick Mynt" className="tiny:w-[8.2em] h-[2.51em] lg:w-[20.33em] lg:h-[3.78em] object-contain" /> : <img src={logo} alt="Quick Mynt" className="w-[6.2em] h-[2.51em] md:w-[20.33em] lg:h-[3.78em] object-contain" />}</NavLink>
          <NavBar showMbMenu={showMbMenu} isScrolled={isScrolled} />
          {/* <NavLink to="/" className={`hidden ${ (isScrolled)  ? 'bg-[#488559]' : 'bg-transparent border-2 border-[#fff]'}
                 text-white hover:text-[#488559] hover:bg-[#FFF] hover:border lg:flex justify-center items-center hover:border-[#488559] text-center rounded-full w-[9.28em] h-[2.5em] text-[1.31em] leading-[25.36px] font-[600] font-graphik`}>
                    Sign up
                </NavLink> */}
          <button
            onClick={() => {
              trackButtonClick();
              setIsOpen(true);
            }}
            className={`tiny:py-[5px] tiny:px-[10px] tiny:w-[auto] tiny:text-[1.09rem] ${isScrolled ? "bg-transparent border-[2px] border-[#488559]" : "bg-transparent !border-[2px] font-bold border-[#488559]"}
                 text-[#488559] hover:text-[#488559] hover:bg-[#FFF] hover:border lg:flex justify-center items-center hover:border-[#488559] text-center rounded-full w-[auto] h-[2.5em] text-[1.31em] leading-[25.36px] font-[600] font-graphik whitespace-nowrap px-[1rem]`}>
            Request Advance
          </button>
          <button
            className={` hidden ${isScrolled ? "bg-[#488559] border-2 border-[#488559]" : "bg-[#488559] border-2 border-[#488559]"}
                 text-[#ffffff] hover:text-[#488559] hover:bg-[#FFF] hover:border whitespace-nowrap ml-[1rem] md:flex md:mr-[.5rem] justify-center items-center hover:border-[#488559] text-center rounded-full h-[2.5em] text-[1.31em] leading-[25.36px] font-[600] font-graphik text-[#FFF] lg:ml-[1rem] lg:w-[10rem]`}>
            Sign Up
          </button>

          {!showMbMenu && (
            <button className="scale-[1.5] bg-transparent md:hidden p-0 border-none outline-none focus:border-none focus:outline-none" onClick={() => setShowMbMenu(true)}>
              {location.pathname === "/" ? <FaBars size={25} color={` ${isScrolled ? "#434343" : "#000000"} `} /> : <FaBars size={25} color={"#434343"} />}
            </button>
          )}
        </div>
      </header>

      <MbNavBar setShowMbMenu={setShowMbMenu} showMbMenu={showMbMenu} />
    </>
  );
};

export default Header;
