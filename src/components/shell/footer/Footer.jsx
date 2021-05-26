import React from "react";
import style from './Footer.module.css';
import Copyright from "./copyright/Copyright";
import Social from "./social/Social";

const Footer = () => {
    return <React.Fragment>
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.footer__inner}>
                    <Copyright/>
                    <Social/>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Footer;