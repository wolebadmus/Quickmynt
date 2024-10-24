

import contact_one from "../../assets/contact_one.svg"
import contact_two from "../../assets/contact_two.svg"
import useModalStore from "../../store/modalStore";


const SectionOne = () => {

    const {setIsOpen} = useModalStore();

    return(
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between  w-full lg:max-w-[90em] mt-10 mb-4">
            <div className="bg-[#F3FEF6] shadow-md  w-[22.438em] lg:w-[37.781em] h-[30.574em] lg:h-[34.762em] rounded-2xl mx-auto">
                <img src= {contact_one} alt="" className="w-[23.438em] lg:w-[37.781em] h-[10.375em] lg:h-[17.375em] " />
                <div className="w-full flex flex-col h-[19em] lg:h-[16em] justify-evenly items-center">
                    <p className="text-[2.25em] lg:text-[2.05em] font-osande font-[500] lg:font-[600] leading-[41.41px] lg:leading-[41.41px] text-center text-[#488559]">
                    Employer Inquiry
                    </p>
                    <p className="font-graphik text-[1.125em] lg:text-[1.125em] leading-[28px] text-center font-[400] lg:font-[500] text-[#434343] lg:max-w-[26.281em]">
                        I'm interested in offering Payactiv to my employees and want to learn more!
                    </p>
                    <button onClick={() => setIsOpen(true)} className="text-[#488559] text-[1em] lg:text-[1em] font-[400] lg:font-[500] leading-[17.6px] lg:leading-[17.6px] 
                            w-[9.438em] lg:w-[9.438em] h-[2.762em] lg:h-[2.762em] rounded-full 
                            font-graphik border border-[#488559] hover:bg-[#488559] hover:text-[#ffffff]">
                            Visit Support
                    </button>
                </div>
            </div>
            <div className="bg-[#F3FEF6] shadow-md  w-[22.438em] lg:w-[37.781em] h-[30.574em] lg:h-[34.762em] rounded-2xl mx-auto">
                <img src= {contact_two} alt="" className="w-[23.438em] lg:w-[37.781em] h-[10.375em] lg:h-[17.375em] " />
                <div className="w-full flex flex-col h-[19em] lg:h-[16em] justify-evenly items-center">
                    <p className="text-[2.25em] lg:text-[2.05em] font-osande font-[500] lg:font-[600] leading-[41.41px] lg:leading-[41.41px] text-center text-[#488559]">
                    QuickMynt User Support
                    </p>
                    <p className="font-graphik text-[1.125em] lg:text-[1.125em] leading-[28px] text-center font-[400] lg:font-[500] text-[#434343] lg:max-w-[26.281em]">
                    I use QuickMynt and need help with my account, or need to create one!
                    </p>
                    <button className="text-[#488559] text-[1em] lg:text-[1em] font-[400] lg:font-[500] leading-[17.6px] lg:leading-[17.6px] 
                            w-[9.438em] lg:w-[9.438em] h-[2.762em] lg:h-[2.762em] rounded-full 
                            font-graphik border border-[#488559] hover:bg-[#488559] hover:text-[#ffffff]">
                            Visit Support
                    </button>
                </div>
            </div>
        </section>
    );

};
export default SectionOne;