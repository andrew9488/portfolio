import React from "react"
import style from "./Main.module.scss";
import styleContainer from "../common/slyles/Container.module.css";
import myPhoto from "../assets/image/myPhoto.png"


export function Main() {

    const photo = {
        backgroundImage: `url(${myPhoto})`,
    }

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.greetingText}>
                    <span>Hello, My name is</span>
                    <h1>Andrew Pashkevich</h1>
                    <p>I am a Frontend Developer</p>
                </div>
                <div className={style.photo} style={photo}></div>
            </div>
        </div>
    );
}

