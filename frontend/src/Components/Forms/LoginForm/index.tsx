import React, { useContext } from "react"
import Button from "../../Buttons";
import { SubmitHandler, useForm } from "react-hook-form";
import schema, { TLoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs/Input";

export const LoginForm = () => {

    // const { userLogin } = useContext(UserContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<TLoginData>({
      resolver: zodResolver(schema),
    });

    // const submit: SubmitHandler<TLoginData> = async (data) => {
    //     userLogin(data);
    //   };

    return(
        <>
        <h2>Login</h2>
        {/* <form onSubmit={handleSubmit(submit)}/> */}
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Digite seu e-mail..."
            {...register("email")}
            errors={errors.email}
          />
        <Button>
            OI
        </Button>
        </>
    );
};