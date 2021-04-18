import React from "react"
import style from "./Contacts.module.scss"
import styleContainer from '../common/slyles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Contact} from "../common/components/contact/Contact";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";


export function Contacts() {
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title span="Say hello" h2="Contacts"/>
                <div className={style.setContact}>
                    <div>
                        <h3>Get in Touch</h3>
                        <Contact name="Phone" contact="+375336682961" icon={faPhone}/>
                        <Contact name="Email" contact="pashkevichandrew@gmail.com" icon={faMailBulk}/>
                        <Contact name="Address" contact="Minsk" icon={faHome}/>
                    </div>
                    <form className={style.field}>
                        <div className={style.inputBlock}>
                            <input placeholder="Your Name"/>
                            <input placeholder="Your Email"/>
                        </div>
                        <textarea placeholder="Your Message..."/>
                        <button className={style.submitBtn} type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}