import about_one from "../../assets/about_one.svg";


const SectionOne = () => {

    return (
        <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full lg:max-w-[90em] lg:h-[31.188em] gap-5 lg:gap-0 mt-10">
            <img src={about_one} alt="about_us_one" className=" h-[14.694em] lg:h-[22.125em] w-[14.583em] lg:w-[21.958em] mb-5 lg:mb-0" />
            <div className="flex flex-col gap-6 justify-center items-center gap-3 lg:gap-3 px-2 lg:px-0">
                <p className="text-[#434343] font-osande font-[600] lg:font-[600] text-[2.5em] lg:text-[3.55em] max-w-[9em] lg:max-w-[12.965em]
                leading-[46.02px] lg:leading-[69.02px]">
                    Why We're <span className="text-[#488559]">Committed</span> to SMBs
                </p>
                <p className="text-[#434343] font-graphik text-[1.125em] lg:text-[1.25em] leading-[26px] lg:leading-[32px] font-[400] lg:font-[400] max-w-[19.459em] lg:max-w-[37em]">
                    <span className="font-[700] block mb-4 lg:mb-0">Empowering the Backbone of the American Economy</span>
                    We believe that <span className="font-[700] ">small and medium-sized businesses (SMBs)</span> are the driving force behind the economy. They fuel innovation, create jobs, and build communities, yet often face challenges when providing the financial benefits that larger corporations can offer. We're here to change that. 
                    <span className="block lg:inline mt-4 lg:mt-0">
                        <span className="font-[700] "> QuickMynt</span> was built to empower SMBs by giving their employees instant access to earned wages, helping to reduce financial stress and boost workplace satisfaction.
                    </span>
                </p>
            </div>
        </section>
    );

};
export default SectionOne;