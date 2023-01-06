import styled from "styled-components";

export const ContentDescription = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  width: 46.938rem;
  height: 13.313rem;

  background: var(--grey10);
  padding: 2.25rem 2.75rem;

  margin-top: 2rem;

  h4 {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 1.25rem;

    color: var(--grey0);
  }

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;
    text-align: initial;

    color: var(--grey2);
  }
`;
