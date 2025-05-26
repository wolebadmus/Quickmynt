import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ isScrolled }) => {
  const links = [
    { textUrl: "About Us", url: "/about-us" },
    { textUrl: "FAQs", url: "#faq" },
    { textUrl: "Contact Us", url: "/contact-us" },
  ];

  const location = useLocation();

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
    <nav className="hidden md:flex w-full ">
      <ul className="flex justify-center gap-8 w-full">
        {location.pathname === "/"
          ? links.map((linkItem, idx) => (
              <li key={idx}>
                {linkItem.url ? (
                  <NavLink
                    to={linkItem.url}
                    onClick={(event) => handleScrollToSection(event, linkItem)}
                    className={`${isScrolled ? "text-[#434343]" : "text-[#434343]"} 
                    font-graphik font-[500] text-[4vh]`}>
                    {linkItem.textUrl}
                  </NavLink>
                ) : (
                  <NavLink
                    to={linkItem.url}
                    className={`${isScrolled ? "text-[#434343]" : "text-white"} 
                    font-graphik font-[500] text-[1.333em]`}>
                    {linkItem.textUrl}
                  </NavLink>
                )}
              </li>
            ))
          : links.map((linkItem, idx) => (
              <li key={idx}>
                {linkItem.url.startsWith("#") ? (
                  <a
                    href={"/" + linkItem.url}
                    className={`${"text-[#434343]"} 
                    font-graphik font-[500] text-[1.333em]`}>
                    {linkItem.textUrl}
                  </a>
                ) : (
                  <NavLink
                    to={linkItem.url}
                    className={`${"text-[#434343]"} 
                    font-graphik font-[500] text-[1.333em]`}>
                    {linkItem.textUrl}
                  </NavLink>
                )}
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default NavBar;
