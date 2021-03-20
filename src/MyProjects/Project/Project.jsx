import React from "react"
import style from './Project.module.css';

export function Project(props) {
    return (
        <div className={style.project}>
           <div className={style.imgContainer}>
            <a className={style.button}>Look</a>
           </div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
               <span>{props.description}</span>
            </div>
        </div>
    );
}

