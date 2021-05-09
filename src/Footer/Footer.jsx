import React from "react"
import style from "./Footer.module.scss";
import styleContainer from "../common/slyles/Container.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.contacts}>
                    <NavLink to="/telegram" target='_blank'><FontAwesomeIcon className={style.icon} icon={faTelegram}/></NavLink>
                    <NavLink to="/linkedId" target='_blank'><FontAwesomeIcon className={style.icon} icon={faLinkedin}/></NavLink>
                    <NavLink to="/github" target='_blank'><FontAwesomeIcon className={style.icon} icon={faGithub}/></NavLink>
                </div>
                <div>
                    <span>© Andrew 2021 | All Right Reserved</span>
                </div>
            </div>
        </div>
    );
}

