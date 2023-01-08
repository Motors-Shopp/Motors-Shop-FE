import styled from "styled-components";

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 19.5rem;
  height: 21.875rem;

  padding: 8px 8px;

  .groupImg {
    width: 19.5rem;
    height: 9.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 16.35rem;
      height: 9.3rem;
    }
  }

  h4 {
    font-weight: 600;
    font-size: 1.1rem;
    font-family: "Lexend";

    color: var(--grey1);
  }

  .title {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--grey2);
    width: 19.5rem;
  }

  div {
    display: flex;
    width: 7.875rem;
    gap: 8px;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    h5 {
      font-family: "Inter";
      font-weight: 500;
      font-size: 0.875rem;
      color: var(--grey2);
    }

    .footerCard {
      display: flex;
      width: 19.313rem;
      height: 2rem;

      .groupTicket {
        display: flex;
        width: 7.063rem;
        height: 2rem;

        .ticket {
          display: flex;
          align-items: center;

          width: 3.188rem;
          height: 2rem;

          border-radius: 4px;

          background-color: var(--brand4);

          .titleTicket {
            font-size: 0.75rem;
            font-weight: 500;
            font-family: "Inter";

            color: var(--brand1);
          }
        }
      }

      h6 {
        font-family: "Lexend";
        font-weight: 500;
        font-size: 1rem;
        color: var(--grey1);
      }
    }
  }
`;
