import React, {useEffect, useState} from "react";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import style from './Header.module.css';
import BurgerMenu from "./BurgerMenu/burgerMenu";
import ButtonToggleThemes from "./buttonToggleThemes/ButtonToggleThemes"

const Header = (props) => {
    const scrollTopStart = document.scrollingElement.scrollTop;
    const [colorHeader, setColorHeader] = useState("");
    const [scrollTop, setScrollTop] = useState(scrollTopStart);

    useEffect(()=> {
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            setScrollTop(scrolled);
         });
        props.theme === "light" ? setColorHeader("white") : setColorHeader("black");

    },[props.theme])

    return <React.Fragment>
        <header className={style.header} style={scrollTop > 20 ? {backgroundColor: colorHeader} : {background: "none"}}>
            <div className={style.container}>
                <div className={style.header__wrapper}>
                    <Logo/>
                    <div className={style.header__inner}>
                        <Navigation themeToggle={props.themeToggle} theme={props.theme} />
                        <BurgerMenu theme={props.theme}/>
                        <ButtonToggleThemes themeToggle={props.themeToggle} theme={props.theme} />
                    </div>
                </div>
            </div>
        </header>
    </React.Fragment>
}
export default Header;