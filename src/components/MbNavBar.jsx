import { FaTimes } from "react-icons/fa";
import logo from "../assets/LOGO.png";


const mbNavBar = ({showMbMenu, setShowMbMenu}) => {

    const links = [
        {textUrl: "About Us", url: "/"},
        {textUrl: "FAQs", url: "/"},
        {textUrl: "Contact Us", url: "/"},
    ]

    return (
        <nav className={`lg:hidden flex flex-col justify-start gap-8  px-4 py-3 absolute z-50 bg-white top-0 w-full transition-all duration-300 ${showMbMenu ? "h-full max-h-[572.26px]" : "max-h-0 !py-0"}   overflow-hidden`}>
            <div className="flex justify-between">
                <img src={logo} alt="Quick Mynt" className="w-[151px] h-[61px]" />
                <button className="bg-transparent lg:hidden p-0 border-none outline-none focus:border-none focus:outline-none" 
                onClick={() => setShowMbMenu(false)}><FaTimes size={30} color="#434343"/></button>
            </div>
            <ul className="flex flex-col justify-start  gap-10 w-full h-full text-left">
                {links.map((linkItem, idx) => <li key={idx}><a href={linkItem.url} className="text-[#6F6F6F] font-graphik font-[400] text-[19px] leading-[24px]">{linkItem.textUrl}</a></li>)}
            </ul>
           
        </nav>
    );

};

export default mbNavBar;