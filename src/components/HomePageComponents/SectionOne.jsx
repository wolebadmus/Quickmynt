const SectionOne = () => {

    // lg:h-[69.8125em]
    return (
        <section className={"banner flex flex-col w-full h-[36em]  lg:min-h-[100vh] pt-[2.8em] !bg-right  lg:!bg-top relative justify-center items-center gap-6"}>
            <div className="absolute w-full h-full bg-custom-gradient mix-blend-multiply -mt-[2.8em]"></div>
            <div className="flex flex-col justify-center gap-6 lg:gap-5 lg:w-full lg:max-w-[90em] h-[22.249em] lg:h-[39.824em]">
                <div className="z-40 flex flex-col justify-center gap-4 lg:gap-6 max-w-[20.9375em] lg:max-w-[33.563em]  ">
                    <p className="text-base text-[#F3FEF6] text-[3.142em] lg:text-[4.61em] font-osande font-[600] lg:font-[800] leading-[60.48px] lg:leading-[88px] text-center lg:text-left">
                        Turning Every Workday into Payday.
                    </p>
                    <p className="hidden lg:block text-[#FDFDFD] text-[1.5769em] font-osande font-[600] leading-[32.71px] text-left">
                        Every Day Earned, Every Day Accessible.
                    </p>
                    <p className="text-[#FDFDFD]  max-w-[20.9375em] lg:max-w-[20.563em] text-[1em] lg:text-[1.5em] font-osande font-[500] lg:font-[300] leading-[24px] lg:leading-[35px] text-center lg:text-left">
                        QuickMynt delivers a cutting-edge earned wage access platform, giving employees the freedom to access their pay on their terms, with no disruptions to payroll.
                    </p>
                </div>
                <button className="z-40 text-base text-[#F3FEF6] font-graphik font-[500] text-[1.0112em] lg:text-[1.094em] leading-[17.8px] lg:leading-[23.05px]
                 bg-[#488559] w-[11.6669em] lg:w-[10.5981em] h-[2.3887em] lg:h-[3.0744em] hover:text-[#488559]
                  hover:bg-[#FFF] hover:border hover:border-[#488559] rounded-full z-40 mx-auto lg:mx-0">
                    Request a Demo
                </button>
            </div>
        </section>
    );
};

export default SectionOne;
