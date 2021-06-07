import React, {useState} from "react";
import { FaFacebookSquare, FaApple, FaGoogle } from "react-icons/fa";
import { AiOutlineUser} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import style from './Login.module.css'
import {PATH_REGISTRATION} from "../../../../config/config_routes";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const[data, setData] = useState({
        email: "",
        password: "",
    });

    const handlerSubmit = (event) => {
        event.preventDefault();
        axios.get('https://virtserver.swaggerhub.com/GregorySheygam/himath-gaming/0.0.1/user/login', {data})
            .then(response => {
                localStorage.setItem('token', response.data.token)
            })
            .catch(error => {console.log(error)})
    }


    function handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        switch (name) {
            case "email":
                setData({...data, email: event.target.value});
                break;
            case "password":
                setData({...data, password: event.target.value});
                break;
            default:
                break;
        }
    }

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
                    <form onSubmit={handlerSubmit} noValidate>
                        <div className={style.login__row}>
                            <div className={style.login__left}>
                                <div className={style.login__item}>
                                    <label className={style.login__item_title}>Email</label>
                                    <input required className={style.login__item_input} type="email" name="email" placeholder="name@email.com" onChange={handleChange}/>
                                    <AiOutlineUser className={style.login__item_input_icon}/>
                                </div>
                                <div className={style.login__item}>
                                    <label className={style.login__item_title}>Password</label>
                                    <input required className={style.login__item_input} type="password" name="password" placeholder="Enter your password..." onChange={handleChange}/>
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