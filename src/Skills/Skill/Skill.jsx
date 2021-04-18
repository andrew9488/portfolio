import React from "react"
import style from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icons}>
                <FontAwesomeIcon className={style.icon} icon={props.icon}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

