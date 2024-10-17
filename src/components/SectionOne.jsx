

const SectionOne = () => {

    return (
        <section className={"banner flex flex-col w-full h-[672px] lg:h-[1117px] bg-right-bottom lg:bg-center relative justify-center items-center gap-6 "}>
            <div className="absolute w-full h-full bg-custom-gradient mix-blend-multiply "></div>
            <div className="flex flex-col justify-center gap-6 lg:gap-3 lg:w-full lg:max-w-[1140px]">
                <div className="z-40 flex flex-col justify-evenly gap-4 lg:gap-0 h-[289.2px] lg:h-[537px] max-w-[335px] lg:max-w-[600px] ">
                    <p className="text-[#F3FEF6] text-[50.27px] lg:text-[89.76px] font-osande font-[600] lg:font-[800] leading-[60.48px] lg:leading-[108px] text-center lg:text-left">
                            Turning Every Workday into Payday.
                    </p>
                    <p className="hidden lg:block text-[#FDFDFD] text-[28.43px] font-osande font-[600] leading-[32.71px] text-left">
                        Every Day Earned, Every Day Accessible.
                    </p>
                    <p className="text-[#FDFDFD] text-[16px] lg:text-[24px] font-osande font-[500] lg:font-[400] leading-[24px] lg:leading-[35px] text-center lg:text-left">
                            QuickMynt delivers a cutting-edge earned wage access platform, giving employees the freedom to access their pay on their terms, with no disruptions to payroll.
                    </p>
                </div>
                <button className="z-40 text-[#F3FEF6] font-[500] text-[16.18px] lg:text-[20.95px] leading-[17.8px] lg:leading-[23.05px] bg-[#488559] w-[186.67px] lg:w-[241.57px] h-[38.22px] lg:h-[49.19px] rounded-full z-40 mx-auto lg:mx-0">Request a Demo</button>
            </div>
        </section>
    );

};

export default SectionOne;