import React from "react";
import mp4 from "../../video/animation2.mp4"
import style from "./Background.module.css"
import  background_image from "../../images/background2.png"

const Background = () => {

    return <React.Fragment>
        <img className={style.img} src={background_image} alt=''/>
        {/*<video autoPlay="autoPlay" playsInline loop muted className={style.video}>*/}
        {/*    <source src={mp4} type="video/mp4"/>*/}
        {/*</video>*/}
    </React.Fragment>
}

export default Background;