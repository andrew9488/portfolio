import React from "react"
import style from "./Contacts.module.scss"
import styleContainer from '../common/slyles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Contact} from "../common/components/contact/Contact";
import {faHome, faMailBulk, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Footer} from "../Footer/Footer";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_KJUlv0SJEPU19ul97aIQx");


export function Contacts() {

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_nc9dref', 'gmail_dbkum3o', event.target, 'user_KJUlv0SJEPU19ul97aIQx')
            .then((result) => {
                alert("Your message has sent")
                console.log(result.text);
            }, (error) => {
                alert("Something wrong")
                console.log(error.text);
            });
        event.target.reset()
    }


    return (
        <>
            <div className={style.contactsContainer} id="contacts">
                <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                    <Title span="Say hello" h2="Contacts"/>
                    <div className={style.setContact}>
                        <div>
                            <h3>Get in Touch</h3>
                            <Contact name="Phone" contact="+375336682961" icon={faPhone}/>
                            <Contact name="Email" contact="pashkevichandrew@gmail.com" icon={faMailBulk}/>
                            <Contact name="Address" contact="Minsk" icon={faHome}/>
                        </div>
                        <form className={style.field} onSubmit={sendEmail}>
                            <div className={style.inputBlock}>
                                <input placeholder="Your Name" name="name"/>
                                <input placeholder="Your Email" name="email"/>
                            </div>
                            <textarea placeholder="Your Message..." name="message"/>
                            <button className={style.submitBtn} type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}