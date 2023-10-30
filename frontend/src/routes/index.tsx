import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from "../Pages/Login"
import { Dashboard } from "../Pages/Dashboard"
import { Register } from "../Pages/Register"
import Home from '../Pages/Home'
import ProtectedRoute from '../Pages/ProtectedRoutes'
import ProfileViewUser from '../Pages/ProfileViewUser'
import Sale from '../Pages/Sales'


 const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sale/:id" element={<Sale />} />
            <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path="/ProfileViewUser/:id" element={<ProfileViewUser />} />
        </Routes>
    )
}

export default RoutesMain;