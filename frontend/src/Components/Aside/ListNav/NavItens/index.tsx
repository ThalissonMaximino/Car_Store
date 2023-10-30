import { TNavItemProps } from "./@types";
import StyledNavItem from "./style";
import { useCarContext } from "../../../../Hooks";
import { ForwardedRef, forwardRef, useState, useEffect } from "react";
import React from "react";

const NavItem = forwardRef(
  (
    { title, itemKey, handleClickRef }: TNavItemProps,
    ref: ForwardedRef<any>
  ) => {
    const { handleClick, setIsSearching, isSearching, convertStr } =
      useCarContext();

    useEffect(() => {
      if (!isSearching) {
        setClicked(false);
      }
    }, [isSearching]);

    const [clicked, setClicked] = useState(false);

    const click = () => {
      handleClickRef();

      !clicked
        ? handleClick(String(itemKey), title)
        : handleClick(String(itemKey), "");

      setClicked(!clicked);
    };

    return (
      <StyledNavItem onClick={click}>
        {clicked ? (
          <p className="pTrue" ref={ref}>
            {convertStr(title, itemKey)}
          </p>
        ) : (
          <p
            className="pFalse"
            onClick={() => {
              setIsSearching(true);
            }}>
            {convertStr(title, itemKey)}
          </p>
        )}
      </StyledNavItem>
    );
  }
);

export default NavItem;
