import React, {useEffect, useState} from "react";
import style from "./Registration.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import {useDispatch} from "react-redux";
import {registration} from "../../../../actions/action-auth";
import {useHistory} from "react-router-dom";
import {PATH_LOGIN} from "../../../../config/config-routes";
import {DIGITS_NAME, DIGITS_PASSWORD, VALIDATE} from "../../../../config/config-credentials";

const Registration = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isInvalid, setIsInvalid] = useState(true);
    const[data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    });

    const[errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    });

    const validateEmail = (email) => {
        return  VALIDATE.test(String(email).toLowerCase());
    };

    const handleChangeUsername = (event) => {
        event.preventDefault();
        const name = event.target.value;
        let textError = '';

        if(name.length < DIGITS_NAME){
            textError = `Name should be minimum ${DIGITS_NAME} characters required`;
        }else{
            setData({...data, username: name});
        }
        setErrors({...errors, username: textError});
    };

    const handleChangeEmail = (event) => {
        event.preventDefault();
        const email = event.target.value;
        let textError = '';

        if(!validateEmail(email)){
            textError = 'Invalid email address'
        }else{
            setData({...data, email: email});
        }
        setErrors({...errors, email: textError});
    };

    const handleChangePassword = (event) => {
        event.preventDefault();
        const password = event.target.value;
        let textError = '';

        if(password.length < DIGITS_PASSWORD){
            textError = `Use ${DIGITS_PASSWORD} or more characters with a mix of letters and numbers`;
        }else{
            setData({...data, password: password});
        }
        setErrors({...errors, password: textError});
    };

    const handleChangeConfirm = (event) => {
        event.preventDefault();
        const confirm = event.target.value;
        let textError = '';

        if(data.password !== confirm){
            textError = `Password is invalid`;
        }else{
            setData({...data, confirm: confirm});
        }
        setErrors({...errors, confirm: textError});
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(registration(data.username, data.email, data.password))
            .then(() => {
                history.push(PATH_LOGIN);
                setData({...data, username: "", email: "", password: "", confirm: ""});
            });
    }

    useEffect(() => {
        const isValidate = () =>{
            return !(data.email !== "" && data.password !== "" && data.username !== "" && data.confirm !== ""
                && errors.email === "" && errors.password === "" && errors.username === "" && errors.confirm === "");
        };
        setIsInvalid(isValidate());
    },[errors, data]);

    return <React.Fragment>
        <div className={style.registration}>
            <div className={style.registration__header}>
                <div className={style.registration__header_strip}>
                    <div />
                </div>
                <span className={style.registration__header_title}>Registration</span>
            </div>
            <div className={style.registration__body}>
                <form onSubmit={handlerSubmit} noValidate>
                    <div className={style.registration__row}>
                        <div className={style.registration__col}>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Username</label>
                                <input required className={style.registration__item_input} type="text" name="username"
                                    placeholder='Enter your username...'
                                    onChange={handleChangeUsername}
                                />
                                {errors.username.length > 0 && <span className={style.input__error_message}>{errors.username}</span>}
                            </div>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Email</label>
                                <input required className={style.registration__item_input} type="email" name="email"
                                       placeholder="name@email.com"
                                       onChange={handleChangeEmail}
                                />
                                {errors.email.length > 0 && <span className={style.input__error_message}>{errors.email}</span>}
                                <AiOutlineUser className={style.registration__item_input_icon} />
                            </div>
                        </div>
                        <div className={style.registration__col}>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Password</label>
                                <input required className={style.registration__item_input} type="password" name="password"
                                    placeholder="Enter your password..."
                                    onChange={handleChangePassword}
                                />
                                {errors.password.length > 0 && <span className={style.input__error_message}>{errors.password}</span>}
                                <RiLockPasswordLine className={style.registration__item_input_icon} />
                            </div>
                            <div className={style.registration__item}>
                                <label className={style.registration__item_title}>Confirm your password</label>
                                <input required className={style.registration__item_input} type="password" name="password_confirm"
                                       placeholder="Please confirm password..."
                                    onChange={handleChangeConfirm}
                                />
                                {errors.confirm.length > 0 && <span className={style.input__error_message}>{errors.confirm}</span>}
                            </div>
                        </div>
                    </div>
                    <div className={style.registration__row}>
                        <button disabled={isInvalid} className={style.registration__item_button} type="submit" value="signUp">Sign up
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </React.Fragment>
}

export default Registration;