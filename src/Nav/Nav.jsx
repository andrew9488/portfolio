import React from "react"
import style from "./Nav.module.scss";
import {Link, animateScroll as scroll} from "react-scroll";

export function Nav() {
    return (
        <div className={style.nav}>
            <Link to="main" spy={true} smooth={true} offset={-66} duration={700}
                  activeClass={style.activeLink}>Main</Link>
            <Link to="skills" spy={true} smooth={true} offset={-66} duration={700}
                  activeClass={style.activeLink}>Skills</Link>
            <Link to="projects" spy={true} smooth={true} offset={-66} duration={700}
                  activeClass={style.activeLink}>Projects</Link>
            <Link to="contacts" spy={true} smooth={true} offset={-64} duration={700}
                  activeClass={style.activeLink}>Contacts</Link>
        </div>
    );
}
