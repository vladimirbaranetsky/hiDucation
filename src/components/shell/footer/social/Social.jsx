import React from "react";
import style from './Social.module.css'
import {AiFillLinkedin, AiFillTwitterCircle, AiOutlineGithub, AiOutlineWhatsApp} from "react-icons/ai";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";

const Social = () => {

    return <React.Fragment>
        <div className={style.social}>
            <a href="https://github.com">
                < AiOutlineGithub className={style.social__link_icon}/>
            </a>
            <a href="https://www.facebook.com">
                <FaFacebook className={style.social__link_icon}/>
            </a>
            <a href="https://www.instagram.com">
                <FaInstagram className={style.social__link_icon}/>
            </a>
            <a href="https://twitter.com/">
                <AiFillTwitterCircle className={style.social__link_icon}/>
            </a>
            <a href="https://linkedin.com">
                <AiFillLinkedin className={style.social__link_icon}/>
            </a>
            <a href="https://whatsapp.com">
                <AiOutlineWhatsApp className={style.social__link_icon}/>
            </a>
            <a href="https://www.youtube.com">
                <FaYoutube className={style.social__link_icon}/>
            </a>
        </div>
    </React.Fragment>
}

export default Social;