import styled from "styled-components";

const StyledEditProfileForm = styled.div`
  margin-top: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: var(--font-body-1);
    color: var(--color-grey-scale-grey-1);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .btnSearchPass {
        button {
          top: 35%;
        }
    }

    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      label {
        font-size: var(--font-body-2);
        color: var(--color-grey-scale-grey-0);
        font-weight: var(--font-medium);
      }

      input {
        height: 48px;
        padding-inline: 0.6rem;
        box-sizing: border-box;
        border: 1.5px solid var(--color-grey-scale-grey-5);
        border-radius: var(--input-border);
        color: var(--color-grey-scale-grey-3);
        font-size: var(--font-body-1);
        outline: none;
      }

      textarea {
        height: 80px;
        padding-inline: 0.6rem;
        padding-top: 0.5rem;
        box-sizing: border-box;
        border: 1.5px solid var(--color-grey-scale-grey-5);
        border-radius: var(--input-border);
        color: var(--color-grey-scale-grey-3);
        font-size: var(--font-body-1);
        outline: none;
      }
    }
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  width: 100%;
`;

export { StyledEditProfileForm, StyledButtonsContainer };
