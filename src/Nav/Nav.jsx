import React from "react"
import style from "./Nav.module.scss";
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to="/main" activeClassName={style.activeLink}>Main</NavLink>
            <NavLink to="/skills" activeClassName={style.activeLink}>Skills</NavLink>
            <NavLink to="/myProjects" activeClassName={style.activeLink}>Projects</NavLink>
            <NavLink to="/contacts" activeClassName={style.activeLink}>Contacts</NavLink>
        </div>
    );
}
