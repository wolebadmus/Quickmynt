import adp from "../assets/adp.png";
import gusto from "../assets/gusto.png";
import paychex from "../assets/paychex.png";
import quickbook from "../assets/quickbook.png";
import square from "../assets/square.png";
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
        <section className="w-full bg-[#FCEBE3] flex flex-col justify-start items-center gap-10 pb-10">
            <div className="flex flex-col justify-center items-center max-w-[371px] lg:w-full lg:max-w-[1140px] gap-8 ">

                <p className="max-w-[371px] w-full lg:max-w-[891px] font-osande lg:font-graphik font-[700] lg:font-[500] text-[30px] lg:text-[48px] leading-[40px] lg:leading-[52.8px] text-center ">We've partnered with leading payroll providers used by most SMBs</p>
                <div className="flex flex-wrap lg:flex-nowrap w-full lg:justify-between items-center">
                    {icons.map((ico, idx) => <img src={ico.imgsrc} key={idx} alt="" className={`object-contain ${ico.className} flex-[33.33%] lg:flex-auto mt-3 lg:mt-0`} />)}
                </div>
                <p className="font- lg:font-graphik text-[#273238] font-[400] text-[14px] lg:text-[24px] leading-[15.4px] lg:leading-[26.4px] text-center ">and many other payroll providers</p>
            </div>
            <div className="flex flex-col lg:flex-row mt-10  gap-10 lg:gap-0 max-w-[371px] w-full lg:max-w-[1140px]">
                <div className="flex flex-col justify-center items-center">
                    <img src={compliance} alt=""/>
                    <p className="font-graphik text-[#232E33] font-500 text-[24px] leading-[32px] text-center">
                        Compliance
                    </p>
                    <p className="font-graphik text-[#525B60] font-400 text-[18px] leading-[26px] text-center max-w-[377.67px] h-[104px] ">
                        Studies show that providing Earned Wage Access (EWA) leads to higher employee satisfaction, increased loyalty, and a stronger workforce
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <img src={security} alt=""/>
                    <p className="font-graphik text-[#232E33] font-500 text-[24px] leading-[32px] text-center">
                        Security
                    </p>
                    <p className="font-graphik text-[#525B60] font-400 text-[18px] leading-[26px] text-center max-w-[377.67px] h-[104px] ">
                        Studies show that providing Earned Wage Access (EWA) leads to higher employee satisfaction, increased loyalty, and a stronger workforce
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <img src={configurable} alt=""/>
                    <p className="font-graphik text-[#232E33] font-500 text-[24px] leading-[32px] text-center">
                        Configurable
                    </p>
                    <p className="font-graphik text-[#525B60] font-400 text-[18px] leading-[26px] text-center max-w-[377.67px] h-[104px] ">
                        Studies show that providing Earned Wage Access (EWA) leads to higher employee satisfaction, increased loyalty, and a stronger workforce
                    </p>
                </div>
            </div>

            <button className="font-graphik text-[#F3FEF6] font-[500] text-[18.64px] lg:text-[22.31px] leading-[20.51px] lg:leading-[24.54px] 
            bg-[#232E33] w-[182.09px] lg:w-[217.91px] h-[50.14px] lg:h-[60px] rounded-full p-0 ">
                Request a Demo
            </button>
        </section>
    );

};
export default SectionEight;