import React, {useState} from "react"
import style from "./Contacts.module.scss"
import styleContainer from '../common/slyles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Contact} from "../common/components/contact/Contact";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Footer} from "../Footer/Footer";
import axios from "axios";


export function Contacts() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const onSubmitHandler = (event) => {
        console.log(event)
        event.preventDefault()
        axios.post(`https://gmail-nodejs.herokuapp.com/sendMessage`, {name, email, message})
            .then(() => {
                    setName("")
                    setEmail("")
                    setMessage("")
                    alert("Your message was sent")
                }
            ).catch(() => {
            alert("Something wrong")
        })
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
                        <form className={style.field} onSubmit={onSubmitHandler}>
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