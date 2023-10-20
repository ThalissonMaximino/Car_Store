import styled from 'styled-components';

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  transition: border 0.2s;

  input {
    width: 100%;
    padding:10px;
    border: 1px solid var(--color-grey-scale-grey-7);
  }
`;