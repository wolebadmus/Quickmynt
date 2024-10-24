import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import { FaTimes } from "react-icons/fa";
import form_img from "../assets/form_img.svg";
import { MdOutlineStarPurple500 } from "react-icons/md";
import useModalStore from "../store/modalStore";




const DemoForm = () => {

    const {isOpen, setIsOpen} = useModalStore();


    return (
        <div className={`z-[100] lg:z-[40] lg:w-full lg:max-w-[85em] absolute lg:fixed bg-white top-0 lg:top-40 shadow-2xl left-0 right-0 flex-col  items-center pb-6 lg:pb-20 px-3 lg:px-0
         ${isOpen ? "flex" : "hidden"} transition-all duration-500 `}>
            <div className="flex justify-between lg:justify-evenly items-center w-full lg:px-[1em] lg:max-w-[76.188em]  lg:px-[0.19em] py-[1.06em] ">
                <NavLink to={"/"}>
                    <img src={logo} alt="Quick Mynt" className="w-[9.438em] h-[3.813em] object-contain" />
                </NavLink>
                
                <p className="hidden lg:block lg:w-full font-osande font-[] lg:font-[600] text-[] lg:text-[3em] text-[#488559] text-center">
                    Request a Demo
                </p>
                
                <button onClick={() => setIsOpen(false)}><FaTimes color="#434343" size={30.13} /></button>
            </div>
            <p className="block lg:hidden lg:w-full font-osande font-[600] lg:font-[600] text-[2.5em] lg:text-[3em] text-[#488559] text-center mt-3 mb-7">
                    Request a Demo
                </p>
            <div className="w-full lg:max-w-[76.188em] lg:mt-3 mb-10 lg:mb-20">
                <p className="font-[600] lg:font-[600] font-osande text-[1.8em] lg:text-[2.2em] leading-[60.48px] text-left w-full text-[#434343] lg:mt-6 lg:mb-6">See QuickMynt in Action</p>
                <p className="font-graphik font-[300] lg:font-[400] text-[1em] lg:text-[1.5em] leading-[24px] lg:leading-[35px] max-w-[21.375em] lg:max-w-[40.063em]">Ready to explore how QuickMynt can transform financial access for your team? Request a personalized demo today and discover the seamless, 
                    cost-free way to provide instant wage access and wellness tools for your employees.</p>
            </div>
            <div className="flex w-full px-[1em] lg:max-w-[76.188em] lg:items-center justify-between">
                <form action="" method="post" className="w-full max-w-[32.625em] flex flex-col gap-8">

                    <div className=" w-full flex flex-col gap-3">
                        <label htmlFor="fname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">First Name<MdOutlineStarPurple500 size={16} fill="#F8B84E" 
                         className="-mt-1" color="#F8B84E" /></label>
                        <input type="text" name="fname" id="" className="bg-[#EDEDED] text-[#434343]  w-full h-[2.75em] rounded-xl" />
                    </div>
                    <div className=" w-full flex flex-col gap-3">
                        <label htmlFor="lname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">Last Name<MdOutlineStarPurple500 size={16} fill="#F8B84E" 
                         className="-mt-1" color="#F8B84E" /></label>
                        <input type="text" name="lname" id="" className="bg-[#EDEDED] text-[#434343]  w-full h-[2.75em] rounded-xl" />
                    </div>
                    <div className=" w-full flex flex-col gap-3">
                        <label htmlFor="compemail" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">Company Email<MdOutlineStarPurple500 size={16} fill="#F8B84E" 
                         className="-mt-1" color="#F8B84E" /></label>
                        <input type="text" name="compEmail" id="" className="bg-[#EDEDED] text-[#434343]  w-full h-[2.75em] rounded-xl" />
                    </div>
                    <div className=" w-full flex flex-col gap-3">
                        <label htmlFor="compname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">Company Name<MdOutlineStarPurple500 size={16} fill="#F8B84E" 
                         className="-mt-1" color="#F8B84E" /></label>
                        <input type="text" name="compName" id="" className="bg-[#EDEDED] text-[#434343]  w-full h-[2.75em] rounded-xl" />
                    </div>
                    <div className=" w-full flex flex-col gap-3">
                        <label htmlFor="pnum" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">Phone Number<MdOutlineStarPurple500 size={16} fill="#F8B84E" 
                         className="-mt-1" color="#F8B84E" /></label>
                        <input type="text" name="pnum" id="" className="bg-[#EDEDED] text-[#434343]  w-full h-[2.75em] rounded-xl" />
                    </div>
                    <div className=" w-full flex flex-col gap-3">
                        <label htmlFor="employees_num" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">Number of Employees<MdOutlineStarPurple500 size={16} fill="#F8B84E" 
                         className="-mt-1" color="#F8B84E" /></label>
                        <input type="text" name="employees_num" id="" className="bg-[#EDEDED] text-[#434343]  w-full h-[2.75em] rounded-xl" />
                    </div>
                    <div className=" w-full flex flex-col gap-3">
                        <label htmlFor="fname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">How can we help?</label>
                        <textarea name="message" id="" className="bg-[#EDEDED] text-[#434343]  w-full h-[12.375em] rounded-xl" />
                    </div>
                   
                
                </form>
                <img src={form_img} alt="form_img" className="hidden lg:block" />
            </div>
        </div>
    );

};
export default DemoForm;