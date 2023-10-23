import React from 'react'
import Header from "../../Components/Header"
import { SalesCard } from '../../Components/SalesCards'
import UserAvatar from '../../Components/UserAvatar'

export const Dashboard = () => {
    
// const {setModal, modal} = useModal()    
    
    
    return (
        <>  
       <Header/>
       {/* <div className="dashboard-container">
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
                      onClick={() => setModal("Criar anúncio")}>
                      Criar Anúncio
                    </button>
                  </div>
                ) : null}
              </div> */}
       <SalesCard/>
        </>
    )
}