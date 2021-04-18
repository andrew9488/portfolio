import style from "./Contact.module.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function Contact(props) {
    return (
        <div className={style.contactContainer}>
            <div className={style.contactBlock}>
                <div className={style.icon}>
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
                <div className={style.contact}>
                    <span>{props.name}</span>
                    <span>{props.contact}</span>
                </div>
            </div>
        </div>
    )
}