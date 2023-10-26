import { ISale, TUserSales, TSaleProps } from "../../Providers/CarsContext/@types";

type TSalesListProps = {
  sales: ISale[] | TUserSales[] | TSaleProps[];
  owner: "buyer" | "seller" | "all";
};

export type { TSalesListProps };
