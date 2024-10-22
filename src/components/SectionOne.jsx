const SectionOne = () => {

   //  h-[42em] lg:h-[69.813em]
    
    return (
        <section className={"banner flex flex-col w-full h-[100vh] bg-right-bottom lg:bg-center relative justify-center items-center gap-6"}>
            <div className="absolute w-full h-full bg-custom-gradient mix-blend-multiply "></div>
            <div className="flex flex-col justify-center gap-6 lg:gap-3 lg:w-full lg:max-w-[71em] lg:mt-20">
                <div className="z-40 flex flex-col justify-evenly gap-4 lg:gap-0  max-w-[20.9375em] lg:max-w-[24.5em] ">
                    <p className="text-[#F3FEF6] text-[3.1419em] lg:text-[3.75em] font-osande font-[600] lg:font-[800] leading-[60.48px] lg:leading-[78px] text-center lg:text-left">
                        Turning Every Workday into Payday.
                    </p>
                    <p className="hidden lg:block text-[#FDFDFD] text-[1.4em] font-osande font-[600] leading-[28.71px] text-left">
                        Every Day Earned, Every Day Accessible.
                    </p>
                    <p className="text-[#FDFDFD] text-[1em] lg:text-[1.2em] font-osande font-[500] lg:font-[400] leading-[24px] lg:leading-[30px] text-center lg:text-left">
                        QuickMynt delivers a cutting-edge earned wage access platform, giving employees the freedom to access their pay on their terms, with no disruptions to payroll.
                    </p>
                </div>
                <button className="z-40 text-[#F3FEF6] font-graphik font-[500] text-[1.0112em] lg:text-[1em] leading-[17.8px] lg:leading-[20.05px] bg-[#488559] w-[11.6669em] lg:w-[15.0981em] h-[2.3887em] lg:h-[3.0744em] hover:text-[#488559] hover:bg-[#FFF] hover:border hover:border-[#488559] rounded-full z-40 mx-auto lg:mx-0">
                    Request a Demo
                </button>
            </div>
        </section>
    );
};

export default SectionOne;
