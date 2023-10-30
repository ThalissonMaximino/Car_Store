import React from "react";
import { useEffect } from "react";
import { api } from "../../Services/api";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../Components";
import StyledMainContainer from "./style";
import DetailsProduct from "../../Components/SaleDetails";
import { useCarContext, useUserContext } from "../../Hooks";

const Sale = () => {
  const { id } = useParams();
  const { setSaleFounded, saleFounded, changeComment } = useCarContext();

  useEffect(() => {
    const getSale = async () => {
      try {
        const { data } = await api.get(`/salesAd/${id}`);

        setSaleFounded(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.clear();
      }
    };

    getSale();
  }, [changeComment]);

  return (
    <>
      <Header />

      {saleFounded && (
        <>
          <StyledMainContainer>
            <DetailsProduct saleFounded={saleFounded} />
          </StyledMainContainer>
        </>
      )}
      <Footer />
    </>
  );
};

export default Sale;
