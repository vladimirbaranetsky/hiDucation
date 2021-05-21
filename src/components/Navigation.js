import React from "react";
import {LINKS_NAV, PATH_LOGIN, PATH_LOGOUT} from "../config/config_nav";
import {NavLink} from "react-router-dom";

const Navigation = () => {

    const itemNavigation = LINKS_NAV.map(link => {
        if(link.path === PATH_LOGIN){
            return <NavLink key={link.path} className="nav__link nav__link--btn" to={link.path}>{link.label}</NavLink>
        } else if (link.path === PATH_LOGOUT){
            return "";
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