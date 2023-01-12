import styled from "styled-components";

export const PageHome = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 15px;
  text-align: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;

  padding: 1rem 40px;

  background: linear-gradient(180deg, var(--grey8) 31.26%, var(--grey8) 100%);

  .vehicles {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
    overflow-x: scroll;
    
    ::-webkit-scrollbar {
        background-color: var(--grey8);
        border-radius: 25px;
        height: 8px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--grey5);
        border: 3px solid var(--grey5);
        border-radius: 25px;
    }
  }

  h2 {
    margin-top: 6rem;
    font-family: "Lexend";
  }
`;
