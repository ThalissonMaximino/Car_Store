import React, { useContext } from "react";
import Button from "../../Buttons";
import { SubmitHandler, useForm } from "react-hook-form";
import schema, { TLoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import Input from "../../Inputs/Input";
import InputPass from "../../Inputs/InputPassword";
import { StyledForm } from "./style";
import { UserContext } from "../../../Providers/UserContext";

export const LoginForm = () => {
  
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TLoginData> = async (data) => {
    userLogin(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1 className="text-style-heading-heading-5-500">Login</h1>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Digite seu e-mail..."
          {...register("email")}
          errors={errors.email}
        />
        <InputPass
          id="password"
          label="Senha"
          placeholder="Digite sua senha..."
          {...register("password")}
          errors={errors.password}
        />
        <Link to={"#"}>
          <span>
            Esqueci minha senha
          </span>
        </Link>
        <Button
          className="text-style-inputs-buttons-input-label"
          $background="color-brand-brand-1"
          $width={6}
          type="submit"
        >
          Entrar
        </Button>
        <span>Ainda não possui conta?</span>
        <Link className="registerBtn" to ={"/register"}>
        <Button
          className="text-style-inputs-buttons-input-label"
          $background="color-grey-scale-grey-10"
          $color="color-grey-scale-grey-1"
          $border= {true} 
          $width={6}
          type="submit"
        >
          Cadastrar
        </Button>
        </Link>
      </StyledForm>
    </>
  );
};
