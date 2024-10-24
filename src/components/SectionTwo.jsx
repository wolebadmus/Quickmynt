import asset1 from "../assets/track.svg";
import asset2 from "../assets/request.svg";
import asset3 from "../assets/seamless.svg";

const SectionTwo = () => {

    const img_class = "w-[11.856em] h-[15.098em] lg:w-[12.188em] lg:h-[15.625em]";
    const title_class = "text-base max-w-[20.9375em] lg:max-w-[5.375em] font-[500] lg:font-[600] text-[1.975em] lg:text-[2.5em]  text-[#434343] leading-[34.51px] lg:leading-[46.02px] text-center font-osande";
    const sub_class = "text-base max-w-[21.9375em] lg:max-w-[18.875em] font-[500] text-[1em] lg:text-[1.125em] text-[#9D9D9D] leading-[24px] lg:leading-[28px] text-center font-graphik";

    return (
        <section className="max-w-[23.1875em] w-full lg:max-w-[90em] py-16 flex flex-col justify-center items-center gap-16 ">

            <p className="max-w-[9.3125em] lg:max-w-[9.2em] text-center font-osande font-[700] text-[#161616] lg:font-[600] text-[2.0738em] 
            lg:text-[3.375em] leading-[38.17px] lg:leading-[61.32px]">
                Unlocking Earnings in <span className="text-[#488559]">3 Simple Steps</span>
            </p>

            <div className="flex flex-col lg:flex-row justify-evenly w-full gap-16">
                <div className="flex flex-col items-center gap-5">
                    <img src={asset1} alt="" className={img_class} />
                    <div className="flex flex-col items-center gap-4">
                        <p className={ title_class + " max-w-[6.9375em] lg:max-w-[6.9em] "}>Track Earnings in Real-Time</p>
                        <p className={sub_class}>Every effort counts. Watching your earnings grow in real time can motivate you to keep up the hard work..</p>
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
                        <p className={title_class + " lg:max-w-[11.55em]"}>Seamless Payroll Deduction</p>
                        <p className={sub_class}>No Interest, No Hidden Fees - helping you build a healthier financial future, on your terms</p>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default SectionTwo;
