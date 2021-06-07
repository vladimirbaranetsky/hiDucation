import React from "react";
import {LINKS_NAV, PATH_LOGIN, PATH_LOGOUT} from "../../../../config/config_routes";
import {NavLink} from "react-router-dom";
import './Navigation.css'

const Navigation = (props) => {
    const itemNavigation = LINKS_NAV.map(link => {
        if(link.path === PATH_LOGIN){
            return !props.user ? <NavLink key={PATH_LOGOUT} className="nav__link_btn" to={PATH_LOGOUT}>Logout</NavLink>
                : <NavLink key={PATH_LOGIN} className="nav__link_btn" to={PATH_LOGIN}>Login</NavLink>
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