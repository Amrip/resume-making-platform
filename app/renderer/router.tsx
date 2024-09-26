import React from "react";
import { HashRouter, Route, Routes, redirect } from 'react-router-dom'
import Root from './pages/root'


function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Root/>} />
            </Routes>
        </HashRouter>
    )
}

export default Router;