import React from "react";

const Login = () => {
    return <React.Fragment>
        <div className="content">
            <div className="container">
                <div className="content__header">
                    <div className="content__header-strip">
                        <div/>
                    </div>
                    <span className="content__header-title">LOGIN</span>
                </div>
                <div className="content__body">
                    <div className="h2"><h2>Welcome back</h2>
                    </div>
                    <div className="login__container">
                        <form>
                            <div className="login__row">
                                <div className="login__col">
                                    <input type="text" name="email" placeholder="name@gmail.com"/>
                                    <input type="password" name="password" placeholder="Enter your password..."/>
                                    <span className="psw"><a href="#">Forgot password?</a></span>
                                    <input type="submit" value="Login"/>
                                </div>
                                <div className="vl">
                                    <span className="inner">or</span>
                                </div>
                                <div className="login__col">
                                    <a href="#" className="fb btn">Continue with Facebook</a>
                                    <a href="#" className="apple btn">Continue with Apple</a>
                                    <a href="#" className="google btn">Continue with Google</a>
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