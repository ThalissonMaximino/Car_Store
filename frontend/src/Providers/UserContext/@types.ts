import { ReactNode } from "react";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";


type TUserProvidersProps = {
    children: ReactNode;
  };
  

type TUserContext = {
    user: TUser | null;
    setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
    userLogin: (data: TLoginData) => void;}


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
