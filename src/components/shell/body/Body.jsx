import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {
    PATH_ABOUT,
    PATH_CONTACT,
    PATH_DASHBOARD,
    PATH_HOME, PATH_LOGIN, PATH_LOGOUT,
    PATH_PRODUCTS, PATH_PROFILE, PATH_REGISTRATION,
    PATH_TEAM
} from "../../../config/config-routes";
import Home from "./home/Home";
import Products from "./products/Products";
import About from "./about/About";
import Team from "./team/Team";
import Contact from "./contact/Contact";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import style from './Body.module.css'
import Registration from "./registration/Registration";
import Profile from "./profile/UserProfile";
import {useSelector} from "react-redux";

const Body = (props) => {
    const isLoggedIn = useSelector(state => state.data.isLoggedIn);

    return <React.Fragment>
        <div className={style.body}>
            <div className={style.container}>
                <Redirect to={PATH_HOME} />
                <Switch>
                    <Route path={PATH_HOME} exact render={() => {
                        return <Home/>;
                    }}>
                    </Route>
                    <Route path={PATH_PRODUCTS} exact render={() => {
                        return <Products/>;
                    }}>
                    </Route>
                    <Route path={PATH_ABOUT} exact render={() => {
                        return <About/>;
                    }}>
                    </Route>
                    <Route path={PATH_TEAM} exact render={() => {
                        return <Team/>;
                    }}>
                    </Route>
                    <Route path={PATH_CONTACT} exact render={() => {
                        return <Contact/>;
                    }}>
                    </Route>
                    <Route path={PATH_DASHBOARD} exact render={() => {
                        return <Dashboard/>;
                    }}>
                    </Route>
                    <Route path={PATH_LOGIN} exact render={() => {
                        return <Login />
                    }}>
                    </Route>
                    <Route path={PATH_LOGOUT} exact render={() => {
                        return isLoggedIn
                            ? <Logout />
                            : <Redirect to={PATH_HOME} />
                    }}>
                    </Route>
                    <Route path={PATH_REGISTRATION} exact render={() => {
                        return <Registration />;
                    }}>
                    </Route>
                    <Route path={PATH_PROFILE} exact render={() => {
                        return <Profile />;
                    }}>
                    </Route>
                </Switch>
            </div>
        </div>
    </React.Fragment>
}

export default Body;