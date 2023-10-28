import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import React from "react";
import Authentication from "./pages/Authentification/Authentication.tsx";
import Homepage from "./pages/Homepage/Homepage.tsx";

function App() {

    const isAuthenticated = () => {
        const myAccount = localStorage.getItem('account');
        return !!myAccount;
    }

    const PrivateRoute = ({path}) => {
        const auth = isAuthenticated();
        return auth ? <Outlet/> : <Navigate to={path}/>;
    };

    return (
        <Routes>
            <Route path="/auth" element={<Authentication/>}/>
            <Route path="/homepage" element={<PrivateRoute path="/auth"/>}>
                <Route path="/homepage" element={<Homepage/>}/>
            </Route>
            <Route path="*" element={"404 error"}/>
        </Routes>
    )
}

export default App

