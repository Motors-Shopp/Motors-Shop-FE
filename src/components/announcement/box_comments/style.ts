import styled from "styled-components";

export const ContentComments = styled.section`
  display: flex;
  flex-direction: column;

  background: var(--grey10);
  border-radius: 4px;

  width: 46.938rem;
  height: 34.813rem;

  margin: 0;

  padding: 2.25rem 2.75rem;

  justify-content: space-evenly;

  h4 {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 1.25rem;

    color: var(--grey0);
  }

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

    margin-left: 0.2rem;
  }

  span {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.75rem;

    color: var(--grey3);

    margin-left: 0.4rem;
  }
`;
