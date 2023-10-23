import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  padding-inline: 2rem;
  padding-bottom: 44px;
  margin: 0 auto;
  background-color: var(--color-grey-scale-grey-10);

  fieldset {
    border: none;
    padding-bottom: 24px;

    span {
      font-size: var(--font-body-2);
      color: var(--color-grey-scale-grey-2);
    }

    button {
      top: 50%;
    }
  }

  h2 {
    font-size: var(--font-heading-2);
    margin-top: 44px;
    margin-bottom: 32px;
    font-weight: var(--font-bold);
  }

  p {
    font-size: var(--font-body-1);
    margin-bottom: 24px;
    font-weight: var(--font-semibold);
  }

  input {
    width: 100%;
    display: flex;
    height: 48px;
    margin-top: 12px;
    padding-left: 15px;
  }

  .btnRole,
  .address {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .btnRole {
    margin-bottom: 28px;
  }

  .button {
    float: left;
    margin: 0 5px 0 0;
    width: var(--button-width-6);
    height: 40px;
    position: relative;
    cursor: pointer;
  }
  .button label,
  .button input {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .button input[type="radio"] {
    opacity: 0.011;
    z-index: 100;
    cursor: pointer;
  }

  .button input[type="radio"]:checked + label {
    color: var(--color-grey-scale-grey-10);
    background-color: var(--color-brand-brand-1);
    border-radius: var(--button-border);
    border: none;
    cursor: pointer;
  }

  .button label {
    cursor: pointer;
    z-index: 90;
    line-height: 1.8em;
    cursor: pointer;
    color: var(--color-grey-scale-grey-1);
    border: 2px solid var(--color-grey-scale-grey-3);
    border-radius: var(--button-border);
  }

  .input__cep--container {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    fieldset {
      width: 100%;
      height: auto;

      input {
        height: 48px;
        margin-top: 10px;
      }
    }

    button {
      width: 10%;
      scale: 0.8;
      position: absolute;
      right: 5px;
      padding-top: 10px;
    }
  }

  @media (min-width: 769px) {
    width: 411px;
    height: auto;
    border: 1px solid var(--color-grey-scale-grey-10);
    background-color: var(--color-grey-scale-grey-10);
    margin-top: 100px;
  }
`;

export default StyledDiv;
