import { useState } from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import Marquee from "react-fast-marquee";

const SectionFive = () => {
  const imgs = [
    { imgsrc: icon1, className: "h-[1.61em] lg:h-[3.54em] w-[4.1em] lg:w-[9.02em]" }, 
    { imgsrc: icon2, className: "h-[3.41em] lg:h-[7.5em] w-[2.84em] lg:w-[6.25em]" }, 
    { imgsrc: icon3, className: "h-[1.69em] lg:h-[3.73em] w-[4.51em] lg:w-[9.94em]" }, 
    { imgsrc: icon4, className: "h-[1.56em] lg:h-[3.44em] w-[6.36em] lg:w-[14.01em]" }, 
    { imgsrc: icon5, className: "h-[3em] lg:h-[6.61em] w-[3.86em] lg:w-[8.51em]" }
  ];

  return (
    <section className="flex justify-end w-full mt-20">
      <div className="flex flex-col lg:flex-row max-w-[23.19em] w-full lg:max-w-[95.31em] h-[5.28em] lg:h-[7.5em] justify-center items-center gap-1 lg:gap-0">
        <div className="flex lg:min-w-[18.88em]">
          <p className="font-graphik font-500 text-[1em] lg:text-[1.23em] leading-[17.6px] lg:leading-[21.66px] text-center">
            WE ARE TRUSTED BY
          </p>
        </div>
        <div className="flex w-full">
          <Marquee gradient={false} speed={50} className="w-full h-[6.25em] lg:h-[7.5em]">
            {imgs.map((imgItem, idx) => (
              <img
                src={imgItem.imgsrc}
                alt=""
                key={idx}
                className={`object-contain ${idx < imgs.length - 1 ? "mr-[1.63em] lg:mr-[5.5em]" : "mr-[0.5em] lg:mr-0"} ${imgItem.className}`}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
