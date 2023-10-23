import { ReactNode } from "react";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { TUserRegisterData } from "../../Components/Forms/RegisterForm/validator";
import { TUserSales } from "../CarsContext/@types";


type TUserProvidersProps = {
    children: ReactNode;
  };
  

type TUserContext = {
    user: TUser | null;
    setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
    userLogin: (data: TLoginData) => void;
    logoutUser: () => void;
    userRegister: (data: TUserRegisterData) => void;
    userName: TUserName | null;
    retrieveUser: (id: string) => Promise<void>;
    changeUserAddress: (data: TAddressPartial) => Promise<void>;
    retrieveProfileViewUser?: (
      id: string,
      setState: React.Dispatch<React.SetStateAction<TUser | null>>,
      setState2: React.Dispatch<React.SetStateAction<TUserSales[]>>
    ) => Promise<void>;
    userSales: TUserSales[];
    getUserSalesPagination: (
      pageUrl: string,
      setState: React.Dispatch<React.SetStateAction<TUserSales[]>>
    ) => Promise<void>;
    previousPage: string | null;
    nextPage: string | null;
    pagesAmount: number;
    setUserSales: React.Dispatch<React.SetStateAction<TUserSales[]>>;
    updateUserInformation: (
      id: string,
      data: TUpdateUserPartial
    ) => Promise<void>;
    deleteUserProfile: (id: string) => Promise<void>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }


type TErrorResponse = {
  message: string;
};

type TUser = {
  id?: string;
  firstName: string;
  lastName: string;
  cellphone: string;
  cpf: string;
  email: string;
  description: string;
  birthdate: Date;
  role: "seller" | "buyer";
  userImage?: string;
  address: TAddress;
  created_at: string;
};

type TUserMail = {
  email: string;
};
type TUserName = {
  firstName: string;
  lastName: string;
};

type TUpdateUser = Omit<TUser, "id" | "created_at" | "role">;

type TUpdateUserPartial = Partial<TUpdateUser>;

type TUserDataToken = {
  role: "seller" | "buyer";
  exp: number;
  iat: number;
  sub: string; // id do user.
};

type TJwtDecode = {
  userId: string;
  role: string;
};

type TAddress = {
  addressComplement: string;
  addressNumber: number;
  cep: string;
  city: string;
  state: string;
  street: string;
};

type TAddressPartial = {
  addressComplement?: string;
  addressNumber?: number;
  cep?: string;
  city?: string;
  state?: string;
  street?: string;
};

type TAddressResponse = {
  id: string;
  created_at: string;
} & TAddress;

export type {
  TUser,
  TUserProvidersProps,
  TUserContext,
  TUserDataToken,
  TUserName,
  TErrorResponse,
  TUserMail,
  TJwtDecode,
  TAddressResponse,
  TAddressPartial,
  TUpdateUserPartial,
};
