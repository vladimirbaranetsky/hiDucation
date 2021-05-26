import React from "react";
import "./ButtonToggleThemes.css"

const ButtonToggleThemes = (props) => {

    return <React.Fragment>
        <div className="switch__wrapper">
            <div>{props.theme === "light" ? "dark" : "light"}</div>
            <label className="switch">
                <input type="checkbox" onChange={() => props.themeToggle()}/>
                <span className="slider"/>
            </label>
        </div>
    </React.Fragment>
}

export default ButtonToggleThemes;