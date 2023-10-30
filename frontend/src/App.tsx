import React from "react";
import { useModal } from "./Hooks";
import { GlobalStyles } from "./Styles/GlobalStyles";
import RoutesMain from "./routes";
import { Modal } from "./Components";
import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";
import EditOrDeleteProfileForm from "./Components/Forms/EditDeleteProfileForm";
import EditAddressForm from "./Components/Forms/EditAddressForm";
import DeleteProfileModal from "./Components/Forms/DeleteProfile";
import EditCommentForm from "./Components/Forms/EditCommentForm";
import DeleteCommentModal from "./Components/Forms/DeleteCommentForm";

function App() {

  const { modal } = useModal();
  return (
    <>
    {/* <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      /> */}
      <GlobalStyles />
      <RoutesMain />

      {modal && modal == "Editar perfil"
        ? createPortal(
            <Modal title="Editar perfil">
              {" "}
              <EditOrDeleteProfileForm />
            </Modal>,
            document.body
          )
        : null}
        {modal && modal == "Editar endereço"
        ? createPortal(
            <Modal title="Editar endereço">
              {" "}
              <EditAddressForm />
            </Modal>,
            document.body
          )
        : null}
        {modal && modal == "Excluir perfil"
        ? createPortal(
            <Modal title="Excluir perfil">
              {" "}
              <DeleteProfileModal />
            </Modal>,
            document.body
          )
        : null}
        {modal && modal == "Editar comentário"
        ? createPortal(
            <Modal title="Editar comentário">
              {" "}
              <EditCommentForm />
            </Modal>,
            document.body
          )
        : null}
         {modal && modal == "Excluir comentário"
        ? createPortal(
            <Modal title="Excluir comentário">
              {" "}
              <DeleteCommentModal />
            </Modal>,
            document.body
          )
        : null}
    </>
  );
}

export default App;
