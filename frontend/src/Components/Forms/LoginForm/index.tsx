import React, { useContext } from "react"
import Button from "../../Buttons";
import { SubmitHandler, useForm } from "react-hook-form";
import schema, { TLoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs/Input";
import { useAuth } from "../../../Hooks/useAuth";
import InputPass from "../../Inputs/InputPassword";

export const LoginForm = () => {
    const {signIn} = useAuth()
    // const { userLogin } = useContext(UserContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<TLoginData>({
      resolver: zodResolver(schema),
    });

    const submit: SubmitHandler<TLoginData> = async (data) => {
        signIn(data);
      };

    return(
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
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
        <Button
            className="btnEntrar"
            $background="--color-brand-1"
            $width={6}
            type="submit">
            Entrar
          </Button>
          </form>
        </>
    );
};