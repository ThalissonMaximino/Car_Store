import React, { useEffect } from "react";
import {
  Header,
  SalesList,
  AsideDesktop,
  AsideMobile,
  Footer,
  Button,
  Banner,
  ChangePage,
} from "../../Components";
import { ButtonContainerPosition, StyledHomePage } from "./style";
import { createPortal } from "react-dom";
import { useCarContext, useUserContext } from "../../Hooks";
import NoCars from "../../Components/MessageNoCars";
import { TJwtDecode } from "../../Providers/UserContext/@types";
import jwt_decode from "jwt-decode";

const Home = () => {
  const { filterModal, setFilterModal, filteredCars, allCars } =
    useCarContext();
    
    const { retrieveUser} =
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
      <StyledHomePage>
        <Header />
        <Banner />

        {allCars.length === 0 ? (
          <NoCars />
        ) : (
          <>
            <div className="home-container container">
              <AsideDesktop />
              <SalesList sales={filteredCars} owner="all" />
            </div>
            <ChangePage />
            <ButtonContainerPosition>
              <Button
                $display={true}
                $width={5}
                $background="color-brand-brand-2"
                onClick={() => setFilterModal(true)}
              >
                Filtros
              </Button>
            </ButtonContainerPosition>

            {filterModal && createPortal(<AsideMobile />, document.body)}
          </>
        )}

        <Footer />
      </StyledHomePage>
    </>
  );
};

export default Home;





