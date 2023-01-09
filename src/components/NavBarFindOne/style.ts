import styled from "styled-components";

export const NavFind = styled.div`
  display: flex;

  width: 77.5rem;
  height: 25.375rem;

  flex-direction: column;
  justify-content: center;

  background-color: var(--grey8);

  padding: 0 2rem;

  text-align: start;

  .infos {
    display: flex;
    flex-direction: column;

    width: 70.563rem;
    height: 12.563rem;

    justify-content: space-around;

    img {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
    }

    .detailsSeller {
      display: flex;
      width: 20rem;
      height: 3.8rem;

      align-items: center;

      .name {
        width: 8.5rem;
        height: 2rem;

        h6 {
          font-family: "Lexend";
          font-weight: 600;
          font-size: 1.25rem;
        }
      }

      .ticket {
        display: flex;

        width: 5.688rem;
        height: 2rem;

        background-color: var(--brand4);
        margin-left: 0.6rem;

        justify-content: center;
        align-items: center;

        h6 {
          font-family: "Inter";
          font-weight: 500;
          font-size: 0.875rem;

          color: var(--brand1);
        }
      }
    }
  }

  p {
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 500;

    color: var(--grey2);
    margin-bottom: 3rem;
  }

  button {
    width: 10rem;
    height: 3rem;
  }
`;
