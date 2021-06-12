import React, {useState} from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Background from "../background/Background";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/Themes"



const StyledApp = styled.div``;

const Shell = () => {
    const [theme, setTheme] = useState("light");
    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return <React.Fragment>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <StyledApp>
                   {/* <Background/>*/}
                    <Header theme={theme} themeToggle={themeToggle}/>
                    <Body />
                </StyledApp>
        </ThemeProvider>
    </React.Fragment>
}

export default Shell;