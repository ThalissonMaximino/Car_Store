import React from "react"
import { TUserRegisterData, userSchema } from "./validator";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../Inputs/Input";
import { zodResolver } from "@hookform/resolvers/zod";



const FormRegister = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
      } = useForm<TUserRegisterData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
          address: {
            city: "",
            street: "",
            state: "",
          },
        },
    
        mode: "onChange",
      });

    const submit: SubmitHandler<TUserRegisterData> = async (data) => {
        const newData = {
          ...data,
          address: {
            ...data.address,
            addressNumber: Number(data.address.addressNumber),
          },
        };
    
        // userRegister(newData);
      };



    return (
        <>
        <div>
            <h2>
                Cadastro
            </h2>
            <p>Informações pessoais</p>
            <form>
            <Input
            id="firstName"
            label="Primeiro Nome"
            type="text"
            placeholder="Digite seu primeiro nome..."
            {...register("firstName")}
            errors={errors.firstName}
          />


            </form>
        </div>
        </>
    )
}

function register(arg0: string): any {
    throw new Error("Function not implemented.");
}
