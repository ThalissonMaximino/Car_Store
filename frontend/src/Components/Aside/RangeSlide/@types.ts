import { TCarState } from "../../../Providers/CarsContext/@types";

type TRangeSlideProps = {
  title: string;
  stepValue: number;
  itemKey: keyof TCarState;
  min: number;
  max: number;
};

export type { TRangeSlideProps };
