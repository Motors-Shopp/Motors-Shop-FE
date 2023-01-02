import styled from "styled-components";

export const PageAnnouncement = styled.nav`
  display: flex;

  align-items: flex-start;
  justify-content: space-evenly;
  text-align: center;
  height: 100%;
  flex-direction: row;

  /* overflow-y: scroll; */

  padding: 4rem 4rem;

  background: linear-gradient(
    180deg,
    #4529e6 31.25%,
    #f1f3f5 31.26%,
    #f1f3f5 100%
  );
`;

export const ArticleBioAndPhotos = styled.article`
  display: flex;
  flex-direction: column;

  width: 27.5rem;
  /* height: 52.313rem; */

  padding: 1rem 0 1rem 0;
`;

export const DivInfosAndComments = styled.div`
  display: flex;
  flex-direction: column;

  section,
  div:first-of-type {
    margin: 1rem 0 1rem 0;
  }

  width: 47rem;
`;
