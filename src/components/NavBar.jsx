import { NavLink, useLocation } from "react-router-dom";



const NavBar = ({isScrolled}) => {

    const links = [
        {textUrl: "About Us", url: "/about-us"},
        {textUrl: "FAQs", url: "/"},
        {textUrl: "Contact Us", url: "/"},
    ];


    const location = useLocation();

    return (
        <nav className="hidden lg:flex w-full ">

            <ul className="flex justify-center gap-8 w-full">
                {  location.pathname === "/" ?
                    links.map((linkItem, idx) => <li key={idx}><NavLink to={linkItem.url} className={`${(isScrolled) ? 'text-[#434343]' : 'text-white'} 
                    font-graphik font-[500] text-[1.333em]`}>{linkItem.textUrl}</NavLink></li>)
                    :
                    links.map((linkItem, idx) => <li key={idx}><a href={linkItem.url} className={`${ 'text-[#434343]'} 
                    font-graphik font-[500] text-[1.333em]`}>{linkItem.textUrl}</a></li>)
                }
            </ul>
           
        </nav>
    );

};

export default NavBar;