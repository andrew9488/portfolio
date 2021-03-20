import React from "react"
import style from './Footer.module.css';
import styleContainer from '../common/slyles/Container.module.css'

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Andrew Pashkevich</h3>
                <div className={style.contacts}>
                    <span>Facebook</span>
                    <span>Linkedin</span>
                    <span>GitHub</span>
                </div>
                <div>
                    <span>© 2019 beingeorge, All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

