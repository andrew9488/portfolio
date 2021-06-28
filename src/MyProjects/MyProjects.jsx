import React from "react"
import style from "./MyProjects.module.scss"
import styleContainer from "../common/slyles/Container.module.css"
import {Project} from "./Project/Project";
import {Title} from "../common/components/title/Title";
import socialNetwork from "../assets/image/socialnetwork.png"
import todolist from "../assets/image/todolist.png"
import trainingCards from "../assets/image/trainingCards.svg"

export function MyProjects() {

    const social = {
        backgroundImage: `url(${socialNetwork})`,
    }

    const todo = {
        backgroundImage: `url(${todolist})`,
    }
    const cards = {
        backgroundImage: `url(${trainingCards})`,
    }

    return (
        <div className={style.projectsBlock} id="projects">
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title span="Portfolio" h2="My Projects"/>
                    <div className={style.projects}>
                        <Project path="https://github.com/andrew9488/social-network"
                                 style={social}
                                 title="Social Network"
                                 description="A social network is a website that allows people with similar interests
                    to come together and share information, photos and videos. ...
                     Those who engage on social network sites as a personal endeavor interact by using various forms
                     of media to discuss their lives and interests."/>
                        <Project path="https://github.com/andrew9488/todoList"
                                 style={todo}
                                 title="TodoList"
                                 description="What is a ToDoList? The definition is a simple one.
                    It's a list of tasks you need to complete, or things that you want to do. Most typically,
                     they're organised in order of priority.
                    Traditionally, they're written on a piece of paper or post it notes
                    and acts as a memory aid."/>
                        <Project path="https://github.com/andrew9488/common-project"
                                 style={cards}
                                 title="Training Cards"
                                 description="What is a Training Cards? This app allows you to create packs with cards for
                    learning or repeating something. Also you can learn packs other users. Packs can be of different themes.
                    Cards contain questions and answers. You press button 'learn' and card is showed with question.
                    Read the question and press button 'show answer'. In depending on whether you know the answer or not,
                    you give the appropriate rating to the card.
                    "/>
                    </div>
                </div>
        </div>
    );
}

