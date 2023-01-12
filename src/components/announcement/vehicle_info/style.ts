import styled from "styled-components";

export const ContentVehicleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 4px;
  width: 46.938rem;
  height: 16rem;
  padding: 1.75rem 2.75rem;
  background: var(--grey10);
  gap: 8px;

  .vehicleName {
    display: flex;
    flex-direction: column;
    width: 41.125;
    font-family: "Lexend";
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--grey1);
  }

  .vehicleInfo {
    display: flex;
    width: 41.125rem;
    height: 2.024rem;
    justify-content: space-between;

    .yearKm {
      display: flex;
      width: 7.07rem;
      height: 2rem;
      margin: 0;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

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

    span {
      display: flex;
      width: 9.688rem;
      height: 2rem;
      font-family: "Lexend";
      font-weight: 500;
      font-size: 1rem;
      color: var(--grey1);
      margin-top: 1rem;
    }
  }

  button {
    width: 6.25rem;
    height: 2.25rem;
  }
`;
