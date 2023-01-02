import styled from "styled-components";

export const ContentComment = styled.div`
  div {
    display: flex;
    flex-direction: row;

    width: 46.938rem;
    height: 3.25rem;

    align-items: center;

    div {
      display: flex;
      flex-direction: row;

      width: 12.5rem;
      height: 2.2rem;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      h6 {
        color: var(--grey1);

        font-family: "Inter";
        font-weight: 500;
        font-size: 0.875rem;
      }

      span {
        font-family: "Inter";
        font-weight: 400;
        font-size: 0.75rem;

        color: var(--grey3);
      }
    }
  }

  p {
    display: flex;
    text-align: initial;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.75rem;

    color: var(--grey3);
  }
`;
