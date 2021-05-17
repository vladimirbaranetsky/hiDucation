import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
    PATH_ABOUT,
    PATH_CONTACT,
    PATH_DASHBOARD,
    PATH_HOME,
    PATH_LOGIN,
    PATH_LOGOUT,
    PATH_PRODUCTS,
    PATH_TEAM
} from './config/config_nav';
import Home from './components/Home';
import Products from './components/Products';
import About from "./components/About";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Header from "./components/Header";
import Team from "./components/Team";
import Dashboard from "./components/Dashboard";

function App() {
    return <BrowserRouter>
        <Header/>
        <Redirect to={PATH_HOME} />
        <Switch>
            <Route path={PATH_HOME} exact render={() => {
                return <Home/>;
            }}>
            </Route>
            <Route path={PATH_PRODUCTS} exact render={() => {
                return <Products/>;
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
                return <Login/>;
            }}>
            </Route>
            <Route path={PATH_LOGOUT} exact render={() => {
                return <Logout/>;
            }}>
            </Route>
        </Switch>
  </BrowserRouter>
}

export default App;
