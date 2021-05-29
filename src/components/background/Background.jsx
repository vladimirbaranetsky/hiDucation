import React from "react";
import mp4 from "../../video/animation.mp4"
import style from "./Background.module.css"

const Background = () => {

    return <React.Fragment>
        <video autoPlay="autoPlay" playsInline loop muted className={style.video}>
            <source src={mp4} type="video/mp4"/>
        </video>
    </React.Fragment>
}

export default Background;