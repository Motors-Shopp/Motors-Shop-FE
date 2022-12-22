import styled from "styled-components";

export const ContentBio = styled.div`
  width: 27.5rem;
  height: 26.625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: var(--grey10);
  border-radius: 4px;

  margin-top: 1rem;

  img {
    width: 6.5rem;
    height: 6.5rem;

    border-radius: 50%;
    border: 1px solid var(--grey1);
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    font-family: "Lexend";

    color: var(--grey0);
  }

  /* div {
    display: flex;

    width: 20.313rem;
    height: 5.25rem;
  } */

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;

    color: var(--grey2);
  }
  button {
    width: 12.875rem;
    height: 3rem;
  }
`;
