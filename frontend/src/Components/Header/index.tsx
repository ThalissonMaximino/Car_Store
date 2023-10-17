import React from "react";
import { Link } from "react-router-dom";
// import Menu from "./Menu";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container navbar">
        <Link to={"/"}>
          <h1 title="Retornar ao início">
            Motors <span>shop</span>
          </h1>
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
