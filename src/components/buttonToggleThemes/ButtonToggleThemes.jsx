import React from "react";
import "./ButtonToggleThemes.css"
import cx from "classnames";

const ButtonToggleThemes = (props) => {

    return <React.Fragment>
        {/*<button className="button__themes" onClick={() => props.themeToggle()}>*/}
        {/*    <div className="button__themes_inner">*/}
        {/*        {props.theme === "light" ? <span>dark</span> : <span>light</span>}*/}
        {/*    </div>*/}
        {/*</button>*/}

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