import { TSaleProps } from "../../../../Providers/CarsContext/@types";

type TNavItemProps = {
  title: string;
  itemKey: keyof TSaleProps;
  handleClickRef: () => void;
};

export type { TNavItemProps };
