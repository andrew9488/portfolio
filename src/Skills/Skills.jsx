import React from "react"
import style from './Skills.module.css';
import styleContainer from '../common/slyles/Container.module.css'
import {Skill} from "./Skill/Skill";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="HTML&CSS"
                    description="HTML stands for Hypertext Markup Language. It allows the user to create and structure sections,
                     paragraphs, headings, links,and blockquotes for web pages and applications."/>
                    <Skill title="JS"
                    description="JavaScript often abbreviated as JS,
                     is a programming language that conforms to the ECMAScript specification."/>
                    <Skill title="React JS"
                    description="React is an open-source, front end, JavaScript library
                     for building user interfaces or UI components."
                    />
                </div>
            </div>
        </div>
    );
}

