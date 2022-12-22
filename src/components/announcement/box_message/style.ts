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
