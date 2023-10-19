import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;

  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  background-color: var(--color-grey-scale-grey-10);
  box-shadow: 0 5px var(--color-grey-scale-grey-5);

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-inline: 2rem;
  a {
      h1 {
        font-size: var(--font-heading-1);
        background-image: linear-gradient(
          to left,
          var(--color-brand-brand-1),
          var(--color-grey-scale-grey-0)
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      span {
        font-size: var(--font-heading-4);
      }
    }
  }
`


//   @media (min-width: 729px) {
//     .navbar {
//       h1 {
//         font-size: var(--font-heading-1);
//       }
//     }
//   }
// `;

export const HeaderMenuBackground = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #0005;

  position: fixed;
  top: 80px;
  left: 0;

  z-index: 2;
  @media (min-width: 769px) {
    top: 0;
  }
`;


