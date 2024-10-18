import React, { useEffect, useState } from "react";
import AccordionContainerFAQ from "./AccordionContainerFAQ";

const AccordionFAQ = (props) => {
    // const DUMMY_DATA = [
    //     {'key': 1, 'title' : 'Home', 'body' : 'I am body'},
    //     {'key': 2, 'title' : 'Home', 'body' : 'I am body'},
    //     {'key': 3, 'title' : 'Home', 'body' : 'I am body'},

    // ];
    const [openAccordion, setOpenAccordion]= useState(0);

    const clickHandler = (val) => {
        // setOpenAccordion((prevAcc) => {
        //     return (prevAcc === val ? null : val);
        // });

        setOpenAccordion(val);

   
    };


    return (
        <>
            {props.accordionData.map((data, idx) => <AccordionContainerFAQ key = {idx} position = {idx} title = {data.title} body = {data.body} 
            openAccordion = {openAccordion} clickHandler = {clickHandler} />)}
            
        </>

    );
}

export default AccordionFAQ;