import React, { useEffect } from "react";
import { StyledDivContainer, StyledSectionComments } from "./style";
import SaleContainer from "../SalesContainer";
import { TSaleContainerProps } from "../SalesContainer/@types";
import ListImages from "../SalesContainer/ListImages";
import SalesComments from "../CommentList/index";
import { Link } from "react-router-dom";
import { useCarContext, useUserContext } from "../../Hooks";
import LinkStyle from "../Links";
import { TJwtDecode } from "../../Providers/UserContext/@types";
import jwt_decode from "jwt-decode";

const DetailsProduct = ({ saleFounded }: TSaleContainerProps) => {
  const { convertStr } = useCarContext();
  const { user } = useUserContext();

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
      <StyledDivContainer>
        <div>
          <section className="Box-Car_Img">
            <SaleContainer saleFounded={saleFounded} />
          </section>
          <section className="Box-Car_Info">
            <div className="infoCar">
              <h2>
                {convertStr(saleFounded.brand)} {convertStr(saleFounded.model)}
              </h2>

              <div className="price">
                <div>
                  <span>{saleFounded.year}</span>
                  <span>{saleFounded.mileage} KM</span>
                </div>

                <p>
                  {saleFounded.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              {user && user.role === "buyer" ? (
                <LinkStyle
                  $background="color-brand-brand-2"
                  $width={2}
                  $color="color-grey-scale-grey-10"
                  $align="center"
                  type="button"
                  to={`https://api.whatsapp.com/send?phone=+55${
                    saleFounded.user.cellphone
                  }&text=Venho%20por%20meio%20do%20seu%20an%C3%BAncio%20na%20plataforma%20Kenzie%20Motors.%20O%20${convertStr(
                    saleFounded.brand
                  )}%20${convertStr(saleFounded.model)}%20ano%20${convertStr(
                    saleFounded.year
                  )}%20no%20valor%20de%20R$${saleFounded.price.toFixed(2)}.`}
                >
                  Comprar
                </LinkStyle>
              ) : !user ? (
                <LinkStyle
                  $background="color-brand-brand-2"
                  $width={1}
                  $align="center"
                  type="button"
                  to={"/register"}
                >
                  Comprar
                </LinkStyle>
              ) : null}
            </div>

            <div className="Car-Description">
              <h2>Descrição</h2>
              <p> {saleFounded.description} </p>
            </div>
          </section>
        </div>

        <div className="detailsSection">
          <section className="detailsPhotoCar">
            <h2>Fotos</h2>
            <ListImages saleFounded={saleFounded} />
          </section>

          <section className="detailsSeller">
            <span>
              {saleFounded.user.firstName[0]}
              {saleFounded.user.lastName[0]}
            </span>
            <h2>
              {saleFounded.user.firstName} {saleFounded.user.lastName}
            </h2>
            <p> {saleFounded.user.description} </p>
            <Link to={`/ProfileViewUser/${saleFounded.user.id}`}>
              Ver todos anúncios
            </Link>
          </section>
        </div>
      </StyledDivContainer>

      <StyledSectionComments>
        <div>
          <SalesComments />
        </div>
      </StyledSectionComments>
    </>
  );
};

export default DetailsProduct;
