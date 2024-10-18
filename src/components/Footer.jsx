import { FaFacebook, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import FooterNavBar from "./FooterNavBar";
import logo from "../assets/LOGO.svg";
import { FaXTwitter } from "react-icons/fa6";





const Footer = () => {



    return (
        <footer className="bg-[#FFFFFF] flex flex-col max-w-[331px] w-full lg:max-w-[1140px] h-[908px] lg:h-[448px]  gap-8 lg:gap-0 justify-center lg:justify-evenly">
            <div className="flex flex-col lg:flex-row justify-evenly items-start lg:items-center text-left gap-8 lg:gap-0">
                <div className="flex flex-col gap-6 lg:w-full lg:max-w-[199px]">
                    <img src={logo} alt="Quick Mynt" className="w-[191.84px] h-[78.08px] lg:w-[199px] lg:h-[80.99px] object-contain " />
                    <div className="flex justify-between items-center">
                        <FaLinkedinIn />
                        <FaFacebook />
                        <FaXTwitter />
                        <FaTiktok />
                    </div>
                </div>
                <FooterNavBar  />
                <p className="max-w-[286px] w-full lg:max-w-[486px] font-graphik font-[400]  text-[#434343] text-[14.46px] lg:text-[15px] leading-[28.92px] lg:leading-[30px] ">
                    <span className="block">Disclaimer:</span>All financial tools and services provided by QuickMynt are subject to terms and conditions. Instant access to earnings and additional wellness tools may vary based on employer policies. QuickMynt does not charge interest or hidden fees, but transaction fees may apply. Please consult with your employer for specific program details.
                </p>

            </div>
            <div className="w-full border-t border-[#434343]"></div>

            <p className="text-[#434343] font-graphik font-[400] text-[10.6px] lg:text-[11px] leading-[11.66px] lg:leading-[12.1px] text-left lg:text-right">© 2024 QuickMynt LLC, All Rights Reserved</p>

        </footer>
    );

};
export default Footer;