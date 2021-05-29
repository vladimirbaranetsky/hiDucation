import React from "react";
import style from './Contact.module.css';
import Footer from "../../footer/Footer";

const Contact = () => {

    return <React.Fragment>
        <div className={style.contact}>
            <div className={style.contact__header}>
                <div className={style.contact__header_strip}>
                    <div/>
                </div>
                <span className={style.contact__header_title}>Contact</span>
            </div>
            <div className={style.contact__body}>
                    <span className={style.contact__title}>
                        Get In Touch
                    </span>
                <span className={style.contact__subtitle}>
                        We'd love to hear your thoughts and be in touch with us
                    </span>
                <textarea className={style.contact__message}  name="" placeholder="Message"/>
                <div className={style.contact__buttons}>
                    <input required className={style.contact__input_email}  type="email" name="email" placeholder="Email Address"/>
                    <input required className={style.contact__input_name}  type="text" name="name" placeholder="Full Name"/>
                    <button className={style.contact__button_send} type="submit">Send</button>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
}

export default Contact;