import React from "react";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import style from './Header.module.css'
import ButtonToggleThemes from "../../buttonToggleThemes/ButtonToggleThemes";

const Header = (props) => {
    return <React.Fragment>
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__inner}>
                    <Logo/>
                    <Navigation themeToggle={props.themeToggle} theme={props.theme}/>
                </div>
            </div>
        </header>
    </React.Fragment>
}
export default Header;