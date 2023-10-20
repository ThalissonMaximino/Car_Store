import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from "../Pages/Login"
import { Dashboard } from "../Pages/Dashboard"
import { Register } from "../Pages/Register"


export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}