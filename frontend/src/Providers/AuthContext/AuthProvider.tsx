import React from "react";
import { ReactNode, createContext } from "react";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { api } from "../../Services/api";
import { useNavigate } from "react-router-dom";


interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: TLoginData) => void
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const navigate = useNavigate()
    const signIn = async (data: TLoginData) => {

        try {

            const response = await api.post("users/login", data)

            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("user-car_store:token", token)

            navigate("Dashboard")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
