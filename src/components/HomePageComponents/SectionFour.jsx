import { useEffect, useRef, useState } from "react";
import leftphone from "../../assets/leftphone.svg";
import rightphone from "../../assets/rightphone.svg";

const SectionFour = () => {
  const [isVisible, setIsVisible] = useState(false); // To track if the section is visible
  const imageRef = useRef(null); // Reference to the image

  // Scroll event listener to detect when the section enters the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const sectionPosition = imageRef.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      // If the section is within the viewport, trigger the animation
      if (sectionPosition < screenHeight - 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to check visibility in case it's already in view

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  // ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`

  return (
    <section className="max-w-[23.1875em] w-full lg:max-w-[90em] flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly lg:h-[85vh] gap-8 lg:gap-[8rem] xl:gap-0">
      <div className="flex justify-center ">
        <img
          ref={imageRef}
          src={leftphone}
          alt="phones"
          className={`lg:scale-80 xl:scale-100 transform transition-all duration-1000 ease-out w-full h-full max-w-[24.659em] lg:max-w-[21.148em] max-h-[29.6125em] rotating-leftphone
                  lg:max-h-[41.426em] object-contain `}
        />
        <img
          ref={imageRef}
          src={rightphone}
          alt="phones"
          className={`lg:scale-80 xl:scale-100 transform transition-all duration-1000 ease-out w-full h-full max-w-[24.659em] lg:max-w-[21.148em] max-h-[29.6125em] rotating-rightphone 
                  lg:max-h-[41.426em] object-contain -ml-[11em]`}
        />
      </div>
      <div className="flex flex-col gap-3  justify-center items-center lg:items-start lg:gap-0 ">
        <p
          className="max-w-[10.9825em] w-full lg:max-w-[6em] text-[#161616] text-[1.875em] 
                lg:text-[3.875em] font-osande font-[600] lg:font-[600] leading-[34.51px] lg:leading-[71.32px]">
          <span className="text-[#488559] font-[600] lg:font-[700] font-osande">Endless Possibilities,</span> Unlock What's Yours.
        </p>

        <p
          className="max-w-[21.0125em] w-full h-[4.875em] lg:max-w-[19em] lg:h-[8.75em] text-[#161616] text-[1em] font-graphik
                lg:text-[1.5em] font-graphik font-[400] lg:font-[400] leading-[24px] lg:leading-[35px] text-left lg:text-left">
          No cost to employers or employees. Instantly access earnings and, in addition, enjoy health and financial wellness benefits.
        </p>
      </div>
    </section>
  );
};

export default SectionFour;
