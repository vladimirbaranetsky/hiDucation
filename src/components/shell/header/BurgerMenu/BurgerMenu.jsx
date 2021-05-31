import React, {useEffect, useState} from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import "./BurgerMenu.css"
import {LINKS_NAV, PATH_LOGIN} from "../../../../config/config_routes";
import {NavLink} from "react-router-dom";


const BurgerMenu = (props) => {
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
            return <NavLink key={link.path} className="burger__link_btn" to={link.path}>{link.label}</NavLink>
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