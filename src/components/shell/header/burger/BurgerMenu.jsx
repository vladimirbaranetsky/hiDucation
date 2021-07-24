import React, {useEffect, useState} from "react";
import {IoMdClose, IoIosMenu} from "react-icons/io";
import "./BurgerMenu.css"
import {LINKS_NAV, PATH_DASHBOARD, PATH_LOGIN, PATH_LOGOUT, PATH_PROFILE} from "../../../../config/config-routes";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import store from "../../../../store/store";


const BurgerMenu = () => {
    const user = useSelector(state => state.auth.user);
    const theme = store.getState().theme.theme;

    const [menuOn, setMenuOn] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function handlerButton(event) {
        event.preventDefault();
        if (!menuOn) {
            setMenuOn(true);

        } else {
            setMenuOn(false);
        }
    }

    useEffect(() => {
        setIsActive(menuOn);
    }, [menuOn]);

    const itemNavigation = LINKS_NAV.map(link => {
        if (link.path === PATH_LOGIN) {
            return user ? <NavLink key={PATH_LOGOUT} className="burger__link_btn" to={PATH_LOGOUT}>Logout</NavLink>
                : <NavLink key={PATH_LOGIN} className="burger__link_btn" to={PATH_LOGIN}>Login</NavLink>
        }
        if (link.path === PATH_DASHBOARD) {
            return user ? <NavLink key={PATH_DASHBOARD} className="burger__link" to={PATH_DASHBOARD}>Dashboard</NavLink>
                : ""
        }
        if (link.path === PATH_PROFILE) {
            return user ? <NavLink key={link.path} className="burger__link" to={link.path}>{link.label}</NavLink>
                : ""
        }
        return <NavLink key={link.path} className="burger__link" to={link.path}>{link.label}</NavLink>
    })

    return <React.Fragment>
        <div className="burger__menu">
            <button type="button" className="burger__button" onClick={handlerButton}>
                {isActive ? <IoMdClose className="burger__button_close"/>
                    : <IoIosMenu className="burger__button_open"/>}
                {isActive ? <div className="burger__menu_items"
                                 style={theme === "light" ? {backgroundColor: "white"} : {backgroundColor: "black"}}>
                  {itemNavigation}
                </div> : ""}
            </button>
        </div>
    </React.Fragment>
}
export default BurgerMenu;