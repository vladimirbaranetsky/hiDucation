import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Shell from "./components/shell/Shell";
import store from "./store/store"
import {Provider} from "react-redux";
import Background from "../src/components/background/Background";

function App() {
    return <BrowserRouter>
        <Provider store={store}>
            <Shell/>
        </Provider>
    </BrowserRouter>
}

export default App;
