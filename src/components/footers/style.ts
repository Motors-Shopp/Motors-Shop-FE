import styled from "styled-components";

export const ContentFooter = styled.footer`
  width: 100%;
  height: 6.75rem;

  display: flex;

  align-items: center;
  justify-content: space-between;

  background: var(--grey0);
  color: var(--whiteFixed);

  padding: 3.125rem;

  button {
    width: 3.313rem;
    height: 3.125rem;

    display: flex;

    align-items: flex-end;
    justify-content: space-around;

    background: var(--grey1);
    border: 1px solid var(--grey1);
    border-radius: 4px;
    color: var(--whiteFixed);

    font-family: "Inter";
    font-size: 1.95rem;
    font-weight: 600;

    :hover {
      background: var(--grey2);
    }
  }

  span {
    font-family: "Inter";
    font-size: 0.8rem;
    font-weight: 400;
  }

  div {
    width: 9.625rem;
    height: 1.388rem;

    display: flex;

    line-height: 0.5;

    h3 {
      font-family: "Inter";
      font-size: 1.25rem;
      font-weight: 600;
      margin-right: 5px;
    }

    div {
      display: flex;

      /* height: 100%; */
      width: 100%;

      align-items: flex-start;

      padding: 0.3rem;

      h4 {
        font-family: "Inter";
        font-size: 0.875rem;
        font-weight: 600;
      }
    }
  }
`;
