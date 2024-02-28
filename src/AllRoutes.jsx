import React from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import App from './App';
import Home from './Home';


export default function AllRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}