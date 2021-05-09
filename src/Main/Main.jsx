import React from "react"
import style from "./Main.module.scss";
import styleContainer from "../common/slyles/Container.module.css";
import myPhoto from "../assets/image/myPhoto.png"
import ReactTypingEffect from "react-typing-effect";

export function Main() {

    const photo = {
        backgroundImage: `url(${myPhoto})`,
    }

    return (
        <div className={style.mainBlock} id="main">
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.greetingText}>
                    <p>Hello, My name is</p>
                    <h1>Andrew Pashkevich</h1>
                    <ReactTypingEffect text="I'm a Frontend Developer"/>
                </div>

                <div className={style.photo} style={photo}>
                    <div/>
                </div>

            </div>
        </div>
    );
}

