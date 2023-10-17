import { forwardRef, ForwardedRef } from "react";
import { IInputProps } from "../@types";
import React from "react";
import { StyledFieldset } from "./style";

const Input = forwardRef(
  (
    { id, label, errors, maxlength, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledFieldset>
        <label htmlFor={id}> {label} </label>
        <input id={id} {...rest} ref={ref} />
        {errors ? <span>{errors.message}</span> : null}
      </StyledFieldset>
    );
  }
);

export default Input;
