import ReactGA from "react-ga4";
import useModalStore from "../../store/modalStore";

const SectionOne = () => {
  const { setIsOpen } = useModalStore();

  const trackButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });

    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Demo/Sign Up",
    });
  };

  // md:h-[69.8125em]
  return (
    <section className={"tiny:min-h-[90vh] tiny:relative mt-[0] md:mt-[5rem] !bg-cover bg-center banner flex flex-col w-full  md:min-h-[90vh] pt-[2.8em] bg-right  md:bg-top !relative justify-center items-center gap-6 !bg-[length:103rem] ![background-position-x:0rem]"}>
      <div className="opacity-0 absolute w-full h-full bg-custom-gradient mix-blend-multiply -mt-[2.8em]"></div>
      <div className="md:flex md:justify-center md:absolute tiny:!absolute md:top-[0] md:left-[0] tiny:bottom-[4rem] flex flex-col justify-start gap-6 md:gap-5 md:w-full md:max-w-[90em] h-[22.249em] md:h-[100%]">
        <div className="md:ml-[3rem] pt-15 z-40 flex flex-col justify-center gap-4 md:gap-6 max-w-[20.9375em] md:max-w-[33.563em]  ">
          <p className="text-[#F3FEF6] text-[3.642em] md:text-[3.5em] font-osande font-[600] md:font-[800] leading-[60.48px] md:leading-[88px] text-center md:text-left">
            Turning Every <br />
            Workday into Payday.
          </p>
          <p className="hidden md:block text-[#FDFDFD] text-[1.6769em] font-osande font-[600] leading-[32.71px] text-left">Every Day Earned, Every Day Accessible.</p>
          <p className=" text-[#FDFDFD]  max-w-[20.9375em] md:max-w-[20.563em] text-[1em] md:text-[1.5em] font-osande font-[500] md:font-[300] leading-[24px] md:leading-[35px] text-center md:text-left">QuickMynt delivers a cutting-edge earned wage access platform, giving employees the freedom to access their pay on their terms, with no disruptions to payroll.</p>
        </div>
        <button
          onClick={() => {
            trackButtonClick();
            setIsOpen(true);
          }}
          className="tiny:p-[15px] tiny:w-[auto] tiny:h-[auto] tiny:whitespace-[nowrap] tiny:font-[700] tiny:!bg-[#488559] tiny:!text-white md:relative md:bottom-[0] z-40 text-[#F3FEF6] font-graphik font-[500] text-[1.0112em] md:text-[1.094em] leading-[17.8px] md:leading-[23.05px]
                 bg-[#488559] w-[11.6669em] md:w-[20.5981em] h-[2.3887em] md:h-[3.0744em] hover:text-[#488559]
                  hover:bg-[#FFF] hover:border hover:border-[#488559] rounded-full z-40 mx-auto md:mx-0 md:ml-[3rem]">
          For Employers: Request a Demo
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
