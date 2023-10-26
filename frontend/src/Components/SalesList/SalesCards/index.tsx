import { StyledSalesCard } from "./style";
import  UserAvatar  from "../../UserAvatar";
import ImgSwiper from "../../ImgSwiper";
import { TSaleCardProps } from "./@types";
import { useCarContext, useModal } from "../../../Hooks";
import { Link, useLocation } from "react-router-dom";
import LinkStyle from "../../Links";
import React from "react";

const SalesCard = ({ sale, owner }: TSaleCardProps) => {
  const { convertStr, setEditSale } = useCarContext();
  const { setModal } = useModal();
  const {
    id,
    brand,
    model,
    year,
    mileage,
    isGoodPrice,
    price,
    description,
    salesImages,
    user,
    status,
  } = sale;

  const imgs = salesImages?.map((img) => img.imageUrl);

  const setSaleForEdit = () => {
    setEditSale(sale);

    setModal("Editar anúncio");
  };

  const { pathname } = useLocation();

  const isSellerPage = pathname.includes("ProfileViewUser");

  return (
    <StyledSalesCard $status={status}>
      {isGoodPrice ? (
        <h4
          className="good-price-tag"
          title="Essa oferta está 5% abaixo da tabela Fipe">
          $
        </h4>
      ) : null}
      <ImgSwiper imgs={imgs}></ImgSwiper>
      <div className="sales-info-container">
        <h2 className="car-title">
          {convertStr(brand)} - {convertStr(model)}
        </h2>
        <p className="car-description">{description}</p>
        {user ? (
          <Link to={`/ProfileViewUser/${user.id}`}>
            <div className="seller-info-container">
              <UserAvatar
                img={user.userImage}
                username={`${sale.user!.firstName} ${sale.user!.lastName}`}
              />
              <h3 className="seller-title">{`${user.firstName} ${user.lastName}`}</h3>
            </div>
          </Link>
        ) : null}
        <div className="car-info-container">
          <div className="car-info">
            <span>{mileage} KM</span>
            <span>{year}</span>
          </div>
          <span className="car-price">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        <div className="sales-buttons-container">
          {owner == "seller" && !isSellerPage && (
            <button onClick={setSaleForEdit}>Editar</button>
          )}
          {status ? (
            <LinkStyle
              className="details-sale-button"
              $color="grey-0"
              $width={3}
              to={`/sale/${id}`}>
              Ver Detalhes
            </LinkStyle>
          ) : (
            <p>INDISPONÍVEL</p>
          )}
        </div>
      </div>
    </StyledSalesCard>
  );
};

export default SalesCard;
