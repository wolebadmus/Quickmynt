import stats from "../assets/stats.png"


const SectionThree = () => {

    return (
        <section className="flex justify-end w-full">
            <div className="flex flex-col lg:flex-row max-w-[371px] w-full lg:max-w-[1525px] gap-6 lg:gap-0">

                <div className="flex flex-col gap-3 lg:gap-10 justify-center w-full items-center lg:items-start">
                    <p className="text-[#232E33] max-w-[341px] w-full lg:max-w-[704px] font-[700] text-[30px] lg:text-[60px] leading-[36.81px] lg:leading-[62px] font-osande">Strengthening Business Starts with Supporting People</p>
                    <p className="text-[#525B60] max-w-[341px] w-full lg:max-w-[519px] font-[400] text-[16px] lg:text-[24px] leading-[25px] lg:leading-[35px] font-graphik">
                        <span className="text-[#488559] w-[519px] font-[600] font-graphik">QuickMynt</span> is important for your diverse workforce. Data shows how highly they value instant access to earned wages, driving financial security and flexibility across generations.
                    </p>
                </div>
                <div className="flex justify-end ">
                    <img src={stats} alt="stats" className="w-[503px] lg:w-[985px] h-[444px] lg:h-[867px] object-contain " />
                </div>
            </div>
        </section>
    );
};
export default SectionThree;