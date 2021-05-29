import React from "react";
import style from "./Registration.module.css";
import {AiOutlineUser} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";

const Registration = () => {
    return <React.Fragment>
        <div className={style.registration}>
            <div className={style.registration__header}>
                <div className={style.registration__header_strip}>
                    <div/>
                </div>
                <span className={style.registration__header_title}>Registration</span>
            </div>
            <div className={style.registration__body}>
                <form>
                    <div className={style.registration__row}>
                        <div className={style.registration__left}>
                            <div className={style.registration__item}>
                                <span className={style.registration__item_title}>First Name</span>
                                <input className={style.registration__item_input} type="text" name="firstName"
                                    placeholder='Enter your first name...' />
                            </div>
                            <div className={style.registration__item}>
                                <span className={style.registration__item_title}>Last Name</span>
                                <input className={style.registration__item_input} type="text" name="lastName"
                                    placeholder='Enter your last name...' />
                            </div>
                            <div className={style.registration__item}>
                                <span className={style.registration__item_title}>Date of Birth</span>
                                <input className={style.registration__item_input_date} type="date" name="dateOfBirth" />
                            </div>
                        </div>

                        <div className={style.registration__right}>
                            <div className={style.registration__item}>
                                <span className={style.registration__item_title}>Email</span>
                                <input className={style.registration__item_input} type="email" name="email"
                                    placeholder="name@email.com" />
                                <AiOutlineUser className={style.registration__item_input_icon} />
                            </div>
                            <div className={style.registration__item}>
                                <span className={style.registration__item_title}>Password</span>
                                <input className={style.registration__item_input} type="password" name="password"
                                    placeholder="Enter your password..." />
                                <RiLockPasswordLine className={style.registration__item_input_icon} />
                                <span className={style.registration__item_subtitle}>Use 8 or more characters with a mix of letters and numbers</span>
                            </div>
                            <br />
                            <div className={style.registration__item}>
                                <span className={style.registration__item_title}>Confirm your password</span>
                                <input className={style.registration__item_input} type="password"
                                    name="confirmPassword" />
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