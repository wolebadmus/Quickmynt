import React from "react";
import { FaAngleRight } from "react-icons/fa";

const AccordionContainerFAQ = (props) => {
  const noBullet = {
    listStyleType: "none",
  };

  return (
    <div className="flex flex-col gap-[0.2rem]">
      <p
        className="mt-[0rem] flex justify-between items-start cursor-pointer font-graphik font-[600] text-[0.892em] lg:text-[1.688em] leading-[23.25px] lg:leading-[44px] "
        onClick={() => {
          props.clickHandler(props.position);
        }}>
        {props.title} <FaAngleRight className={`h-[1.09em] lg:h-[1.5em] w-[0.793em] lg:w-[1.575em] ${props.position === props.openAccordion ? "rotate-90" : "rotate-0"} transition-all duration-1000 linear`} />
      </p>
      <p className={`${props.position === props.openAccordion ? "h-full max-h-[31.25em]" : "h-0 max-h-0"} font-graphik font-[500] text-[0.726em] lg:text-[1.375em] leading-[17.44px] lg:leading-[33px] overflow-hidden transition-all duration-1000 linear`}>{props.body}</p>
    </div>
  );
};

export default AccordionContainerFAQ;
