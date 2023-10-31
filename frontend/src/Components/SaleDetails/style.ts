import styled from "styled-components";

const StyledDivContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 100px;

  margin: 0 auto;

  h2 {
    font-size: var(--font-heading-3);
    font-weight: var(--font-bold);
    margin-bottom: 32px;
  }

  p {
    font-size: var(--font-body-1);
    font-weight: 500;
    color: var(--color-grey-scale-grey-2);
    line-height: 25px;
  }

  > div {
    .Box-Car_Img{
      height: 355px;
      border-radius: var(--input-border);
      background-color: var(--color-grey-scale-grey-10);
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        scale: 0.6;
      }
    }

    .Box-Car_Info {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .infoCar {
        height: 300px;
        padding: 28px;
        border-radius: var(--input-border);
        background-color: var(--color-grey-scale-grey-10);
        color: var(--color-grey-scale-grey-1);

        h2 {
          margin-bottom: 35px;
        }

        .price {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          > div {
            display: flex;
            gap: 12px;
            margin-bottom: 32px;

            span {
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 50px;
              height: 32px;
              color: var(--color-brand-brand-1);
              background-color: var(--color-brand-brand-4);
              font-size: var(--font-body-2);
              font-weight: 500;
            }
          }
        }

        p {
          font-size: var(--font-heading-4);
          font-weight: 600;
          margin-bottom: 36px;
          color: var(--color-grey-scale-grey-1);
        }
      }

      .Car-Description {
        height: auto;
        padding: 28px;
        border-radius: var(--input-border);
        background-color: var(--color-grey-scale-grey-10);
      }
    }
  }

  .detailsSection {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .detailsPhotoCar {
      height: 359px;
      padding: 28px;
      background-color: var(--color-grey-scale-grey-10);
      border-radius: var(--input-border);
    }

    .detailsSeller {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 28px;
      background-color: var(--color-grey-scale-grey-10);
      border-radius: var(--input-border);

      span {
        padding: 16px;
        background-color: var(--color-brand-brand-1);
        color: var(--color-grey-scale-grey-10);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-heading-1);
        margin-bottom: 28px;
      }

      a {
        width: 206px;
        height: 48px;
        margin-top: 28px;
        font-size: var(--font-body-1);
        color: var(--color-grey-scale-grey-10);
        background-color: var(--color-grey-scale-grey-0);
        border: none;
        border-radius: var(--input-border);
        padding: 10px;
        text-align: center;
      }
    }
  }

  @media (min-width: 1300px) {
    flex-direction: row;

    > div {
      .Box-Car_Img{
        width: 752px;
      }

      .Box-Car_Info {
        width: 752px;
        .infoCar {
          padding-left: 44px;
          padding-right: 44px;

          .price {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .Car-Description {
          padding-left: 44px;
          padding-right: 44px;
          height: 300px;
        }
      }
    }

    .detailsSection {
      .detailsPhotoCar {
        width: 430px;
        padding-left: 44px;
        padding-right: 44px;

        ul {
          li {
            min-width: 108px;
            min-height: 108px;
          }
        }
      }

      .detailsSeller {
        padding-left: 44px;
        padding-right: 44px;
        height: 398px;
      }
    }
  }
`;

const StyledSectionComments = styled.section`
  max-width: 1200px;
  height: auto;
  width: 90%;

  > div {
    background-color: var(--color-grey-scale-grey-10);
    margin-top: 18px;
  }

  @media (min-width: 1300px) {
    > div {
      max-width: 752px;
    }
  }
`;

export { StyledDivContainer, StyledSectionComments };
