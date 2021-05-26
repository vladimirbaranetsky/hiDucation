import React, { useState } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Shell from "./components/shell/Shell";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes/Themes"

const StyledApp = styled.div``;

function App() {
    const [theme, setTheme] = useState("light");
    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return <BrowserRouter>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <Shell theme={theme} themeToggle={themeToggle}/>
            </StyledApp>
        </ThemeProvider>
    </BrowserRouter>

}

export default App;
