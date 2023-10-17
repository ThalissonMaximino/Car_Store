import React from 'react'
import { LoginForm } from '../../Components/Forms/LoginForm'
import { useAuth } from '../../Hooks/useAuth'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export const Login = () => {
    

    return (
        <>
        <Header/>
       <h1>Login</h1>
       <LoginForm/>
       <Footer/>
       </>
    )
}