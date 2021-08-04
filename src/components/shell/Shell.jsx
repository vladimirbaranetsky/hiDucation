import React, {useEffect} from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Background from "../background/Background";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/Themes"
import store from "../../store/store";
import {getProductsByCategory} from "../../actions/productsAction";
import {useSelector} from "react-redux";

const StyledApp = styled.div``;

const Shell = () => {

    useEffect(() => {
        store.dispatch(getProductsByCategory(""));
    })
    return <React.Fragment>
        <ThemeProvider theme={useSelector(state => state.theme.theme) === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                {/*<Background/>*/}
                <Header/>
                <Body />
            </StyledApp>
        </ThemeProvider>
    </React.Fragment>
}

export default Shell;