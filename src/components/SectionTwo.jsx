

import asset1 from "../assets/track.png";
import asset2 from "../assets/request.png";
import asset3 from "../assets/seamless.png";

const SectionTwo = () => {

    const img_class = "w-[189.68px] h-[241.58px] lg:w-[318px] lg:h-[405px]";
    const title_class = "max-w-[335.21px] lg:max-w-[278px]  font-[700] text-[30px] lg:text-[40px]  text-[#434343] leading-[34.51px] lg:leading-[46.02px] text-center font-osande";
    const sub_class = "max-w-[335.21px] lg:max-w-[258px] font-[500] text-[16px] lg:text-[18px] text-[#9D9D9D] leading-[24px] lg:leading-[28px] text-center font-graphik";

    return (
        <section className="max-w-[371px] w-full lg:max-w-[1429px] py-16 flex flex-col justify-center items-center gap-16 ">

            <p className="max-w-[341px] lg:max-w-[600px] text-center font-osande font-[700] text-[#161616] lg:font-[600] text-[33.18px] lg:text-[62px] leading-[38.17px] lg:leading-[71.32px]">
                Unlocking Earnings in <span className="text-[#488559]">3 Simple Steps</span>
            </p>

            <div className="flex flex-col lg:flex-row justify-evenly w-full gap-16">
                <div className="flex flex-col items-center gap-5">
                    <img src={asset1} alt="" className={img_class} />
                    <div className="flex flex-col items-center gap-4">
                        <p className={"max-w-[258px] " + title_class}>Track Earnings in Real-Time</p>
                        <p className={"max-w-[305px] " + sub_class}>Every effort counts. Watching your earnings grow in real time can motivate you to keep up the hard work..</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <img src={asset2} alt="" className={img_class} />
                    <div className="flex flex-col items-center gap-4">
                        <p className={title_class}>Request Instant Pay</p>
                        <p className={sub_class}>There's no better feeling than rewarding yourself after a job well done. You've earned it!</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <img src={asset3} alt="" className={img_class} />
                    <div className="flex flex-col items-center gap-5">
                        <p className={title_class + " lg:max-w-[308px]"}>Seamless Payroll Deduction</p>
                        <p className={sub_class}>No Interest, No Hidden Fees - helping you build a healthier financial future, on your terms</p>
                    </div>
                </div>
            </div>

        </section>
    );

};
export default SectionTwo;