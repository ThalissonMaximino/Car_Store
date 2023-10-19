import React, { useContext } from "react"
import Button from "../../Buttons";
import { SubmitHandler, useForm } from "react-hook-form";
import schema, { TLoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs/Input";
import { useAuth } from "../../../Hooks/useAuth";
import InputPass from "../../Inputs/InputPassword";
import { StyledForm } from "./style";

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
        <StyledForm onSubmit={handleSubmit(submit)}>
        <h1 className='text-style-heading-heading-5-500'>Login</h1>
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
          </StyledForm>
        </>
    );
};