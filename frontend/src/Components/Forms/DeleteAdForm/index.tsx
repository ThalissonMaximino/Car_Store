import React from "react";
import { useCarContext, useModal } from "../../../Hooks";
import Button from "../../Buttons";
import { StyledDeleteAd } from "./style";

const DeleteAdModal = () => {
  const { closeModal } = useModal();
  const { deleteSalesAd, setEditSale, editSale } = useCarContext();
  const deleteAd = () => {
    deleteSalesAd(editSale!.id);
    setEditSale(null);
    closeModal();
  };

  return (
    <StyledDeleteAd>
      <h2>Tem certeza que deseja excluir esse anúncio ?</h2>
      <p>Essa ação não pode ser desfeita.</p>
      <div>
        <Button
          $background="color-grey-scale-grey-5"
          $color="color-grey-scale-grey-2"
          type="button"
          $width={9}
          $maxWidth={10}
          onClick={closeModal}>
          Cancelar
        </Button>
        <Button
          $background="color-feedback-alert-2"
          $color="color-feedback-alert-1"
          type="submit"
          $width={4}
          onClick={deleteAd}>
          Sim, excluir o anúncio
        </Button>
      </div>
    </StyledDeleteAd>
  );
};

export default DeleteAdModal;
