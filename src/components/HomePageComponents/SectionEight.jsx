import adp from "../../assets/adp.svg";
import gusto from "../../assets/gusto.svg";
import paychex from "../../assets/paychex.svg";
import quickbook from "../../assets/quickbook.svg";
import square from "../../assets/square.svg";
import compliance from "../../assets/compliance.png";
import security from "../../assets/security.png";
import configurable from "../../assets/security.png";
import useModalStore from "../../store/modalStore";
import ReactGA from "react-ga4";



const SectionEight = () => {

    const {setIsOpen} = useModalStore();

    const trackButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });

        ReactGA.event({
          category: 'Button',
          action: 'Click',
          label: "Demo/Sign Up",
        });
      };


    const icons = [
                {imgsrc: gusto, className: "h-[42.47px] lg:h-[67.82px] w-[88.92px] lg:w-[142px]"}, 
                {imgsrc: adp, className: "h-[28.35px] lg:h-[45.27px] w-[70.15px] lg:w-[112.02px]"}, 
                {imgsrc: square, className: "h-[31.48px] lg:h-[50.27px] w-[31.48px] lg:w-[50.27px]"}, 
                {imgsrc: paychex, className: "h-[22.8px] lg:h-[36.42px] w-[143.97px] lg:w-[229.92px]"}, 
                {imgsrc: quickbook, className: "h-[37.63px] lg:h-[57.34px] w-[195.36px] lg:w-[297.64px]"}
    ]
    

    return (
        <section className="w-full bg-[#FCEBE3] flex flex-col justify-start items-center gap-10 pb-10 lg:h-[60.375em]">
  <div className="flex flex-col justify-center items-center max-w-[23.18em] lg:w-full lg:max-w-[90em] gap-8">
    <div className="w-[60%]">
      <div className="text-[#525B60] font-osande lg:font-graphik font-[400] lg:mb-6 lg:font-[500] text-[1.88em] lg:text-[3em] leading-[40px] lg:leading-[52.8px] text-left">
        We Integrate with leading payroll providers commonly used by SMBs
      </div>
      <p className="font-lg:font-graphik text-sm sm:text-base leading-relaxed text-gray-600 mb-10 sm:mt-10 max-w-full text-left">
        <strong className="text-base sm:text-lg font-semibold block">Disclaimer</strong>
        Logos shown represent supported or planned integrations.
        QuickMynt is independently operated and not affiliated with, endorsed by, or sponsored by these companies.
        All trademarks are property of their respective owners.
      </p>
    </div>

    <div className="flex flex-wrap lg:flex-nowrap w-full lg:justify-between items-center">
      {icons.map((ico, idx) => (
        <img src={ico.imgsrc} key={idx} alt="" className={`object-contain ${ico.className} flex-[33.33%] lg:flex-auto mt-3 lg:mt-0`} />
      ))}
    </div>
    <p className="font-lg:font-graphik text-[#273238] font-[400] text-[0.88em] lg:text-[1.5em] leading-[15.4px] lg:leading-[26.4px] text-center">
      and many other payroll providers
    </p>
  </div>
    
        <div className="flex flex-col lg:flex-row mt-10 gap-10 lg:gap-0 max-w-[23.18em] w-full lg:max-w-[90em] justify-between">
            <div className="flex flex-col justify-center items-center">
                <img src={compliance} alt="" />
                <p className="font-graphik text-[#232E33] font-[500] text-[1.5em] leading-[32px] text-center">
                    Compliance
                </p>
                <p className="font-graphik text-[#525B60] font-[400] text-[1.13em] leading-[26px] text-center max-w-[23.6em] h-[6.5em]">
                    Studies show that providing Earned Wage Access (EWA) leads to higher employee satisfaction, increased loyalty, and a stronger workforce
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={security} alt="" />
                <p className="font-graphik text-[#232E33] font-[500] text-[1.5em] leading-[32px] text-center">
                    Security
                </p>
                <p className="font-graphik text-[#525B60] font-[400] text-[1.13em] leading-[26px] text-center max-w-[23.6em] h-[6.5em]">
QuickMynt follows industry best practices and is on track to meet SOC 2 Type II, SOC 1 Type II, and ISO 27001 certification standards as part of our compliance roadmap.                
</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <img src={configurable} alt="" />
                <p className="font-graphik text-[#232E33] font-[500] text-[1.5em] leading-[32px] text-center">
                    Configurable
                </p>
                <p className="font-graphik text-[#525B60] font-[400] text-[1.13em] leading-[26px] text-center max-w-[23.6em] h-[6.5em]">
                    QuickMynt supports SSO, internationalization, and offers over 450 customizable rules to fit your business needs.
                </p>
            </div>
        </div>
    
        <button onClick={() => {trackButtonClick();  setIsOpen(true)}} className="z-40 font-graphik text-[#F3FEF6] font-[500] text-[1.16em] lg:text-[1.4em] 
        leading-[20.51px] lg:leading-[24.54px] bg-[#232E33] w-[9.78em] lg:w-[10.62em] h-[2.33em] lg:h-[2.75em] rounded-full p-0">
            Request a Demo
        </button>
    </section>
    
    );

};
export default SectionEight;