import ButtonBrand1 from "../../buttons/ButtonBrand1";
import { user } from "../user";
import { ContentBoxMessage } from "./style";

function BoxMessage() {
  return (
    <ContentBoxMessage>
      <div>
        <img alt={user.name} src={user.img}></img>
        <h5>{user.name}</h5>
      </div>
      <div>
        <input placeholder="deixe o seu comentário aqui"></input>
        <ButtonBrand1>Comentar</ButtonBrand1>
      </div>
    </ContentBoxMessage>
  );
}

export default BoxMessage;
