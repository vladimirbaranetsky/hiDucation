import React from "react";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import style from './Header.module.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ButtonToggleThemes from "../../buttonToggleThemes/ButtonToggleThemes";

const Header = (props) => {
    return <React.Fragment>
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__wrapper}>
                    <Logo/>
                    <div className={style.header__inner}>
                        <Navigation themeToggle={props.themeToggle} theme={props.theme} />
                        <BurgerMenu themeToggle={props.themeToggle} theme={props.theme}/>
                        <ButtonToggleThemes themeToggle={props.themeToggle} theme={props.theme} />
                    </div>

                </div>

            </div>
        </header>
    </React.Fragment>
}
export default Header;