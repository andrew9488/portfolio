import style from "./Title.module.scss";
import React from "react";

export function Title(props){
    return(
        <div className={style.headingContainer}>
            <span>{props.span}</span>
            <h2>{props.h2}</h2>
        </div>
    );
}