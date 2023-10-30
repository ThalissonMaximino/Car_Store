import styled from "styled-components";

const StyledNavItem = styled.li`
  p {
    cursor: pointer;
    font-size: var(--font-heading-6);

    :hover {
      text-decoration: underline;
    }
  }

  .pFalse {
    color: var(--color-grey-scale-grey-3);
  }

  .pTrue {
    color: var(--color-brand-brand-2);
  }
`;

export default StyledNavItem;
