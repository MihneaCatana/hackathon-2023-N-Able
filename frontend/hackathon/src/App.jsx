import React from "react";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";

import Authentication from "./pages/Authentification/Authentication.tsx";
import Homepage from "./pages/Homepage/Homepage.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Events from "./pages/Events/Events.tsx";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import './App.css'
import 'primeicons/primeicons.css';

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
            <Route path="/profile" element={<PrivateRoute path="/auth"/>}>
                <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path="/events" element={<PrivateRoute path="/auth"/>}>
                <Route path="/events" element={<Events/>}/>
            </Route>
            <Route path="*" element={"404 error"}/>
        </Routes>
    )
}

export default App

