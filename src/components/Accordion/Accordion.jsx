import React, { useEffect, useState } from "react";
import AccordionContainer from "./AccordionContainer";

const Accordion = (props) => {
    // const DUMMY_DATA = [
    //     {'key': 1, 'title' : 'Home', 'body' : 'I am body'},
    //     {'key': 2, 'title' : 'Home', 'body' : 'I am body'},
    //     {'key': 3, 'title' : 'Home', 'body' : 'I am body'},

    // ];
    const [openAccordion, setOpenAccordion]= useState(1);

    const clickHandler = (val) => {
        // setOpenAccordion((prevAcc) => {
        //     return (prevAcc === val ? null : val);
        // });

        setOpenAccordion(val);

       props.onClick && props.onClick(val);
    };


    return (
        <>
            {props.accordionData.map((data) => <AccordionContainer key = {data.key} position = {data.key} 
            imgFlag = {props.img} img = {props.img && data.img} title = {data.title} dataBody = {data.body} 
            bodyStyle = {props.bodyStyle} openAccordion = {openAccordion} setOpenAccordion = {setOpenAccordion} 
            titleStyle = {props.titleStyle} plusMinus = {props.plusMinus} black = {props.black} ulStyle = {props.ulStyle} clickHandler = {clickHandler} />)}
            
        </>

    );
}

export default Accordion;