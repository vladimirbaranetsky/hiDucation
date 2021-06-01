import React, {useEffect, useState} from "react";
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import style from './Header.module.css';
import BurgerMenu from "./burgerMenu/BurgerMenu";
import ButtonToggleThemes from "./buttonToggleThemes/ButtonToggleThemes"

const Header = (props) => {
    const [colorHeader, setColorHeader] = useState("");
    useEffect(()=> {
        // document.addEventListener("scroll", e => {
        //     let scrolled = document.scrollingElement.scrollTop;
        //     if(scrolled > 30 && props.theme === "dark"){
        //         setColorHeader("black");
        //     }
        //     if(scrolled > 30 && props.theme === "light"){
        //         setColorHeader("white");
        //     }
        //
        //  });
        props.theme === "light" ? setColorHeader("white") : setColorHeader("black");

    },[props.theme])

    return <React.Fragment>
        <header className={style.header} style={{backgroundColor: colorHeader}}>
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