import React from "react";
import { useForm } from "react-hook-form";
import { TEditComment, editCommentSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Textarea from "../../TextArea";
import { useCarContext, useModal } from "../../../Hooks";
import Button from "../../Buttons/index";
import { StyledEditForm } from "./style";

const EditCommentForm = () => {
  const { closeModal } = useModal();
  const { comment, editCommentSaleAd, setComment } = useCarContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditComment>({
    resolver: zodResolver(editCommentSchema),
    defaultValues: {
      comment: comment?.comment,
    },
  });

  const onSubmitForm = (data: { comment: string }) => {
    editCommentSaleAd(comment!.id, data);
    closeModal();
    setComment(null);
  };

  const closeButton = () => {
    closeModal();
    setComment(null);
  };

  return (
    <StyledEditForm>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Textarea
          id="comment"
          errors={errors.comment}
          {...register("comment")}
        />
        <div>
          <Button
            onClick={closeButton}
            type="button"
            $background="color-grey-scale-grey-3"
            $color="color-grey-scale-grey-10"
            $width={9}
          >
            Cancelar
          </Button>
          <Button type="submit" $color="color-grey-scale-grey-10" $width={10}>
            Salvar alterações
          </Button>
        </div>
      </form>
    </StyledEditForm>
  );
};

export default EditCommentForm;
