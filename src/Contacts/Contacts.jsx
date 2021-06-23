import React, {useState} from "react"
import style from "./Contacts.module.scss"
import styleContainer from '../common/slyles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Contact} from "../common/components/contact/Contact";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Footer} from "../Footer/Footer";
import emailjs from 'emailjs-com';


export function Contacts() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('gmail', 'gmail', event.target, 'user_KJUlv0SJEPU19ul97aIQx')
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
                                <input placeholder="Your Name" value={name}
                                       onChange={e => setName(e.currentTarget.value)}/>
                                <input placeholder="Your Email" value={email}
                                       onChange={e => setEmail(e.currentTarget.value)}/>
                            </div>
                            <textarea placeholder="Your Message..." value={message}
                                      onChange={e => setMessage(e.currentTarget.value)}/>
                            <button className={style.submitBtn} type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}