import React from "react";
import { forwardRef, ForwardedRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IInputProps } from "../@types";
import { StyledDivPassword, StyledFieldset } from "./style";

const InputPass = forwardRef(
  (
    { id, label, errors, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [typeInput, setTypeInput] = useState("password");

    const changeType = () => {
      if (typeInput === "password") {
        setTypeInput("text");
      } else {
        setTypeInput("password");
      }
    };

    return (
      <StyledFieldset>
        <label className="text-style-inputs-buttons-input-label" htmlFor={id}>{label}</label>
        <StyledDivPassword>
          <input className="text-style-inputs-buttons-input-label" id={id} type={typeInput} {...rest} ref={ref} />
          <button className="text-style-inputs-buttons-input-label" type="button" onClick={changeType}>
            {typeInput === "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
        </StyledDivPassword>
        {errors ? <span>{errors.message}</span> : null}
      </StyledFieldset>
    );
  }
);

export default InputPass;
