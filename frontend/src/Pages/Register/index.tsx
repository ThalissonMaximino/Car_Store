import React from 'react'
import { LoginForm } from '../../Components/Forms/LoginForm'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import StyledMainContainer from './style'
import { FormRegister } from '../../Components/Forms/RegisterForm'


export const Register = () => {
    

    return (
        <>
       <Header/>
       <StyledMainContainer>
       <FormRegister/>
       </StyledMainContainer>
       <Footer/>
       </>
    )
}