import React from 'react'
import { LoginForm } from '../../Components/Forms/LoginForm'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import StyledMainContainer from './style'

export const Login = () => {
    

    return (
        <>
       <Header/>
       <StyledMainContainer>
       <LoginForm/>
       </StyledMainContainer>
       <Footer/>
       </>
    )
}