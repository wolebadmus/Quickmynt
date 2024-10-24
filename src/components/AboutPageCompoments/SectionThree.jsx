import about_three from "../../assets/about_three.svg";


const SectionThree = () => {

    return (
        <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full lg:max-w-[90em] w-full lg:h-[31.188em] gap-5 lg:gap-0 mt-10">
            <img src={about_three} alt="about_us_one" className=" h-[21.242em] lg:h-[22.403em] w-[16.64em] lg:w-[32.294em]" />
            <div className="flex flex-col gap-6 justify-center items-start  gap-3 lg:gap-3 px-2 lg:px-0">
                <p className="text-[#434343] font-osande font-[600] lg:font-[600] text-[2.5em] lg:text-[3.55em] max-w-[9em] lg:max-w-[12.365em]
                leading-[46.02px] lg:leading-[69.02px]">
                    Our Commitment
                </p>
                <p className="text-[#434343] font-graphik text-[1.125em] lg:text-[1.25em] leading-[26px] lg:leading-[32px] font-[400] lg:font-[400] max-w-[19.759em] lg:max-w-[37em]">
                    We're committed to delivering <span className="font-[700] ">real-time wage access</span> that supports employee financial wellness and drives business success. 
                    QuickMynt seamlessly integrates with payroll systems, providing SMBs with a cost-effective way to improve employee satisfaction without the hassle. 
                    Together, we can help build stronger businesses by prioritizing the financial health of employees.
                    
                </p>
            </div>
        </section>
    );

};
export default SectionThree;