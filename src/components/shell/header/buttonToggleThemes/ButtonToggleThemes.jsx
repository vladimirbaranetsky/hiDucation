import React from "react";
import "./ButtonToggleThemes.css"
import store from "../../../../store/store";
import {updateTheme} from "../../../../actions/themeAction";

const ButtonToggleThemes = (props) => {
    const theme = store.getState().theme.theme;
    return <React.Fragment>
        <div className="switch__wrapper">
            <div>{theme === "light" ? "dark" : "light"}</div>
            <label className="switch">
                <input type="checkbox"  onChange={() => themeToggle()}/>
                <span className="slider"/>
            </label>
        </div>
    </React.Fragment>
}
const themeToggle = () => {
    const theme = store.getState().theme.theme;
    theme === "light" ? store.dispatch(updateTheme("dark")) : store.dispatch(updateTheme("light"));
}

export default ButtonToggleThemes;