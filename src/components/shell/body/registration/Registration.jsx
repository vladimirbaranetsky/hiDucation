import React from "react";
import style from "./Registration.module.css";

const Registration = () => {
    return <React.Fragment>
        <div className={style.registration}>
            <div className={style.registration__header}>
                <div className={style.registration__header_strip}>
                    <div/>
                </div>
                <span className={style.registration__header_title}>Registration</span>
            </div>
        </div>
    </React.Fragment>
}

export default Registration;