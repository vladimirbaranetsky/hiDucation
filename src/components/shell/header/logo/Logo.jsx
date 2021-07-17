import React from "react";
import {PATH_HOME} from "../../../../config/config-routes";
import {NavLink} from "react-router-dom";
import style from './Logo.module.css'
import logo from '../../../../images/logo.png';

const Logo = () => {
    return <React.Fragment>
        <NavLink key={PATH_HOME} to="/home">
            {/*<div className={style.logo__company}>*/}
                {/*<span className={style.logo__company_title}>hi</span>*/}
                {/*<span className={style.logo__company_subtitle}>Ducation</span>*/}
                <img src={logo} alt=''/>
            {/*</div>*/}
        </NavLink>
    </React.Fragment>
}

export default Logo;