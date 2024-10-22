import stats from "../assets/stats.png"

const SectionThree = () => {

    return (
        <section className="flex justify-center w-full">
            <div className="flex flex-col lg:flex-row max-w-[23.1875em] w-full lg:max-w-[71.25em] h-[47.586em] gap-6 lg:gap-0">

                <div className="flex flex-col gap-3 lg:gap-10 justify-center w-full items-center lg:items-start ">
                    <p className="text-[#232E33] max-w-[10.9025em] w-full lg:max-w-[11em] font-[700] lg:font-[600] text-[1.875em] lg:text-[3em] leading-[36.81px] lg:leading-[62px] font-osande">
                        Strengthening Business Starts with Supporting People
                    </p>
                    <p className="text-[#525B60] max-w-[20.8025em] w-full lg:max-w-[22.4375em] font-[400] text-[1em] lg:text-[1.5em] leading-[25px] lg:leading-[35px] font-graphik">
                        <span className="text-[#488559] w-[32.4375em] font-[600] font-graphik">QuickMynt</span> is important for your diverse workforce. Data shows how highly they value instant access to earned wages, driving financial security and flexibility across generations.
                    </p>
                </div>
                <div className="flex ">
                    <img src={stats} alt="stats" className="w-[31.4375em] lg:w-[32.5625em] h-[27.75em] lg:h-[45.1875em] object-contain absolute right-0" />
                </div>
            </div>
        </section>
    );
};

export default SectionThree;
