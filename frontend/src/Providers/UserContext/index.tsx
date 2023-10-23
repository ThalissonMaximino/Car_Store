import React from "react";
import { createContext, useState } from "react";
import {
  TJwtDecode,
  TUser,
  TUserContext,
  TUserName,
  TUserProvidersProps,
  TErrorResponse
} from "./@types";
import axios, { AxiosError } from "axios";
import { api } from "../../Services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import jwt_decode from "jwt-decode";

export const UserContext = createContext({} as TUserContext);

export const UserProvider = ({ children }: TUserProvidersProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState<TUserName | null>(null);
  // const [userSales, setUserSales] = useState<TUserSales[]>([]);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post("/users/login", data);
      const { token } = response.data;

      const tokenDecoded: TJwtDecode = jwt_decode(token);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("frontEndMotors:token", token);
      //   toast.success("Login realizado com sucesso!");

      retrieveUser(tokenDecoded.userId);

      tokenDecoded.role === "seller" ? navigate("/dashboard") : navigate("/");
    } catch (error) {
      //   toast.error("E-mail ou senha inválido(s)!");
      console.log(error);
    } finally {
      console.clear();
    }
  };

  const retrieveUser = async (id: string) => {
    setLoading(true);
    try {
      const response = await api.get(`/salesAd/users/${id}`);
      setUserName({
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName,
      });
    //   setUser(response.data.user);
    //   setUserSales(response.data.data);
    //   const { prevPage, count, nextPage } = response.data;
    //   if (count > 12) {
    //     setPagesAmount(Math.ceil(count / 12));
    //   }

    //   setPreviousPage(prevPage);
    //   setNextPage(nextPage);
    } catch (error) {
      const currentError = error as AxiosError<TErrorResponse>;
    //   toast.error(currentError.response?.data.message);
      logoutUser();
      console.log(error);
    } finally {
      setLoading(false);
      console.clear();
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("frontEndMotors:token");
    navigate("/");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        // userName,
        user,
        userLogin,
        // logoutUser,
        // recoverPassword,
        // userRegister,
        setUser,
        // retrieveUser,
        // changeUserAddress,
        // retrieveProfileViewUser,
        // userSales,
        // getUserSalesPagination,
        // previousPage,
        // nextPage,
        // pagesAmount,
        // setUserSales,
        // updateUserInformation,
        // deleteUserProfile,
        // loading,
        // setLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
};
