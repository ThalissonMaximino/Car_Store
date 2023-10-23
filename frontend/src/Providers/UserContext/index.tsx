import React from "react";
import { createContext, useState } from "react";
import {
  TJwtDecode,
  TUser,
  TUserContext,
  TUserName,
  TUserProvidersProps,
  TErrorResponse,
  TAddressPartial,
  TAddressResponse,
  TUpdateUserPartial
} from "./@types";
import axios, { AxiosError } from "axios";
import { api } from "../../Services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import jwt_decode from "jwt-decode";
import { TUserSales } from "../CarsContext/@types";
import { TUserRegisterData } from "../../Components/Forms/RegisterForm/validator";

export const UserContext = createContext({} as TUserContext);

export const UserProvider = ({ children }: TUserProvidersProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState<TUserName | null>(null);
  const [userSales, setUserSales] = useState<TUserSales[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [pagesAmount, setPagesAmount] = useState(0);

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

  const userRegister = async (data: TUserRegisterData) => {
    try {
      await api.post("users/register", data);
      const token = localStorage.getItem("frontEndMotors:token");

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

    //   toast.success("Usuário cadastrado com sucesso!");
      navigate("dashboard");
    } catch (error) {
    //   toast.error("Cadastro inválido!");
      console.log(error);
    } finally {
      
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
      setUser(response.data.user);
      setUserSales(response.data.data);
      const { prevPage, count, nextPage } = response.data;
      if (count > 12) {
        setPagesAmount(Math.ceil(count / 12));
      }

      setPreviousPage(prevPage);
      setNextPage(nextPage);
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

  const changeUserAddress = async (data: TAddressPartial) => {
    const token = localStorage.getItem("frontEndMotors:token") || null;
    try {
      const changeAddress = await api.patch<TAddressResponse>(
        "/address",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      user!.address = changeAddress.data;

      setUser(user);

    //   toast.success("Endereço atualizado com sucesso");
    } catch (error) {
      console.log(error);
    //   toast.error("Não foi possível atualizar o endereço");
    } finally {
      console.clear();
    }
  };

  const getUserSalesPagination = async (
    pageUrl: string,
    setState: React.Dispatch<React.SetStateAction<TUserSales[]>>
  ) => {
    try {
      const response = await axios.get(pageUrl);

      const { prevPage, nextPage, data, count } = response.data;

      setState(data);
      setPreviousPage(prevPage);
      setNextPage(nextPage);

      if (count > 12) {
        setPagesAmount(Math.ceil(count / 12));
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.clear();
    }
  };

  const retrieveProfileViewUser = async (
    id: string,
    setState: React.Dispatch<React.SetStateAction<TUser | null>>,
    setState2: React.Dispatch<React.SetStateAction<TUserSales[]>>
  ) => {
    setLoading(true);

    try {
      const response = await api.get(`/salesAd/users/${id}`);
      setState(response.data.user);
      setState2(response.data.data);
      const { prevPage, count, nextPage } = response.data;
      if (count > 12) {
        setPagesAmount(Math.ceil(count / 12));
      }

      setPreviousPage(prevPage);
      setNextPage(nextPage);
    } catch (error) {
      const currentError = error as AxiosError<TErrorResponse>;
    //   toast.error(currentError.response?.data.message);

      console.log(error);
    } finally {
      setLoading(false);
      console.clear();
    }
  };

  const deleteUserProfile = async (id: string) => {
    const token = localStorage.getItem("frontEndMotors:token") || null;
    try {
      await api.delete(`/users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      logoutUser();
    } catch (error) {
      console.log(error);
    //   toast.error("Não foi possível excluir sua conta");
    } finally {
      console.clear();
    }
  };

  const updateUserInformation = async (
    id: string,
    data: TUpdateUserPartial
  ) => {
    const token = localStorage.getItem("frontEndMotors:token") || null;
    try {
      const response = await api.patch(`/users/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser({ ...user!, ...data });
      setUserName({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });

    //   toast.success("Perfil atualizado com sucesso");
    } catch (error) {
      console.log(error);
    //   toast.error("Não foi possível atualizar o perfil");
    } finally {
      console.clear();
    }
  };


  return (
    <UserContext.Provider
      value={{
        userName,
        user,
        userLogin,
        logoutUser,
        userRegister,
        setUser,
        retrieveUser,
        changeUserAddress,
        retrieveProfileViewUser,
        userSales,
        getUserSalesPagination,
        previousPage,
        nextPage,
        pagesAmount,
        setUserSales,
        updateUserInformation,
        deleteUserProfile,
        loading,
        setLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
};
