import React from 'react'
import { LoginForm } from '../../Components/Forms/LoginForm'
import { useAuth } from '../../Hooks/useAuth'
import Header from '../../Components/Header'

export const Login = () => {
    

    return (
        <>
        <Header/>
       <h1>Login</h1>
       <LoginForm/>
       </>
    )
}