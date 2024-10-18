import phones from "../assets/phone.png";


const SectionFour = () => {


    return (
        <section className="max-w-[371px] w-full lg:max-w-[1140px] flex flex-col-reverse lg:flex-row justify-center gap-8 mt-20 lg:mt-0">
            <div className="flex justify-center">
                <img src={phones} alt="phones" className="w-full h-full max-w-[394.54px] lg:max-w-[768.11px] max-h-[473.8px] lg:max-h-[922.43px] object-contain" />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center lg:gap-0 ">
                <p className="max-w-[341px] w-full h-[70px] lg:max-w-[464px] lg:h-[284px] text-[#161616] text-[30px] 
                lg:text-[62px] font-osande font-[700] lg:font-[600] leading-[34.51px] lg:leading-[71.32px]">
                    <span className="text-[#488559] font-[700] font-osande ">Endless Possibilities,</span> Unlock What's Yours.
                </p>

                <p className="max-w-[341px] w-full h-[78px] lg:max-w-[464px] lg:h-[140px] text-[#161616] text-[16px] font-graphik
                lg:text-[24px] font-graphik font-[400] lg:font-[400] leading-[24px] lg:leading-[35px] text-justify lg:text-left">
                    No cost to employers or employees. Instantly access earnings and, in addition, enjoy health and financial wellness benefits.
                </p>
            </div>
        </section>
    );

};
export default SectionFour;