import NavBar from "./NavBar";
import MbNavBar from "./MbNavBar";
import logo from "../assets/LOGO.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {

    const [showMbMenu, setShowMbMenu] = useState(false);

    return(
        <>
        <header className={`flex justify-between lg:justify-evenly items-center w-full lg:max-w-[1140px]  h-[77px] px-4 lg:px-3 py-1 bg-[#FFF]`}>
            <img src={logo} alt="Quick Mynt" className="w-[99.28px] h-[40.23px] lg:w-[149.28px] lg:h-[60.48px] object-contain" />
            <NavBar showMbMenu = {showMbMenu} />
            <a href="/" className="hidden bg-[#488559] text-white hover:text-[#488559] 
            hover:bg-[#FFF] hover:border lg:flex justify-center items-center hover:border-[#488559] 
            text-center rounded-full w-[148.57px] h-[51.19px] text-[20.95px] leading-[25.36px] font-[600] font-graphik" >Sign up</a>
            {!showMbMenu 
            && 
                <button className="bg-transparent lg:hidden p-0 border-none outline-none focus:border-none focus:outline-none" 
                onClick={() => setShowMbMenu(true)}><FaBars size={25} color="#434343"/></button>
               
            
                
            }
        </header>
        <MbNavBar setShowMbMenu = {setShowMbMenu} showMbMenu = {showMbMenu} />
        
        </>
    );
};

export default Header;