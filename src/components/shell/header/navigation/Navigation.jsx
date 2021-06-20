import React from "react";
import {LINKS_NAV, PATH_DASHBOARD, PATH_LOGIN, PATH_LOGOUT, PATH_PROFILE} from "../../../../config/config-routes";
import {NavLink} from "react-router-dom";
import './Navigation.css'
import {useSelector} from "react-redux";

const Navigation = () => {
    const user = useSelector(state => state.auth.user);

    const itemNavigation = LINKS_NAV.map(link => {
        if(link.path === PATH_LOGIN){
            return user ?
                <NavLink key={PATH_LOGOUT} className="nav__link_btn" to={PATH_LOGOUT}>Logout</NavLink>
                : <NavLink key={PATH_LOGIN} className="nav__link_btn" to={PATH_LOGIN}>Login</NavLink>
        }
        if(link.path === PATH_DASHBOARD || link.path === PATH_PROFILE) {
            return user ? <NavLink key={link.path} className="nav__link" to={link.path}>{link.label}</NavLink>
                : ""
        }
        return <NavLink key={link.path} className="nav__link" to={link.path}>{link.label}</NavLink>
    })
    return <React.Fragment>
        <nav className="nav">
            {itemNavigation}
        </nav>
    </React.Fragment>
}
export default Navigation;