import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";




const SectionSix = () => {

    const [startCount, setStartCount] = useState(false); // Track when to start the count
    const sectionRef = useRef(null); // Reference to the section
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setStartCount(true); // Start counting when the section is visible
            observer.unobserve(sectionRef.current); // Stop observing once triggered
          }
        },
        {
          threshold: 0.5, // Trigger when 50% of the section is visible
        }
      );
  
      observer.observe(sectionRef.current); // Observe the section
  
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current); // Cleanup observer
      };
    }, []);

    return (
        <section className="stats flex flex-col w-full !bg-right lg:!bg-top relative justify-center items-center gap-6  mt-20 lg:h-[112.063em]">
            <div className="absolute w-full h-full bg-custom-gradient mix-blend-multiply "></div>
            <div className="lg:ml-[7rem] flex flex-col justify-center gap-6 lg:gap-10 lg:w-full lg:max-w-[90em] text-white py-40">
                <div className="z-40 flex flex-col justify-evenly gap-4 lg:gap-8 w-full">
                    <p className="max-w-[12.35em] lg:max-w-[9.188em] font-osande font-[700] lg:font-[600] text-[1.875em] lg:text-[3.75em] leading-[40px] lg:leading-[65px] text-center lg:text-left ">
                        It's Clear: A Platform Such as QuickMynt is What Employees Want
                    </p>
                    <p className="max-w-[20.25em] lg:max-w-[28.188em] font-graphik font-[400] lg:font-[500] text-[1.125em] lg:text-[1.5em] leading-[26px] lg:leading-[35px] text-center lg:text-left">
                        Studies show that providing Earned Wage Access (EWA) leads to higher employee satisfaction, increased loyalty, and a stronger workforce
                    </p>
                </div>

                <div ref={sectionRef} className="z-40 w-full max-w-[15.989em] lg:max-w-[16.938em] flex flex-col justify-center mx-auto lg:mx-0 items-center">
                    <div className="border-t border-[#F0F0F0] py-7">
                        <p className="font-osande font-[800] text-[6em] lg:text-[7.5em] leading-[110.44px] lg:leading-[138.05px] text-center lg:text-left">
                            {startCount ? (
                                                <CountUp
                                                    start={0}
                                                    end={80}
                                                    duration={3} // 3 seconds for the count-up animation
                                                    delay={0}
                                                />
                                    ) : 0}<sup className="text-[.5em] lg:text-[.404em] font-[600] leading-[44px] lg:leading-[58.98px] align-super">%</sup></p>
                        <p className="font-graphik font-[500] lg:font-[400] text-[1.125em] lg:text-[1.5em] leading-[26px] lg:leading-[35px] text-center lg:text-left">
                            Wages deposited automatically as they earn them
                        </p>
                    </div>
                    <div className="border-t border-[#F0F0F0] py-7">
                        <p className="font-osande font-[800] text-[6em] lg:text-[7.5em] leading-[110.44px] lg:leading-[138.05px] text-center lg:text-left">
                        {startCount ? (
                                        <CountUp
                                            start={0}
                                            end={78}
                                            duration={3} // 3 seconds for the count-up animation
                                            delay={0}
                                        />
                                    ) : 0}<sup className="text-[.5em] lg:text-[.404em] font-[600] leading-[44px] lg:leading-[58.98px] align-super">%</sup></p>
                        <p className="font-graphik font-[500] lg:font-[400] text-[1.125em] lg:text-[1.5em] leading-[26px] lg:leading-[35px] text-center lg:text-left">
                            Would be more loyal to employers offering a platform such as QuickMynt.
                        </p>
                    </div>
                    <div className="border-t border-[#F0F0F0] py-7">
                        <p className="font-osande font-[800] text-[6em] lg:text-[7.5em] leading-[110.44px] lg:leading-[138.05px] text-center lg:text-left">
                        {startCount ? (
                                        <CountUp
                                            start={0}
                                            end={81}
                                            duration={3} // 3 seconds for the count-up animation
                                            delay={0}
                                        />
                                    ) : 0}<sup className="ml-[.1em] text-[.5em] lg:text-[.404em] font-[600] leading-[44px] lg:leading-[58.98px] align-super">%</sup></p>
                        <p className="font-graphik font-[500] lg:font-[400] text-[1.125em] lg:text-[1.5em] leading-[26px] lg:leading-[35px] text-center lg:text-left">
                            Would choose a job with a platform such as QuickMynt over one without.
                        </p>
                    </div>

                </div>
                
            </div>

        </section>
    );

};
export default SectionSix;