import { FaTimes } from "react-icons/fa";
import logo from "../assets/LOGO.svg";


const mbNavBar = ({showMbMenu, setShowMbMenu}) => {

    const links = [
        {textUrl: "About Us", url: "/"},
        {textUrl: "FAQs", url: "/"},
        {textUrl: "Contact Us", url: "/"},
    ]

    return (
        <nav className={`lg:hidden flex flex-col justify-start gap-8 shadow-2xl  py-3 fixed z-50 bg-white top-0 w-full transition-all duration-300 ${showMbMenu ? "h-full max-h-[35.766em]" : "max-h-0 !py-0"}   overflow-hidden`}>
            <div className="flex justify-between px-4">
                <img src={logo} alt="Quick Mynt" className="w-[9.438em] h-[3.813em] object-contain" />
                <button className="bg-transparent lg:hidden p-0 border-none outline-none focus:border-none focus:outline-none" 
                onClick={() => setShowMbMenu(false)}><FaTimes size={30} color="#434343"/></button>
            </div>
            <ul className="flex flex-col justify-start  gap-10 w-full h-full text-left px-4">
                {links.map((linkItem, idx) => <li key={idx}><a href={linkItem.url} className="text-[#6F6F6F] font-graphik font-[400] text-[1.188em] leading-[24px]">{linkItem.textUrl}</a></li>)}
            </ul>
           
        </nav>
    );

};

export default mbNavBar;