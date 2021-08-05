import React from "react";
import temp_video from "../../video/temp_video_mkv.mkv"

import style from "./Background.module.css"



const Background = () => {

    return <React.Fragment>
        <video autoPlay="autoPlay" playsInline loop muted className={style.video}>
            <source src={temp_video}/>
        </video>
    </React.Fragment>
}

export default Background;


