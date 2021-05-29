import React from "react";
import { FaFacebookSquare, FaApple, FaGoogle } from "react-icons/fa";
import { AiOutlineUser} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import style from './Login.module.css'
import {PATH_REGISTRATION} from "../../../../config/config_routes";
import {NavLink} from "react-router-dom";

const Login = () => {
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
                    <form>
                        <div className={style.login__row}>
                            <div className={style.login__left}>
                                <div className={style.login__item}>
                                    <span className={style.login__item_title}>Email</span>
                                    <input className={style.login__item_input} type="email" name="email" placeholder="name@email.com"/>
                                    <AiOutlineUser className={style.login__item_input_icon}/>
                                </div>
                                <div className={style.login__item}>
                                    <span className={style.login__item_title}>Password</span>
                                    <input className={style.login__item_input} type="password" name="password" placeholder="Enter your password"/>
                                    <RiLockPasswordLine className={style.login__item_input_icon}/>
                                    <a href=" ">Forgot password?</a>
                                </div>
                                <div className={style.login__item}>
                                    <button className={style.login__item_button} type="submit" value="Login">Login</button>
                                </div>
                            </div>

                            <div className={style.login__inner}>
                                <div className={style.login__inner_title}>
                                    <span >or</span>
                                </div>
                            </div>

                            <div className={style.login__right}>
                                <button className={style.login__social_button} >
                                    <FaFacebookSquare className={style.login__social_icon}/>
                                    <span className={style.login__social_title}>Continue with Facebook</span>
                                </button>
                                <button className={style.login__social_button} >
                                    <FaApple className={style.login__social_icon}/>
                                    <span className={style.login__social_title}>Continue with Apple</span>
                                </button>
                                <button className={style.login__social_button} >
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

                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Login;