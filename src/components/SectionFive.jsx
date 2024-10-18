import { useEffect, useState } from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";


const SectionFive = () => {
  const imgs = [
                {imgsrc: icon1, className: "h-[25.7px] lg:h-[56.61px] w-[65.57px] lg:w-[144.38px]"}, 
                {imgsrc: icon2, className: "h-[54.49px] lg:h-[120px] w-[45.41px] lg:w-[100px]"}, 
                {imgsrc: icon3, className: "h-[27.06px] lg:h-[59.6px] w-[72.2px] lg:w-[158.99px]"}, 
                {imgsrc: icon4, className: "h-[24.96px] lg:h-[54.96px] w-[101.81px] lg:w-[224.21px]"}, 
                {imgsrc: icon5, className: "h-[48.06px] lg:h-[105.83px] w-[61.84px] lg:w-[136.18px]"}
            ];
 

  return (
    <section className="flex justify-end w-full mt-20">
      <div className="flex flex-col lg:flex-row max-w-[371px] w-full lg:max-w-[1525px] h-[84.49px] lg:h-[120px] justify-center items-center gap-1 lg:gap-0">
        <div className="flex lg:min-w-[302px]">
          <p className="font-graphik font-500 text-[16px] lg:text-[19.69px] leading-[17.6px] lg:leading-[21.66px] text-center">
            WE ARE TRUSTED BY
          </p>
        </div>
        <div className="flex w-full">
        <Marquee gradient={false} speed={50} className=" w-full h-[100px] lg:h-[120px]">

            {imgs.map((imgItem, idx) => (
                

                     <img
                       src={imgItem.imgsrc}
                       alt=""
                       key={idx}
                       className={`object-contain ${idx < imgs.length - 1 ? "mr-10 lg:mr-24" : "mr-8 lg:mr-0"} ${imgItem.className}`}
                     />
             
            ))}

        </Marquee>
          
          
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
