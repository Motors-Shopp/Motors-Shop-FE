import styled from "styled-components";

export const PageHome = styled.nav`
  display: flex;

  align-items: flex-start;
  justify-content: space-evenly;
  text-align: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;

  /* overflow-y: scroll; */

  padding: 0.5rem 0.5rem;

  background: linear-gradient(180deg, #f1f3f5 31.26%, #f1f3f5 100%);

  section {
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;

    overflow-x: scroll;
    margin-top: 3rem;

    div {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  h2 {
    margin-top: 6rem;
  }
`;
