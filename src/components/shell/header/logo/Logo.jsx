import React from "react";
import {PATH_HOME} from "../../../../config/config_routes";
import {NavLink} from "react-router-dom";
import style from './Logo.module.css'

const Logo = () => {
    return <React.Fragment>
        <NavLink key={PATH_HOME} to="/home">
            <div className={style.logo__company}>
                <span className={style.logo__company_title}>hiMath</span>
                <span className={style.logo__company_subtitle}>Gaming</span>
            </div>
        </NavLink>
    </React.Fragment>
}

export default Logo;