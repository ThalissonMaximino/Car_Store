import React from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../../Hooks";
import { TSaleContainerProps } from "../@types";
import ModalImage from "./ModalImage";
import { StyleListImages } from "./style";
import { useState } from "react";
import { Modal } from "../../";

const ListImages = ({ saleFounded }: TSaleContainerProps) => {
  const { modal, setModal } = useModal();

  const [url, setUrl] = useState("");

  const findImage = (url: string) => {
    const image = saleFounded.salesImages.find((img) => img.imageUrl === url);
    setUrl(image!.imageUrl);
    setModal("Imagem do veículo");
  };

  return (
    <>
      <StyleListImages>
        {saleFounded.salesImages.map((img) => (
          <li
            key={img.id}
            title="Visualizar imagem"
            onClick={() => findImage(img.imageUrl)}>
            <img src={img.imageUrl} alt={saleFounded.model} />
          </li>
        ))}
      </StyleListImages>

      {modal && modal == "Imagem do veículo"
        ? createPortal(
            <Modal title="Imagem do veículo">
              {" "}
              <ModalImage url={url} />
            </Modal>,
            document.body
          )
        : null}
    </>
  );
};

export default ListImages;
