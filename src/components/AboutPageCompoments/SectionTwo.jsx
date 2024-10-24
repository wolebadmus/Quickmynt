import about_two from "../../assets/about_two.svg";


const SectionTwo = () => {

    return (
        <section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center w-full lg:max-w-[90em] w-full lg:h-[31.188em] gap-5 lg:gap-0 mt-10">
            <div className="flex flex-col gap-6 justify-center items-start gap-3 lg:gap-3 px-2 lg:px-0">
                <p className="text-[#434343] font-osande font-[600] lg:font-[600] text-[2.5em] lg:text-[3.55em] max-w-[7em] lg:max-w-[47.365em]
                leading-[46.02px] lg:leading-[69.02px]">
                    Our Mission & Values
                </p>
                <p className="text-[#434343] font-graphik text-[1.125em] lg:text-[1.25em] leading-[26px] lg:leading-[32px] font-[400] lg:font-[400] max-w-[19.459em] lg:max-w-[37em]">
                    <span className="font-[600] block mb-4 lg:mb-0">Our mission is simple: to provide financial empowerment to employees of SMBs, ensuring that everyone has access to their earnings when they need them.</span>
                   
                   
                    {/* We believe that <span className="font-[700] ">small and medium-sized businesses (SMBs)</span> are the driving force behind the economy. They fuel innovation, create jobs, and build communities, yet often face challenges when providing the financial benefits that larger corporations can offer. We're here to change that. 
                    <span className="block lg:inline mt-4 lg:mt-0">
                    <span className="font-[700] "> QuickMynt</span> was built to empower SMBs by giving their employees instant access to earned wages, helping to reduce financial stress and boost workplace satisfaction.
                    </span> */}
                </p>
                <ul className="list-disc max-w-[21.459em] lg:max-w-[47.365em] pl-5">
                        <li className="text-[#434343] font-graphik text-[1.125em] lg:text-[1.25em] leading-[26px] lg:leading-[32px] font-[400] lg:font-[400]"><span className="font-[700]">Empowerment: </span> We believe in giving employees control over their financial well-being.</li>
                        <li className="text-[#434343] font-graphik text-[1.125em] lg:text-[1.25em] leading-[26px] lg:leading-[32px] font-[400] lg:font-[400]"><span className="font-[700]">Innovation: </span> We continually evolve to provide cutting-edge tools for SMBs to remain competitive.</li>
                        <li className="text-[#434343] font-graphik text-[1.125em] lg:text-[1.25em] leading-[26px] lg:leading-[32px] font-[400] lg:font-[400]"><span className="font-[700]">Trust: </span> We're committed to transparent, secure services for both employees and employers.</li>
                        <li className="text-[#434343] font-graphik text-[1.125em] lg:text-[1.25em] leading-[26px] lg:leading-[32px] font-[400] lg:font-[400]"><span className="font-[700]">Customer Focus: </span> We work closely with SMBs to understand their unique needs and offer tailored solutions.</li>
                </ul>
            </div>
            <img src={about_two} alt="about_us_one" className=" h-[21.242em] lg:h-[31.188em] w-[16.64em] lg:w-[47.365em]" />
        </section>
    );

};
export default SectionTwo;