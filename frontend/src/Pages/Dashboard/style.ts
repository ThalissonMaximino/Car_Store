import styled from "styled-components";

const StyledDashboardPage = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-scale-grey-8);

  .dashboard-container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
  }

  .dashboard-header-purple {
    position: absolute;
    width: 100%;
    height: 357px;
    background-color: var(--color-brand-brand-1);
    z-index: 0;
  }

  .user-info-container {
    margin-top: 130px;
    align-self: center;
    width: 90%;
    background-color: var(--color-grey-scale-grey-10);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-block: 30px;
    padding-inline: 40px;
    box-sizing: border-box;
    border: 2px transparent;
    border-radius: 4px;
    z-index: 10;
  }

  .user-name-container {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 10px;
  }

  .user-name {
    font-size: var(--font-heading-3);
    font-weight: var(--font-bold);
  }

  .user-role {
    padding: 8px;
    color: var(--color-grey-scale-grey-1);
    background-color: var(--color-grey-scale-grey-4);
    border-radius: 4px;
  }

  .user-description {
    font-family: "Inter", "sans-serif";
    font-size: var(--font-body-1);
    font-weight: var(--font-base);
    color: var(--color-grey-scale-grey-2);
  }

  .seller-button-container {
    width: 160px;
    height: 48px;
  }

  .seller-button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-family: "Lexend", "sans-serif";
    font-weight: var(--font-bold);
    color: var(--color-brand-brand-1);
    border: 2px solid var(--color-brand-brand-1);
    border-radius: 4px;
  }

  .seller-button:hover {
    background-color: var(--color-brand-brand-3);
  }

  .sales-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-left: 2rem;

    h2 {
      color: var(--color-grey-scale-grey-0);
    }

    @media (min-width: 1024px) {
      padding-left: 0;
      width: 90%;
      align-self: center;

      .sales-list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }
    }
  }
`;

export { StyledDashboardPage };
