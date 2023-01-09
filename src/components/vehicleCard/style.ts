import styled from "styled-components";

// import { GlobalStyle } from "../../styles/global";

export const Card = styled.div`
  /* .card{
    background-color: aqua;
} */

  width: 19.5rem;
  height: 21.875rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: initial;
  padding: 4px 4px;

  .imgCard {
    /* background-color: #495057; */
    background-color: #e9ecef;
    display: flex;
    justify-content: center;
  }

  .imgCarro {
    display: flex;
    justify-content: center;
    background-color: #e9ecef;
    width: 220px;
    height: 110px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    margin-top: 10px;
  }

  .isActive-div {
    width: 35px;
    height: 15px;
    margin-top: 5px;
    margin-left: 15px;
    position: absolute;
    font-size: 10px;
    background-color: #5126ea;
    color: #e9ecef;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .title {
    /* background-color: #495057; */
    width: 240px;
    font-weight: 600;
    font-size: 1rem;
    font-family: "Lexend";
    color: var(--grey1);
  }

  .description {
    /* background-color: #495057; */
    width: 240px;
    font-family: "Inter";
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--grey2);
  }

  .priceKmYear {
    display: flex;
    justify-content: space-between;
    /* background-color: royalblue; */
    width: 240px;
    margin: 0;
  }

  .priceYear {
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
    width: 75px;
    height: 32px;
  }

  .imgProfile {
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }

  .nameAndphotoProfile {
    display: flex;
    justify-content: space-between;
    /* background-color: tan; */
    width: 65px;
    font-size: 0.875rem;
    text-align: center;
  }

  .nameProfile {
    margin-left: 3px;
    color: var(--grey2);
    font-weight: 500;
    font-family: "Inter";
  }

  .cardInfo {
    width: 30px;
    height: 20px;
    margin-top: 5px;
    margin-left: 5px;
    background-color: #edeafd;
    color: #5126ea;
    font-size: 12px;
  }
`;
