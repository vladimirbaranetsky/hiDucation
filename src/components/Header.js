import React from "react";
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";
import {PATH_HOME} from "../config/config_nav";

const Header = () => {
    return <React.Fragment>
        <header>
            <div className="container">
                <div className="header__inner">
                    <NavLink key={PATH_HOME} to="/home">
                        <div className="header__name">
                            <span>hiMath</span>
                            <span className="header__name-title">Gaming</span>
                        </div>
                    </NavLink>
                    <Navigation/>
                </div>
            </div>
        </header>
    </React.Fragment>
}
export default Header;