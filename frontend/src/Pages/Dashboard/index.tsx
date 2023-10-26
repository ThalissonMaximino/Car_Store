import React from "react";
import Header from "../../Components/Header";
import { SalesCard } from "../../Components/SalesList";
import UserAvatar from "../../Components/UserAvatar";
import { useUserContext, useModal, useCarContext } from "../../Hooks";
import { StyledDashboardPage } from "./style";
import NoCars from "../../Components/MessageNoCars";

export const Dashboard = () => {
  const { setModal, modal } = useModal();

  const { user, retrieveUser, userSales, setUserSales, loading } =
    useUserContext();

  const { change } = useCarContext();

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
