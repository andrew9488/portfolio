import React from "react"
import style from './Project.module.scss';
import {NavLink} from "react-router-dom";

export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
            </div>
            <h3 className={style.projectTitle}><NavLink to={props.path} target='_blank'>{props.title}</NavLink></h3>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

