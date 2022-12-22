import styled from "styled-components";

export const ContentPhotos = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 27.5rem;
  height: 23.563rem;

  background: var(--grey10);

  margin: 0;

  div {
    display: flex;

    width: 27rem;
    height: 1.563rem;

    padding: 2.5rem;

    h4 {
      color: var(--grey0);
      font-family: "Lexend";
      font-weight: 600;
    }
  }

  section {
    display: flex;
    flex-direction: column;

    width: 22rem;
    height: 15.5rem;

    justify-content: space-between;

    div {
      width: 22rem;
      height: 6.75rem;
      padding: 0;

      display: flex;

      justify-content: space-between;

      div {
        display: flex;

        width: 6.75rem;
        height: 6.75rem;

        align-items: center;
        justify-content: center;

        background: var(--grey7);

        img {
          width: 5.889rem;
          height: 3.378rem;
        }
      }
    }
  }
`;
