import styled from "styled-components";

export const ContentVehicleInfo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: flex-start;

  width: 46.938rem;
  height: 14.962rem;

  padding: 1.75rem 2.75rem;

  background: var(--grey10);

  div:first-of-type {
    display: flex;
    flex-direction: column;

    width: 41.125;
    height: 2.024rem;

    font-family: "Lexend";
    font-weight: 600;
    font-size: 1.25rem;

    color: var(--grey1);
  }

  div:not(:first-of-type) {
    display: flex;
    width: 41.125rem;
    height: 2.024rem;

    justify-content: space-between;

    div:first-of-type {
      display: flex;

      width: 7.063rem;
      height: 2rem;

      flex-direction: row;
      justify-content: space-between;

      p {
        display: flex;

        width: 3.188rem;
        height: 2rem;

        justify-content: center;
        align-items: center;

        padding: 0.25rem 0.5rem;

        background: var(--brand4);

        font-family: "Inter";
        font-weight: 500;
        font-size: 0.875rem;

        color: var(--brand1);

        border-radius: 4px;
      }
    }

    p {
      display: flex;

      width: 9.688rem;
      height: 2rem;

      font-family: "Lexend";
      font-weight: 500;
      font-size: 1rem;

      color: var(--grey1);
    }
  }

  button {
    width: 6.25rem;
    height: 2.25rem;
  }
`;
