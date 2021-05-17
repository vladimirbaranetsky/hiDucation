import React from "react";
import Navigation from "./Navigation";

const Header = () => {
    return <React.Fragment>
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Navigation/>
                </div>
            </div>
        </header>
    </React.Fragment>
}
export default Header;