import { styled } from "styled-components";

const StyledDeleteComment = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    font-size: var(--font-heading-6);
    color: var(--color-grey-scale-grey-1);
  }

  p {
    color: var(--color-grey-scale-grey-2);
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;

    width: 100%;
  }
`;

export { StyledDeleteComment };
