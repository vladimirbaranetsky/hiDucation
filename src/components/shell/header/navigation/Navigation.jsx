import React from "react";
import {LINKS_NAV, PATH_LOGIN} from "../../../../config/config_routes";
import {NavLink} from "react-router-dom";
import './Navigation.css'

const Navigation = () => {

    const itemNavigation = LINKS_NAV.map(link => {
        if(link.path === PATH_LOGIN){
            return <NavLink key={link.path} className="nav__link_btn" to={link.path}>{link.label}</NavLink>
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