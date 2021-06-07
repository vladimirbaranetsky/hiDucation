import React, {useState} from "react";
import style from "./Registration.module.css";
import {AiOutlineUser} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import axios from "axios";

const Registration = () => {
    const[data, setData] = useState({
        firstName: "",
        lastName: "",
        date: "",
        email: "",
        password: "",
        password_confirm: ""
    });

    const handlerSubmit = (event) => {
        event.preventDefault();
        axios.post('https://virtserver.swaggerhub.com/GregorySheygam/himath-gaming/0.0.1/user/registration', {data})
            .then(response => {console.log(response)})
            .catch(error => {console.log(error)})
    }


    function handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        switch (name){
            case "firstName":
                setData({...data, firstName: event.target.value});
                break;
            case "lastName":
                setData({...data, lastName: event.target.value});
                break;
            case "date":
                setData({...data, date: event.target.value});
                break;
            case "email":
                setData({...data, email: event.target.value});
                break;
            case "password":
                setData({...data, password: event.target.value});
                break;
            case "password_confirm":
                setData({...data, password_confirm: event.target.value});
                break;
            default:
                break;
        }
    }

    return <React.Fragment>
        <div className={style.registration}>
            <div className={style.registration__header}>
                <div className={style.registration__header_strip}>
                    <div/>
                </div>
                <span className={style.registration__header_title}>Registration</span>
            </div>
            <div className={style.registration__body}>
                <form onSubmit={handlerSubmit} noValidate>
                    <div className={style.registration__row}>
                        <div className={style.registration__left}>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>First Name</label>
                                <input required className={style.registration__item_input} type="text" name="firstName"
                                    placeholder='Enter your first name...'
                                        onChange={handleChange}
                                />
                            </div>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Last Name</label>
                                <input required className={style.registration__item_input} type="text" name="lastName"
                                    placeholder='Enter your last name...'
                                       onChange={handleChange}
                                />
                            </div>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Date of Birth</label>
                                <input required className={style.registration__item_input_date} type="date" name="date"
                                       onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={style.registration__right}>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Email</label>
                                <input required className={style.registration__item_input} type="email" name="email"
                                    placeholder="name@email.com"
                                       onChange={handleChange}
                                />
                                <AiOutlineUser className={style.registration__item_input_icon} />
                            </div>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Password</label>
                                <input required className={style.registration__item_input} type="password" name="password"
                                    placeholder="Enter your password..."
                                       onChange={handleChange}
                                />
                                <RiLockPasswordLine className={style.registration__item_input_icon} />
                                <span className={style.registration__item_subtitle}>Use 8 or more characters with a mix of letters and numbers</span>
                            </div>
                            <br />
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Confirm your password</label>
                                <input required className={style.registration__item_input} type="password"
                                    name="password_confirm"
                                       onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.registration__row}>
                        <button className={style.registration__item_button} type="submit" value="signUp">Sign up
                    </button>
                    </div>
                </form>
            </div>
        </div>


    </React.Fragment>
}

export default Registration;