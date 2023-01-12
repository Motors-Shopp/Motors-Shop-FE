import styled from "styled-components";

export const ContentBoxMessage = styled.div`
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  width: 46.938rem;
  height: 18.063rem;

  background: var(--grey10);

  padding: 2rem 2rem;
  justify-content: space-around;

  button{
  background: var(--brand1);
  color: var(--whiteFixed);

  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0rem 1.396rem;

  gap: 0.634rem;

  width: 9.125rem;
  height: 3rem;

  border: 1px solid var(--brand1);
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;

  :hover {
    background: var(--brand2);
  }

  cursor: pointer;

  @media (max-width: 320px) {
    width: 7.438rem;
    height: 2.375rem;

    font-size: 0.875rem;
  }
  }

  div:first-of-type {
    display: flex;
    flex-direction: row;

    width: 42rem;
    height: 2rem;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 0.6rem;
    }

    h5 {
      font-family: "Inter";
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--grey0);

      line-height: 2.5;
    }
  }

  div:not(:first-of-type) {
    display: flex;

    width: 42rem;
    height: 8rem;

    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    border: 1px solid var(--grey7);
    padding: 1rem 1rem;

    input {
      border: 1px solid transparent;
      width: 40rem;
      height: 2.8rem;
    }

    button {
      width: 6.75rem;
      height: 2.375rem;
    }
  }
`;
