import React from "react"
import style from './Skills.module.scss';
import styleContainer from '../common/slyles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import {faConnectdevelop, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faBook, faKeyboard, faLanguage, faStore,faPaintBrush} from '@fortawesome/free-solid-svg-icons'

export function Skills() {
    return (
        <div className={style.skillsBlock} id="skills">
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title span="Experience" h2="My Skills"/>
                    <div className={style.skills}>
                        <Skill icon={faHtml5}
                               title="HTML&CSS"
                               description="HTML stands for Hypertext Markup Language. It allows the user to create and
                           structure sections,paragraphs, headings, links,and blockquotes for web pages and applications.
                            CSS is the language we use to style an HTML document.CSS describes how elements should be
                            rendered on screen, on paper, in speech, or on other media."/>
                        <Skill icon={faJs}
                               title="JavaScript"
                               description="JavaScript often abbreviated as JS,
                     is a programming language that enables you to create dynamically updating content,
                      control multimedia, animate images, and pretty much everything else."/>
                        <Skill icon={faReact}
                               title="React JS"
                               description="React is an open-source, front end, JavaScript library
                     for building user interfaces or UI components. React can be used as a base in the development of
                      single-page or mobile applications"
                        />
                        <Skill icon={faStore}
                               title="Redux"
                               description="Redux is a pattern and library for managing and updating application state,
                           using events called 'actions'. It serves as a centralized store for state that needs to be
                           used across your entire application, with rules ensuring that the state can only be updated
                           in a predictable fashion."
                        />
                        <Skill icon={faLanguage}
                               title="TypeScript"
                               description="TypeScript is an open-source language which builds on JavaScript,
                           one of the world’s most used tools, by adding static type definitions.
                           Types provide a way to describe the shape of an object,
                           providing better documentation, and allowing TypeScript to validate that your code is working correctly."
                        />
                        <Skill icon={faConnectdevelop}
                               title="Axios"
                               description="Axios is a promise based HTTP client for the browser and Node. js.
                           Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
                           It can be used in plain JavaScript or with a library such as Vue or React"
                        />
                        <Skill icon={faKeyboard}
                               title="Unit Tests"
                               description="Unit testing is a level of software testing where individual units/components of a software are tested.
                           In the React world this means testing an individual React Component or pure functions."
                        />
                        <Skill icon={faBook}
                               title="Storybook"
                               description="Storybook is a tool for UI development. It makes development faster and easier by isolating components."
                        />
                        <Skill icon={faPaintBrush}
                               title="Material UI"
                               description="Material-UI is an open-source project that features React components that implement Google’s Material Design."
                        />
                    </div>
                </div>
        </div>
    );
}

