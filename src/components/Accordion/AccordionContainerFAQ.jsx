import React from "react";
import { FaAngleRight } from "react-icons/fa";

const AccordionContainerFAQ = (props) => {


    const noBullet = {
        listStyleType: "none"
    }

   

    return (
        <div className="flex flex-col gap-4">
            <p className="flex justify-between align-center cursor-pointer font-graphik font-[600] text-[14.27px] lg:text-[27px] leading-[23.25px] lg:leading-[44px] " onClick={() => {props.clickHandler(props.position)}} >
                {props.title} <FaAngleRight  className={`h-[17.44px] lg:h-[33px] w-[12.68px] lg:w-[24px] ${props.position === props.openAccordion ? "rotate-90" : "rotate-0"} transition-all duration-1000 linear`} />
            </p> 
            <p className={`${props.position === props.openAccordion ? "h-full max-h-[500px]" : "h-0 max-h-0"} font-graphik font-[500] text-[11.62px] lg:text-[22px] leading-[17.44px] lg:leading-[33px] overflow-hidden transition-all duration-1000 linear`} >{props.body}</p>
            
        </div>
    );
};

export default AccordionContainerFAQ;