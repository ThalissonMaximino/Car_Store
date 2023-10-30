import React from "react";
import { IoMdClose } from "react-icons/io";
import {
  HeaderAsideModal,
  StyledAllFiltersMobile,
  StyledAsideMobile,
  StyledAsideModal,
  StyledButtonContainer,
} from "./style";
import Button from "../../Buttons";
import AllFilters from "../Filters";
import useOutClick from "../../../Hooks/useOutClick";
import useKeyDown from "../../../Hooks/useKeyDown";
import { useCarContext } from "../../../Hooks";

const AsideMobile = () => {
  const { setFilterModal, handleClearFilter, car, initialState, filterCars } =
    useCarContext();

  const menuRef = useOutClick(() => {
    setFilterModal!(false);
  });

  const submit = () => {
    filterCars();
    setFilterModal(false);
  };

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <StyledAsideMobile>
      <StyledAsideModal ref={menuRef}>
        <HeaderAsideModal>
          <h2>Filtro</h2>
          <button onClick={() => setFilterModal(false)} ref={buttonRef}>
            <IoMdClose />
          </button>
        </HeaderAsideModal>
        <StyledAllFiltersMobile>
          <AllFilters />
        </StyledAllFiltersMobile>
        <StyledButtonContainer>
          {car.brand == initialState.brand &&
          car.model == initialState.model &&
          car.color == initialState.color &&
          car.year == initialState.year &&
          car.price[0] == initialState.price[0] &&
          car.price[1] == initialState.price[1] &&
          car.engine == initialState.engine &&
          car.mileage[0] == initialState.mileage[0] &&
          car.mileage[1] == initialState.mileage[1] ? (
            <Button $background="color-grey-scale-grey-3" $width={5} disabled $disable={true}>
              Realizar Pesquisa
            </Button>
          ) : (
            <>
              <Button $background="color-brand-brand-2" $width={5} onClick={submit}>
                Realizar Pesquisa
              </Button>

              <Button
                $background="color-brand-brand-2"
                $width={5}
                onClick={handleClearFilter}
              >
                Limpar Filtro
              </Button>
            </>
          )}
        </StyledButtonContainer>
      </StyledAsideModal>
    </StyledAsideMobile>
  );
};

export default AsideMobile;
