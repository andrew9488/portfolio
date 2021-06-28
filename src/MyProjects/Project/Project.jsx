import React from "react"
import style from './Project.module.scss';

export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
            </div>
            <h3 className={style.projectTitle}><a href={props.path} rel="noreferrer" target='_blank' >{props.title}</a></h3>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

