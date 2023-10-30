import React from "react";
import Input from "../../Inputs/Input";
import Button from "../../Buttons/index";
import { StyledButtonsAddress, StyledEditAddressForm } from "./style";
import { StyledInputContainer } from "../CreateAdForm/style";
import { useModal, useUserContext } from "../../../Hooks";
import { useForm } from "react-hook-form";
import { TEditAddress, editAddressSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import TRequestAddress from "./@types";

const EditAddressForm = () => {
  const { user, changeUserAddress } = useUserContext();
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditAddress>({
    resolver: zodResolver(editAddressSchema),
  });

  const onSubmitForm = (data: TEditAddress) => {
    const cleanedData: TRequestAddress = Object.fromEntries(
      Object.entries(data).filter(([_key, value]) => value !== "")
    );

    cleanedData.addressNumber = Number(data.addressNumber);

    cleanedData ? changeUserAddress(cleanedData) : null;

    closeModal();
  };

  return (
    <StyledEditAddressForm>
      <h2>Informações de endereço</h2>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          id="cep"
          label="CEP"
          placeholder={user?.address.cep}
          {...register("cep")}
          errors={errors.cep}
        />

        <StyledInputContainer>
          <Input
            id="state"
            label="Estado"
            placeholder={user?.address.state}
            {...register("state")}
            errors={errors.state}
          />
          <Input
            id="city"
            label="Cidade"
            placeholder={user?.address.city}
            {...register("city")}
            errors={errors.city}
          />
        </StyledInputContainer>
        <Input
          id="street"
          label="Rua"
          placeholder={user?.address.street}
          {...register("street")}
          errors={errors.street}
        />
        <StyledInputContainer>
          <Input
            id="addressNumber"
            label="Número"
            placeholder={String(user?.address.addressNumber)}
            {...register("addressNumber")}
            errors={errors.addressNumber}
          />
          <Input
            id="addressComplement"
            label="Complemento"
            placeholder={user?.address.addressComplement}
            {...register("addressComplement")}
            errors={errors.addressComplement}
          />
        </StyledInputContainer>

        <StyledButtonsAddress>
          <Button
            $background="color-grey-scale-grey-5"
            $color="color-grey-scale-grey-2"
            type="button"
            onClick={closeModal}
            $width={9}
            $maxWidth={10}
          >
            Cancelar
          </Button>
          <Button
            $background="color-brand-brand-2"
            $color="color-grey-scale-grey-10"
            type="submit"
            $width={4}
          >
            Salvar alterações
          </Button>
        </StyledButtonsAddress>
      </form>
    </StyledEditAddressForm>
  );
};

export default EditAddressForm;
