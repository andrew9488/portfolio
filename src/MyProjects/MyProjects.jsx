import React from "react"
import style from "./MyProjects.module.css"
import styleContainer from "../common/slyles/Container.module.css"
import {Project} from "./Project/Project";


export function MyProjects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title="Social Network"
                             description="A social network is a website that allows people with similar interests
                    to come together and share information, photos and videos. ...
                     Those who engage on social network sites as a personal endeavor interact by using various forms
                     of media to discuss their lives and interests."/>
                    <Project title="TodoList"
                             description="What is a ToDo List? The definition is a simple one.
                    It's a list of tasks you need to complete, or things that you want to do. Most typically,
                     they're organised in order of priority.
                    Traditionally, they're written on a piece of paper or post it notes
                    and acts as a memory aid."/>
                </div>
            </div>
        </div>
    );
}

