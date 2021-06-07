import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Shell from "./components/shell/Shell";

function App() {
    return <BrowserRouter>
        <Shell/>
    </BrowserRouter>

}

export default App;
