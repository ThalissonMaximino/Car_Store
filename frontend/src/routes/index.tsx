import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from "../Pages/Login"
import { Dashboard } from "../Pages/Dashboard"
import { Register } from "../Pages/Register"
import Home from '../Pages/Home'


 const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default RoutesMain;