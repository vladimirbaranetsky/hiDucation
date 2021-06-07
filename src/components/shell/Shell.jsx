import React, {useEffect, useState} from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/Themes"
import Background from "../background/Background";
import axios from "axios";


const StyledApp = styled.div``;

const Shell = () => {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState({});

    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    useEffect(() => {
        axios.get(`https://virtserver.swaggerhub.com/GregorySheygam/himath-gaming/0.0.1/user/${`dkosach79@gmail.com`}`)
            .then(response =>{
                setUser({
                    user: response.data, firstName: "Dmitrii", lastName: "Kosach"
                })
            })
            .catch(error => {
                console.log(error);
            })
    },[user])
    // const config = {
    //     headers: {
    //         Authorization: 'Bearer ' + localStorage.getItem('token')
    //     }
    // }
    //
    // axios.get(`https://virtserver.swaggerhub.com/GregorySheygam/himath-gaming/0.0.1/user`, config)
    //     .then(response =>{
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    return <React.Fragment>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <StyledApp>
                    {/*<Background/>*/}
                    <Header theme={theme} themeToggle={themeToggle} user={user}/>
                    <Body />
                </StyledApp>
        </ThemeProvider>
    </React.Fragment>
}

export default Shell;