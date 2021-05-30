import React from "react";
import {LINKS_NAV, PATH_LOGIN} from "../../../../config/config_routes";
import {NavLink} from "react-router-dom";
import './Navigation.css'
import ButtonToggleThemes from "../../../buttonToggleThemes/ButtonToggleThemes";

const Navigation = (props) => {

    const itemNavigation = LINKS_NAV.map(link => {
        if(link.path === PATH_LOGIN){
            return <NavLink key={link.path} className="nav__link_btn" to={link.path}>{link.label}</NavLink>
        }
        return <NavLink key={link.path} className="nav__link" to={link.path}>{link.label}</NavLink>
    })
    return <React.Fragment>
        <nav className="nav">
            {itemNavigation}
            <ButtonToggleThemes themeToggle={props.themeToggle} theme={props.theme} />
        </nav>
    </React.Fragment>
}
export default Navigation;