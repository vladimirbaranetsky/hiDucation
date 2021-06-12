import React, {useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {
    PATH_ABOUT,
    PATH_CONTACT,
    PATH_DASHBOARD,
    PATH_HOME, PATH_LOGIN, PATH_LOGOUT,
    PATH_PRODUCTS, PATH_PROFILE, PATH_REGISTRATION,
    PATH_TEAM
} from "../../../config/config-routes";
import Home from "./home/Home";
import Products from "./products/Products";
import About from "./about/About";
import Team from "./team/Team";
import Contact from "./contact/Contact";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import style from './Body.module.css'
import Registration from "./registration/Registration";
import Profile from "./profile/UserProfile";
import {useSelector} from "react-redux";
import photoMath from "../../../images/product_math.jpg";
import photoProg from "../../../images/product_prog.jpg";
import photoPhys from "../../../images/product_phys.jpg";

const Body = (props) => {
    const isLoggedIn = useSelector(state => state.data.isLoggedIn);

    const products = [
        {id: 1, product: "Integral Basics", category: "math", photo: photoMath},
        {id: 2, product: "Indefinite Integral Basics", category: "math", photo: photoMath},
        {id: 3, product: "Integration by parts", category: "math", photo: photoMath},
        {id: 4, product: "Reverse Chain rule", category: "math", photo: photoMath},
        {id: 5, product: "Java", category: "programming", photo: photoProg},
        {id: 6, product: "Python", category: "programming", photo: photoProg},
        {id: 7, product: "JavaScript", category: "programming", photo: photoProg},
        {id: 8, product: "C++", category: "programming", photo: photoProg},
        {id: 9, product: "Classical Physic", category: "physics", photo: photoPhys},
        {id: 10, product: "Relativistic Physic", category: "physics", photo: photoPhys},
        {id: 11, product: "Quantum Physic", category: "physics", photo: photoPhys}
    ];

    const [productsFilter, setProductsFilter] = useState([]);

    const updateProductsFilter = (category) => {
        category !== "all"
        ? setProductsFilter(products.filter(product => {
                return product.category === category ? product : "";
            }))
            : setProductsFilter(products);
    }

    return <React.Fragment>
        <div className={style.body}>
            <div className={style.container}>
                <Redirect to={PATH_HOME} />
                <Switch>
                    <Route path={PATH_HOME} exact render={() => {
                        return <Home/>;
                    }}>
                    </Route>
                    <Route path={PATH_PRODUCTS} exact render={() => {
                        return <Products updateProductFilter={updateProductsFilter} productsFilter={productsFilter.length > 0 ? productsFilter : products}/>;
                    }}>
                    </Route>
                    <Route path={PATH_ABOUT} exact render={() => {
                        return <About/>;
                    }}>
                    </Route>
                    <Route path={PATH_TEAM} exact render={() => {
                        return <Team/>;
                    }}>
                    </Route>
                    <Route path={PATH_CONTACT} exact render={() => {
                        return <Contact/>;
                    }}>
                    </Route>
                    <Route path={PATH_DASHBOARD} exact render={() => {
                        return <Dashboard/>;
                    }}>
                    </Route>
                    <Route path={PATH_LOGIN} exact render={() => {
                        return <Login />
                    }}>
                    </Route>
                    <Route path={PATH_LOGOUT} exact render={() => {
                        return isLoggedIn
                            ? <Logout />
                            : <Redirect to={PATH_HOME} />
                    }}>
                    </Route>
                    <Route path={PATH_REGISTRATION} exact render={() => {
                        return <Registration />;
                    }}>
                    </Route>
                    <Route path={PATH_PROFILE} exact render={() => {
                        return <Profile />;
                    }}>
                    </Route>
                </Switch>
            </div>
        </div>
    </React.Fragment>
}

export default Body;