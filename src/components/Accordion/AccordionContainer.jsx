import React from "react";
import { useState } from "react";
import classes from "./Accordion.module.css";

const AccordionContainer = (props) => {


    const noBullet = {
        listStyleType: "none"
    }

    const accType = (props.plusMinus) ? ((props.openAccordion === props.position) ? (props.black) ? classes['black_minus'] : classes['minus'] : 
                                                            (props.black) ? classes['black_plus'] : classes['plus']) : 
                                        ((props.openAccordion === props.position) ? classes['down'] : "");

    const pClass = (props.openAccordion === props.position) ? classes['accordion__title'] + " " + accType : classes['accordion__title'] + " " + accType;

    const ulClass = (props.openAccordion === props.position) ? classes['accordion__ul'] + " " + classes['display-block'] : classes['accordion__ul'];

    return (
        <div className={classes['accordion__container']}>
            <p className={pClass} onClick={() => {props.clickHandler(props.position)}} style={props.titleStyle}>{props.title}</p> 
            <ul className={ulClass} style={props.ulStyle}>
                <li className={classes['accordion__li']} style={props.bodyStyle}>
                    {typeof(props.dataBody) !== "object" && <p>{props.dataBody}</p>}
                    {typeof(props.dataBody) === "object" && <ul style={noBullet}> {props.dataBody.map((data) => <li>{data}</li>)}</ul>}
                    {props.imgFlag &&  <div className={classes['img_container']}>
                        <img src= {"/images/" + props.img} alt="" className={classes['img']} />
                    </div>}
                </li>
            </ul>
            
        </div>
    );
};

export default AccordionContainer;