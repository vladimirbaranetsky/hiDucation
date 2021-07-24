import React, {useEffect, useState} from "react";
import {FaFacebookSquare, FaApple, FaGoogle} from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import style from './Login.module.css'
import {PATH_HOME, PATH_REGISTRATION} from "../../../../config/config-routes";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../../../actions/authAction";
import {DIGITS_PASSWORD, VALIDATE} from "../../../../config/config-credentials";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isInvalid, setIsInvalid] = useState(true);
    const [data, setData] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({email: '', password: ''});
    const [modalShow, setModalShow] = React.useState(false);

    const validateEmail = (email) => {
        return VALIDATE.test(String(email).toLowerCase());
    };

    const handleChangeEmail = (event) => {
        event.preventDefault();
        const email = event.target.value;
        if (!validateEmail(email)) {
            setErrors({...errors, email: 'Invalid email address'});
        } else {
            setData({...data, email: email});
            setErrors({...errors, email: ""});
        }
    };

    const handleChangePassword = (event) => {
        event.preventDefault();
        const password = event.target.value;
        if (password.length < DIGITS_PASSWORD) {
            setErrors({
                ...errors,
                password: `Use ${DIGITS_PASSWORD} or more characters with a mix of letters and numbers`
            });
        } else {
            setData({...data, password: password});
            setErrors({...errors, password: ""});
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        dispatch(login(data))
            .then(() => {
                form.reset();
                setData({...data, email: "", password: ""});
                history.push(PATH_HOME)
            })
            .finally(() => {
                setModalShow(true);
            })

    }

    useEffect(() => {
        const isValidate = () => {
            return !(data.email !== "" && data.password !== "" && errors.email === "" && errors.password === "");
        };
        setIsInvalid(isValidate());
    }, [errors, data]);

    return <React.Fragment>
        <div className={style.login}>
            <div className={style.login__header}>
                <div className={style.login__header_strip}>
                    <div/>
                </div>
                <span className={style.login__header_title}>Login</span>
            </div>
            <div className={style.login__body}>
                <span className={style.login__title}>
                    Welcome back
                    </span>
                <div className={style.login__wrapper}>
                    <form onSubmit={onSubmit} noValidate>
                        <div className={style.login__row}>
                            <div className={style.login__left}>
                                <div className={style.login__item}>
                                    <label className={style.login__item_title}>Email</label>
                                    <input required className={style.login__item_input} type="email" name="email"
                                           placeholder="name@email.com" onChange={handleChangeEmail}/>
                                    {errors.email.length > 0 &&
                                    <span className={style.input__error_message}>{errors.email}</span>}
                                    <AiOutlineUser className={style.login__item_input_icon}/>
                                </div>
                                <div className={style.login__item}>
                                    <label className={style.login__item_title}>Password</label>
                                    <input required className={style.login__item_input} type="password" name="password"
                                           placeholder="Enter your password..." onChange={handleChangePassword}/>
                                    {errors.password.length > 0 &&
                                    <span className={style.input__error_message}>{errors.password}</span>}
                                    <RiLockPasswordLine className={style.login__item_input_icon}/>
                                    <a style={errors.password.length > 0 ? {top: "5.5rem"} : {top: "4.5rem"}} href=" ">Forgot
                                        password?</a>
                                </div>
                                <div className={style.login__item}>
                                    <button disabled={isInvalid} className={style.login__item_button} type="submit"
                                            value="Login">Login
                                    </button>
                                </div>
                            </div>

                            <div className={style.login__inner}>
                                <div>
                                    <span>or</span>
                                </div>
                            </div>

                            <div className={style.login__right}>
                                <button className={style.login__social_button}>
                                    <FaFacebookSquare className={style.login__social_icon}/>
                                    <span className={style.login__social_title}>Continue with Facebook</span>
                                </button>
                                <button className={style.login__social_button}>
                                    <FaApple className={style.login__social_icon}/>
                                    <span className={style.login__social_title}>Continue with Apple</span>
                                </button>
                                <button className={style.login__social_button}>
                                    <FaGoogle className={style.login__social_icon}/>
                                    <span className={style.login__social_title}>Continue with Google</span>
                                </button>
                                <div className={style.login__social_option}>
                                    <span>New to hiMath Gaming?
                                        <NavLink key={PATH_REGISTRATION} to="/registration"> Sign up</NavLink>
                                    </span>
                                    <a href=" ">Log in with your organization</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/*<ModalDisplay*/}
                    {/*    show={modalShow}*/}
                    {/*    message = {messageServer}*/}
                    {/*    onHide={() => {*/}
                    {/*        setModalShow(false)*/}
                    {/*        history.push(PATH_HOME)*/}
                    {/*    }}/>*/}
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Login;
