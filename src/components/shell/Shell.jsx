import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Background from "../background/Background";

const Shell = (props) => {
    return <React.Fragment>
        {/*<Background/>*/}
        <Header theme={props.theme} themeToggle={props.themeToggle}/>
        <Body/>
    </React.Fragment>
}

export default Shell;