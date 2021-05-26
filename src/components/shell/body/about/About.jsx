import React from "react";
import style from "./About.module.css";

const About = () => {
    return <React.Fragment>
        <div className={style.about}>
            <div className={style.about__header}>
                <div className={style.about__header_strip}>
                    <div/>
                </div>
                <span className={style.about__header_title}>About</span>
            </div>
            <div className={style.about__body}>
                <span className={style.about__title}>
                    About hiMath Gaming Mission
                </span>
                <span className={style.about__subtitle}>
                    Your best teacher is YOU!
                </span>
            </div>
        </div>
    </React.Fragment>
}

export default About;

