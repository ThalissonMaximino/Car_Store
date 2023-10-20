import styled from "styled-components";

export const StyledDivPassword = styled.div`
  display: flex;
  position: relative;
  border: none;
  outline: none;

  input {
    width: 100%;
    padding:10px;
  }

  button {
    position: absolute;
    top: 50%;
    right: 10px;
    border: none;
    background-color: transparent;
  }
`;


export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  transition: border 0.2s;
`;