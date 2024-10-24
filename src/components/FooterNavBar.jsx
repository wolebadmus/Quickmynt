import { useEffect } from "react";
import { NavLink } from "react-router-dom";



const FooterNavBar = () => {
    const links = [
        {textUrl: "About Us", url: "/aboutus"},
        {textUrl: "FAQs", url: "#faq"},
        {textUrl: "Contact Us", url: "/contactus"},
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
        <nav className="flex w-full flex-col justify-center lg:items-center">

            <ul className="flex  flex-col gap-8">
                {/* {links.map((linkItem, idx) => <li key={idx}><a href={linkItem.url} className="text-[#434343] font-graphik font-[500] text-[16px] lg:text-[21.33px] leading-[17.6px] lg:leading-[23.46px]">{linkItem.textUrl}</a></li>)} */}
            

                {  location.pathname === "/" ?
                    links.map((linkItem, idx) => <li key={idx}>
                        <NavLink to={linkItem.url}  onClick={(event) => handleScrollToSection(event, linkItem)} className="text-[#434343] font-graphik font-[500] text-[16px] lg:text-[21.33px] leading-[17.6px] lg:leading-[23.46px]">{linkItem.textUrl}
                    </NavLink> 
                    </li>)
                    :
                    links.map((linkItem, idx) => <li key={idx}>{linkItem.url.startsWith("#") ? <a href={"/" + linkItem.url} className="text-[#434343] font-graphik font-[500] text-[16px] lg:text-[21.33px] leading-[17.6px] lg:leading-[23.46px]">{linkItem.textUrl}</a>
                    :
                    <NavLink to={linkItem.url}  className="text-[#434343] font-graphik font-[500] text-[16px] lg:text-[21.33px] leading-[17.6px] lg:leading-[23.46px]">{linkItem.textUrl}</NavLink>}</li>)
                }
            
            
            </ul>
           
        </nav>
    );

};

export default FooterNavBar;