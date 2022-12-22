import ButtonBlack1 from "../../buttons/ButtonBlack1";
import { user } from "../user";
import { ContentBio } from "./style";

function Bio(): JSX.Element {
  return (
    <>
      <ContentBio>
        <img alt={user.name} src={user.img}></img>
        <h4>{user.name}</h4>
        <div>
          <p>{user.bio}</p>
        </div>
        <ButtonBlack1>Ver todos anuncios</ButtonBlack1>
      </ContentBio>
    </>
  );
}

export default Bio;
