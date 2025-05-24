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
      <header className={`tiny:height-[6rem] tiny:!p-[0] !fixed lg:!p-[2rem] z-50 w-full transition-all duration-500 shadow-2xl bg-white lg:py-4 h-[4.81em] lg:h-[2.688em] flex justify-center tiny:!h-[10dvh] xl:!h-[15vh]`}>
        <div
          className="tiny:m-[0] lg:ml-[1rem] flex justify-between lg:justify-evenly items-center w-full px-[1em] lg:max-w-[100vw] h-full 
              lg:px-[0.19em] py-[0.06em] ">
          <NavLink to={"/"}>{location.pathname === "/" ? <img src={new_logo_white} alt="Quick Mynt" className="tiny:w-[30vw] h-[auto] lg:w-[20.33em] lg:h-[3.78em] object-contain xl:w-[30vw]" /> : <img src={logo} alt="Quick Mynt" className="w-[10.2em] h-[2.51em] md:w-[20.33em] lg:h-[3.78em] object-contain" />}</NavLink>
          <NavBar showMbMenu={showMbMenu} isScrolled={isScrolled} />
          {/* <NavLink to="/" className={`hidden ${ (isScrolled)  ? 'bg-[#488559]' : 'bg-transparent border-2 border-[#fff]'}
                 text-white hover:text-[#488559] hover:bg-[#FFF] hover:border lg:flex justify-center items-center hover:border-[#488559] text-center rounded-full w-[9.28em] h-[2.5em] text-[1.31em] leading-[25.36px] font-[600] font-graphik`}>
                    Sign up
                </NavLink> */}
          <div className="flex">
            <button
              onClick={() => {
                trackButtonClick();
                setIsOpen(true);
              }}
              className={`tiny:flex tiny:items-center tiny:w-auto tiny:text-[3vw] tiny:px-[24px] tiny:p-inherit xl:width-[17vw] tiny:py-[5px] tiny:mr-[5vw] lg:mr-[1vw] tiny:px-[10px]  md:!block ${isScrolled ? "bg-transparent border-[2px] border-[#488559]" : "bg-transparent !border-[2px] font-bold border-[#488559]"}
                 text-[#488559] hover:text-[#488559] hover:bg-[#FFF] hover:border lg:flex justify-center items-center hover:border-[#488559] text-center rounded-full w-[auto] h-[2.5em] xl:w-[20vw] text-[1.31em] leading-[25.36px] font-[600] font-graphik whitespace-nowrap px-[1rem] xl:h-[9vh] xl:text-[3vh]`}>
              Request Advance
            </button>
            <a href="https://docs.google.com/forms/d/1vp3llZpvKQNrB8ja5hym4-lG0GE7meZGEh6DwtCwZRU/" rel="nooperner noreferrer">
              <button
                className={`tiny:hidden  ${isScrolled ? "bg-[#488559] border-2 border-[#488559]" : "bg-[#488559] border-2 border-[#488559]"}
                 text-[#ffffff] hover:text-[#488559] hover:bg-[#FFF] hover:border whitespace-nowrap ml-[1rem] md:flex md:mr-[.5rem] justify-center items-center hover:border-[#488559] text-center rounded-full h-[2.5em] text-[1.31em] leading-[25.36px] font-[600] font-graphik text-[#FFF] lg:ml-[1rem] sm:!w-[6rem] lg:!w-[10rem] xl:!w-[12vw]  tiny:!w-[30vw] xl:h-[9vh] xl:text-[3vh]`}>
                Sign Up
              </button>
            </a>

            {!showMbMenu && (
              <button className="scale-[1.5] bg-transparent md:hidden p-0 border-none outline-none focus:border-none focus:outline-none" onClick={() => setShowMbMenu(true)}>
                {location.pathname === "/" ? <FaBars size={25} color={` ${isScrolled ? "#434343" : "#000000"} `} /> : <FaBars size={25} color={"#434343"} />}
              </button>
            )}
          </div>
        </div>
      </header>

      <MbNavBar setShowMbMenu={setShowMbMenu} showMbMenu={showMbMenu} />
    </>
  );
};

export default Header;
