import adp from "../assets/adp.svg";
import gusto from "../assets/gusto.svg";
import paychex from "../assets/paychex.svg";
import quickbook from "../assets/quickbook.svg";
import square from "../assets/square.svg";
import compliance from "../assets/compliance.png";
import security from "../assets/security.png";
import configurable from "../assets/security.png";



const SectionEight = () => {



    const icons = [
                {imgsrc: gusto, className: "h-[42.47px] lg:h-[67.82px] w-[88.92px] lg:w-[142px]"}, 
                {imgsrc: adp, className: "h-[28.35px] lg:h-[45.27px] w-[70.15px] lg:w-[112.02px]"}, 
                {imgsrc: square, className: "h-[31.48px] lg:h-[50.27px] w-[31.48px] lg:w-[50.27px]"}, 
                {imgsrc: paychex, className: "h-[22.8px] lg:h-[36.42px] w-[143.97px] lg:w-[229.92px]"}, 
                {imgsrc: quickbook, className: "h-[37.63px] lg:h-[57.34px] w-[195.36px] lg:w-[297.64px]"}
    ]
    

    return (
        <section className="w-full bg-[#FCEBE3] flex flex-col justify-start items-center gap-10 pb-10 lg:h-[53.375em]">
        <div className="flex flex-col justify-center items-center max-w-[23.18em] lg:w-full lg:max-w-[90em] gap-8">
            <p className="max-w-[23.18em] w-full lg:max-w-[18.69em] text-[#525B60] font-osande lg:font-graphik font-[700] lg:mb-16 lg:font-[500] text-[1.88em] lg:text-[3em] leading-[40px] lg:leading-[52.8px] text-center">
                We've partnered with leading payroll providers used by most SMBs
            </p>
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
                    Certified with ISO27001, SOC1 Type II, and SOC2 Type II standards, QuickMynt provides enhanced security with multiple authentication methods.
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
    
        <button className="font-graphik text-[#F3FEF6] font-[500] text-[1.16em] lg:text-[1.4em] leading-[20.51px] lg:leading-[24.54px] bg-[#232E33] w-[9.78em] lg:w-[10.62em] h-[2.33em] lg:h-[2.75em] rounded-full p-0">
            Request a Demo
        </button>
    </section>
    
    );

};
export default SectionEight;