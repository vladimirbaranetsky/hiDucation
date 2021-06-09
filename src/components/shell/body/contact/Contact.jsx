import React, {useEffect, useState} from "react";
import style from './Contact.module.css';
import Footer from "../../footer/Footer";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../../actions/action-message";

const Contact = () => {
    const dispatch = useDispatch();
    const [isInvalid, setIsInvalid] = useState(true);
    const [data, setData] = useState({
        message: "",
        email: "",
        fullName: ""
    })

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        switch (name){
            case "message":
                return setData({...data, message: event.target.value});
            case "email":
                return setData({...data, email: event.target.value});
            case "fullName":
                return setData({...data, fullName: event.target.value});
            default:
                break;
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        dispatch(sendMessage(data))
            .then(() => {
                form.reset()
            });
        setData({...data, message: "", email: "", fullName: ""});

    }

    useEffect(() => {
        const isValidate = () =>{
            return !(data.message !== "" && data.email !== "" && data.fullName !== "");
        };
        setIsInvalid(isValidate());
    },[data]);

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
                <form onSubmit={onSubmit} noValidate>
                    <textarea required className={style.contact__message} onChange={handleChange}  name="message" placeholder="Message"/>
                    <div className={style.contact__data}>
                        <div className={style.contact__data_input}>
                            <input required className={style.input__email} onChange={handleChange} type="email" name="email" placeholder="Email Address" />
                            <input required className={style.input__name} onChange={handleChange} type="text" name="fullName" placeholder="Full Name" />
                        </div>
                        <button disabled={isInvalid} className={style.contact__data_button} type="submit">Send</button>
                    </div>
                </form>
                <Footer />
            </div>
        </div>
    </React.Fragment>
}

export default Contact;