import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from "../Pages/Login"
import { Dashboard } from "../Pages/Dashboard"


export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}