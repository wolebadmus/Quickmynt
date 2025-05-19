import facebooklogo from "../assets/FacebookLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.png";
import TwitterXLogo from "../assets/TwitterLogo.png";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";

import logo from "../assets/newLogo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import cancelIcon from "../assets/MbCancelIcon.svg";
import ReactGA from "react-ga4";
import useModalStore from "../store/modalStore";

const mbNavBar = ({ showMbMenu, setShowMbMenu }) => {
  const links = [
    { textUrl: "About Us", url: "/about-us" },
    { textUrl: "FAQs", url: "#faq" },
    { textUrl: "Privacy Policy", url: "privacy-policy" },
    { textUrl: "Terms and Condition", url: "terms-condition" },
    { textUrl: "Contact Us", url: "/contact-us" },
  ];

  const location = useLocation();

  const { setIsOpen } = useModalStore();

  const trackButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });

    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Demo/Sign Up",
    });
  };

  const handleScrollToSection = (event, linkItem) => {
    // Prevent the default behavior of the NavLink
    event.preventDefault();

    // Check if the link contains a hash (internal link on the same page)
    if (linkItem.url.startsWith("#")) {
      const target = document.querySelector(linkItem.url);
      if (target) {
        // Smoothly scroll to the target section
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Allow regular navigation for non-hash links
      window.location.href = linkItem.url;
    }
  };
  const handleScrollToSection2 = (linkItem) => {
    // Prevent the default behavior of the NavLink
    // event.preventDefault();

    // Check if the link contains a hash (internal link on the same page)
    if (linkItem.startsWith("#")) {
      const target = document.querySelector(linkItem);
      if (target) {
        // Smoothly scroll to the target section
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Allow regular navigation for non-hash links
      window.location.href = linkItem.url;
    }
  };

  useEffect(() => {
    if (location.hash) {
      handleScrollToSection2(location.hash);
    }
  }, [location]);

  return (
    <nav className={`pr-[0.7rem] pl-[1.2rem] md:hidden flex flex-col justify-start gap-8 shadow-2xl  py-3 fixed z-50 bg-white top-0 w-full transition-all duration-300 ${showMbMenu ? "h-[auto]" : "max-h-0 !py-0"}   overflow-hidden`}>
      <div className="flex justify-between px-0">
        <NavLink to="/" onClick={() => setShowMbMenu(false)}>
          <img src={logo} alt="Quick Mynt" className="w-[9.438em] h-[3.813em] object-contain" />
        </NavLink>
        <button className="scale-[1.5] bg-transparent lg:hidden p-0 border-none outline-none focus:border-none focus:outline-none" onClick={() => setShowMbMenu(false)}>
          <img src={cancelIcon} alt="" />
        </button>
      </div>
      <ul className="flex flex-col justify-start  gap-10 w-full h-[auto] text-left px-4">
        {/* {links.map((linkItem, idx) => <li key={idx}><NavLink to={linkItem.url} onClick={() => setShowMbMenu(false)} className="text-[#00000] font-graphik font-[700] text-[1.188em] leading-[24px]">{linkItem.textUrl}</NavLink></li>)} */}
        {location.pathname === "/"
          ? links.map((linkItem, idx) => (
              <li key={idx}>
                {linkItem.url.startsWith("#") ? (
                  <NavLink
                    to={linkItem.url}
                    onClick={(event) => {
                      setShowMbMenu(false);
                      handleScrollToSection(event, linkItem);
                    }}
                    className="text-[#00000] font-graphik font-[700] text-[1.188em] leading-[24px]">
                    {linkItem.textUrl}
                  </NavLink>
                ) : (
                  <NavLink to={linkItem.url} onClick={() => setShowMbMenu(false)} className="text-[#00000] font-graphik font-[700] text-[1.188em] leading-[24px]">
                    {linkItem.textUrl}
                  </NavLink>
                )}
              </li>
            ))
          : links.map((linkItem, idx) => (
              <li key={idx}>
                {linkItem.url.startsWith("#") ? (
                  <a href={"/" + linkItem.url} className="text-[#00000] font-graphik font-[700] text-[1.188em] leading-[24px]">
                    {linkItem.textUrl}
                  </a>
                ) : (
                  <NavLink to={linkItem.url} onClick={() => setShowMbMenu(false)} className="text-[#00000] font-graphik font-[700] text-[1.188em] leading-[24px]">
                    {linkItem.textUrl}
                  </NavLink>
                )}
              </li>
            ))}
      </ul>
      <a className="text-center" href="https://docs.google.com/forms/d/1vp3llZpvKQNrB8ja5hym4-lG0GE7meZGEh6DwtCwZRU/" rel="noopener noreferrer">
        <button className={`m-[auto] w-[15rem] h-[4rem] rounded-full font-bold !bg-[#488559] border-2 border-[#488559] "bg-[#488559] border-2 border-[#488559] !text-[#ffffff] mt-[2rem]`}>Sign Up</button>
      </a>

      <button
        onClick={() => {
          trackButtonClick();
          setIsOpen(true);
        }}
        className="m-[auto] h-[4rem] rounded-[18rem] font-bold border-4 border-[#488559] w-[15rem]">
        Request Advance
      </button>
      <div className="flex gap-4 text-black m-[auto]">
        <img src={facebooklogo} alt="" />
        <img src={TwitterXLogo} alt="" />
        <img src={InstagramLogo} alt="" />
        <img src={YoutubeLogo} alt="" />
        <img src={LinkedinLogo} alt="" />
      </div>
    </nav>
  );
};

export default mbNavBar;
