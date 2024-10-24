import { FaTimes } from "react-icons/fa";
import logo from "../assets/LOGO.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


const mbNavBar = ({showMbMenu, setShowMbMenu}) => {

    const links = [
        {textUrl: "About Us", url: "/about-us"},
        {textUrl: "FAQs", url: "#faq"},
        {textUrl: "Contact Us", url: "/contact-us"},
    ];


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
        <nav className={`lg:hidden flex flex-col justify-start gap-8 shadow-2xl  py-3 fixed z-50 bg-white top-0 w-full transition-all duration-300 ${showMbMenu ? "h-full max-h-[35.766em]" : "max-h-0 !py-0"}   overflow-hidden`}>
            <div className="flex justify-between px-4">
            <NavLink to="/" onClick={() => setShowMbMenu(false)}><img src={logo} alt="Quick Mynt" className="w-[9.438em] h-[3.813em] object-contain" /></NavLink>
                <button className="bg-transparent lg:hidden p-0 border-none outline-none focus:border-none focus:outline-none" 
                onClick={() => setShowMbMenu(false)}><FaTimes size={30} color="#434343"/></button>
            </div>
            <ul className="flex flex-col justify-start  gap-10 w-full h-full text-left px-4">
                {/* {links.map((linkItem, idx) => <li key={idx}><NavLink to={linkItem.url} onClick={() => setShowMbMenu(false)} className="text-[#6F6F6F] font-graphik font-[400] text-[1.188em] leading-[24px]">{linkItem.textUrl}</NavLink></li>)} */}
                {  location.pathname === "/" ?
                    links.map((linkItem, idx) => <li key={idx}>
                        <NavLink to={linkItem.url}  onClick={(event) => {setShowMbMenu(false); handleScrollToSection(event, linkItem);}} className="text-[#6F6F6F] font-graphik font-[400] text-[1.188em] leading-[24px]">{linkItem.textUrl}
                    </NavLink> 
                    </li>)
                    :
                    links.map((linkItem, idx) => <li key={idx}>{linkItem.url.startsWith("#") ? <a href={"/" + linkItem.url} className="text-[#6F6F6F] font-graphik font-[400] text-[1.188em] leading-[24px]">{linkItem.textUrl}</a>
                    :
                    <NavLink to={linkItem.url} onClick={() => setShowMbMenu(false)}  className="text-[#6F6F6F] font-graphik font-[400] text-[1.188em] leading-[24px]">{linkItem.textUrl}</NavLink>}</li>)
                }
            </ul>
           
        </nav>
    );

};

export default mbNavBar;