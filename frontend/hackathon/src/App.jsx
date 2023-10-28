import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import React from "react";
import Authentification from "./pages/Authentification.tsx";

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
            <Route path="/auth" element={<Authentification/>}/>
            <Route path="/homepage" element={<PrivateRoute path="/auth"/>}>
                <Route path="/homepage" element={'DONE'}/>
            </Route>
            <Route path="*" element={"404 error"}/>
        </Routes>
    )
}

export default App

