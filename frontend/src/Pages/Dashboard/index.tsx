import React, { useEffect } from "react";
import { Modal, Header, Footer, UserAvatar } from "../../Components";
import SalesList from "../../Components/SalesList";
import { useUserContext, useModal, useCarContext } from "../../Hooks";
import { StyledDashboardPage } from "./style";
import jwt_decode from "jwt-decode";
import NoCars from "../../Components/MessageNoCars";
import UserSalePagination from "../../Components/SalesPagination";
import { createPortal } from "react-dom";
import CreateAdForm from "../../Components/Forms/CreateAdForm";
import EditAdForm from "../../Components/Forms/EditAdForm";
import DeleteAdModal from "../../Components/Forms/DeleteAdForm";
import { TJwtDecode } from "../../Providers/UserContext/@types";

export const Dashboard = () => {

  const { setModal, modal } = useModal();

  const { user, retrieveUser, userSales, setUserSales} =
    useUserContext();

  const { change } = useCarContext();

  useEffect(() => {
    const token = localStorage.getItem("frontEndMotors:token");

    if (token) {
      const tokenDecoded: TJwtDecode = jwt_decode(token);

      retrieveUser(tokenDecoded.userId);
    }
  }, [change]);

  return (
    <>
      <StyledDashboardPage>
        <Header />

        <div className="dashboard-container">
          <div className="dashboard-header-purple"></div>
          <div className="user-info-container">
            <UserAvatar
              img={user?.userImage}
              username={`${user?.firstName} ${user?.lastName}`}
              size="big"
            />
            <div className="user-name-container">
              <h2 className="user-name">{`${user?.firstName} ${user?.lastName}`}</h2>
              <span className="user-role">
                {user?.role == "seller" ? "Anunciante" : "Comprador"}
              </span>
            </div>
            <p className="user-description">{user?.description}</p>

            {user?.role == "seller" ? (
              <div className="seller-button-container">
                <button
                  className="seller-button"
                  onClick={() => setModal("Criar anúncio")}
                >
                  Criar Anúncio
                </button>
              </div>
            ) : null}
          </div>

          {userSales.length === 0 ? (
            <NoCars />
          ) : (
            <div className="sales-container">
              <h2>Anúncios</h2>
              <div className="sales-list-container">
                <SalesList owner={user?.role!} sales={userSales} />
              </div>

              <UserSalePagination setState={setUserSales} />
            </div>
          )}
        </div>
        {modal === "Criar anúncio"
          ? createPortal(
              <Modal title={"Criar anúncio"}>
                <CreateAdForm />
              </Modal>,
              document.body
            )
          : null}

        {modal === "Editar anúncio"
          ? createPortal(
              <Modal title={"Editar anúncio"}>
                <EditAdForm />
              </Modal>,
              document.body
            )
          : null}
        {modal === "Excluir anúncio"
          ? createPortal(
              <Modal title={"Excluir anúncio"}>
                <DeleteAdModal />
              </Modal>,
              document.body
            )
          : null}

        <Footer />
      </StyledDashboardPage>
    </>
  );
};

export default Dashboard;


