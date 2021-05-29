import React from "react";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import style from './Header.module.css';

const Header = (props) => {
    let innerWidth = window.innerWidth;
    return <React.Fragment>
        <header className={style.header}>
            <div className={style.container} style={{maxWidth: innerWidth - 200}}>
                <div className={style.header__inner}>
                    <Logo/>
                    <Navigation themeToggle={props.themeToggle} theme={props.theme}/>
                </div>
            </div>
        </header>
    </React.Fragment>
}
export default Header;