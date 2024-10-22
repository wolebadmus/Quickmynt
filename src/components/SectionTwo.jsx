import asset1 from "../assets/track.svg";
import asset2 from "../assets/request.svg";
import asset3 from "../assets/seamless.svg";

const SectionTwo = () => {

    const img_class = "w-[11.855em] h-[15.0987em] lg:w-[19.875em] lg:h-[25.3125em]";
    const title_class = "max-w-[20.9375em] lg:max-w-[17.375em]  font-[600] text-[1.875em] lg:text-[2.5em]  text-[#434343] leading-[34.51px] lg:leading-[46.02px] text-center font-osande";
    const sub_class = "max-w-[21.9375em] lg:max-w-[16.125em] font-[400] text-[1em] lg:text-[1.125em] text-[#9D9D9D] leading-[24px] lg:leading-[28px] text-center font-graphik";

    return (
        <section className="max-w-[23.1875em] w-full lg:max-w-[71.25em] py-16 flex flex-col justify-center items-center gap-16 ">

            <p className="max-w-[9.3125em] lg:max-w-[8.5em] text-center font-osande font-[700] text-[#161616] lg:font-[600] text-[2.0738em] lg:text-[3.875em] leading-[38.17px] lg:leading-[71.32px]">
                Unlocking Earnings in <span className="text-[#488559]">3 Simple Steps</span>
            </p>

            <div className="flex flex-col lg:flex-row justify-evenly w-full gap-16">
                <div className="flex flex-col items-center gap-5">
                    <img src={asset1} alt="" className={img_class} />
                    <div className="flex flex-col items-center gap-4">
                        <p className={"max-w-[6.9375em] lg:max-w-[17.375em] " + title_class}>Track Earnings in Real-Time</p>
                        <p className={"max-w-[19.0625em] " + sub_class}>Every effort counts. Watching your earnings grow in real time can motivate you to keep up the hard work..</p>
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
                        <p className={title_class + " lg:max-w-[19.25em]"}>Seamless Payroll Deduction</p>
                        <p className={sub_class}>No Interest, No Hidden Fees - helping you build a healthier financial future, on your terms</p>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default SectionTwo;
