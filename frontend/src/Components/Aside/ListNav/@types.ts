import { TSaleProps } from "../../../Providers/CarsContext/@types";

type TListNavProps = {
  saleKey: keyof TSaleProps;
  name: string;
};

export default TListNavProps;
