import React from "react"
import style from "./Contacts.module.css"
import styleContainer from '../common/slyles/Container.module.css'

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3>Contacts</h3>
                <form className={style.field}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}