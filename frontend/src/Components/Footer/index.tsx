import React from "react";
import { FooterStyled } from "./style";
import MotorsShopLogo from "../../assets/icons/MotorsShopLogo.svg";
import ArrowUp from "../../assets/icons/ArrowUp.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container ">
        <img src={MotorsShopLogo} alt="Motors Shop" />
        <p>© 2022 - Todos os direitos reservados.</p>
        <a href="top">
          <img
            className="arrowUp"
            src={ArrowUp}
            alt="Botão para ir para o topo"
          />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
