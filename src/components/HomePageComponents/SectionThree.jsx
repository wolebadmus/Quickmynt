import stats from "../../assets/stats.svg";

const SectionThree = () => {
  return (
    <section className="flex justify-center w-full ">
      <div className="flex flex-col lg:flex-row max-w-[23.1875em] w-full lg:max-w-[90em] h-[42.586em] gap-6 lg:gap-0 ">
        <div className="lg:ml-[2rem] flex flex-col gap-3 lg:gap-10 justify-center w-full items-center lg:items-start">
          <p className="text-[#232E33] max-w-[10.9025em] w-full lg:max-w-[11em] font-[500] lg:font-[700] text-[1.875em] lg:text-[3.75em] leading-[36.81px] lg:leading-[62px] font-osande">Strengthening Business Starts with Supporting People</p>
          <p className="text-[#525B60] max-w-[20.8025em] w-full lg:max-w-[22.4375em] font-[400] text-[1em] lg:text-[1.5em] leading-[25px] lg:leading-[35px] font-graphik">
            <span className="text-[#488559] w-[32.4375em] font-[600] font-graphik">QuickMynt</span> is important for your diverse workforce. Data shows how highly they value instant access to earned wages, driving financial security and flexibility across generations.
          </p>
        </div>
        <div className="h-[auto] w-[inherit] !relative">
          <img src={stats} alt="stats" className="max-w-[22.125em] lg:max-w-[54.063em] h-[21.75em] lg:h-[47.586em] absolute lg:!absolute right-0 object-contain w-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
