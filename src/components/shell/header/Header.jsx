import React, {useEffect, useState} from "react";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import style from './Header.module.css';
import BurgerMenu from "./burger/BurgerMenu";
import ButtonToggleThemes from "./buttonToggleThemes/ButtonToggleThemes"
import store from "../../../store/store";

const Header = () => {
    const theme = store.getState().theme.theme;
    const scrollTopStart = document.scrollingElement.scrollTop;
    const [colorHeader, setColorHeader] = useState("");
    const [scrollTop, setScrollTop] = useState(scrollTopStart);

    useEffect(()=> {
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            setScrollTop(scrolled);
         });
        theme === "light" ? setColorHeader("white") : setColorHeader("black");
    },[theme])

    return <React.Fragment>
        <header className={style.header} style={scrollTop > 20 ? {backgroundColor: colorHeader} : {background: "none"}}>
            <div className={style.container}>
                <div className={style.header__wrapper}>
                    <Logo/>
                    <div className={style.header__inner}>
                        <Navigation />
                        <BurgerMenu />
                        <ButtonToggleThemes />
                    </div>
                </div>
            </div>
        </header>
    </React.Fragment>
}
export default Header;