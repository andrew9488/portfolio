import React from "react"
import style from './Main.module.css';
import styleContainer from '../common/slyles/Container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greetingText}>
                    <span>Hello There</span>
                    <h1>I am Andrew Pashkevich</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

