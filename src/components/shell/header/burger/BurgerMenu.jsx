import React, {useEffect, useState} from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import "./BurgerMenu.css"
import {LINKS_NAV, PATH_LOGIN, PATH_LOGOUT} from "../../../../config/config-routes";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const BurgerMenu = (props) => {
    const user = useSelector(state => state.data.user);
    const [menuOn, setMenuOn] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function handlerButton(event) {
        event.preventDefault();
        if(!menuOn){
            setMenuOn(true);

        } else {
            setMenuOn(false);
        }
    }

    useEffect(()=> {
        setIsActive(menuOn);
    },[menuOn]);

    const itemNavigation = LINKS_NAV.map(link => {
        if(link.path === PATH_LOGIN){
            return user ? <NavLink key={PATH_LOGOUT} className="nav__link_btn" to={PATH_LOGOUT}>Logout</NavLink>
                : <NavLink key={PATH_LOGIN} className="nav__link_btn" to={PATH_LOGIN}>Login</NavLink>
        }
        return <NavLink key={link.path} className="burger__link" to={link.path}>{link.label}</NavLink>
    })

    return <React.Fragment>
        <div className="burger__menu">
            <button type="button" className="burger__button"  onClick={handlerButton}>
                {isActive ? <IoMdClose className="burger__button_close"/>
                : <IoIosMenu className="burger__button_open"/>}
                {isActive? <div className="burger__menu_items" style={props.theme === "light" ? { backgroundColor: "white"} : {backgroundColor: "black"}}>
                    {itemNavigation}
                </div> : ""}
            </button>
        </div>
    </React.Fragment>
}
export default BurgerMenu;