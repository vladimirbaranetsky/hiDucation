import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Shell from "./components/shell/Shell";
import store from "./store/storeConfig"
import {Provider} from "react-redux";

function App() {
    return <BrowserRouter>
        <Provider store={store}>
            <Shell/>
        </Provider>
    </BrowserRouter>

}

export default App;
