import React from "react";
import { FaFacebookSquare, FaApple, FaGoogle } from "react-icons/fa";
import { AiOutlineUser} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
    return <React.Fragment>
        <div className="content">
            <div className="container">
                <div className="content__header">
                    <div className="content__header-strip">
                        <div/>
                    </div>
                    <span className="content__header-title">Login</span>
                </div>
                <div className="content__body">
                    <span className="login__title">
                        Welcome back
                    </span>
                    <div className="login__container">
                        <form>
                            <div className="login__row">
                                <div className="login__left">
                                    <div className="login__item">
                                        <span className="login__item-title">Email</span>
                                        <input className="login__item-input email" type="email" name="email" placeholder="name@email.com"/>
                                        <AiOutlineUser className="email__icon"/>
                                    </div>
                                    <div className="login__item">
                                        <span className="login__item-title">Password</span>
                                        <input className="login__item-input password" type="password" name="password" placeholder="Enter your password"/>
                                        <RiLockPasswordLine className="password__icon"/>
                                        <a href=" ">Forgot password?</a>
                                    </div>
                                    <div className="login__item">
                                        <button className="login__item-button" type="submit" value="Login">Login</button>
                                    </div>
                                </div>

                                <div className="login__inner">
                                    <div className="login__inner-title">
                                        <span >or</span>
                                    </div>
                                </div>

                                <div className="login__right">
                                    <button className="login__social-button" >
                                        <FaFacebookSquare className="social__icon"/>
                                        <span className="social__title">Continue with Facebook</span>
                                    </button>
                                    <button className="login__social-button" >
                                            <FaApple className="social__icon"/>
                                            <span className="social__title">Continue with Apple</span>
                                    </button>
                                    <button className="login__social-button" >
                                        <FaGoogle className="social__icon"/>
                                        <span className="social__title">Continue with Google</span>
                                    </button>
                                    <div className="social__option">
                                        <span>New to Coursera?  <a href=" ">Sign up</a></span>
                                        <a href=" ">Log in with your organization</a>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Login;