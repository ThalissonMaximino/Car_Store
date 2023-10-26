import {
    ISale,
    TUserSales,
    TSaleProps,
  } from "../../../Providers/CarsContext/@types";
  
  type TSaleCardProps = {
    sale: ISale | TUserSales | TSaleProps;
    owner: "buyer" | "seller" | "all";
  };
  
  type StyledSalesCardProps = {
    $status?: boolean;
  };
  
  export type { TSaleCardProps, StyledSalesCardProps };
  