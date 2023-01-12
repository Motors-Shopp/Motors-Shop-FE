import styled from "styled-components";

export const PageAnnouncement = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: center;
  height: 100%;
  flex-direction: row;
  padding: 4rem 4rem;
  /* overflow-y: scroll; */
  background: linear-gradient( 180deg, var(--brand1) 31.25%, var(--grey8) 31.26%, var(--grey8) 100% );
`;

export const ArticleBioAndPhotos = styled.article`
  display: flex;
  flex-direction: column;
  width: 27.5rem;
  padding: 1rem 0 1rem 0;
`;

export const DivInfosAndComments = styled.div`
  display: flex;
  flex-direction: column;
  section,
  div {
    margin: 1rem 0 1rem 0;
  }

  width: 47rem;
`;
