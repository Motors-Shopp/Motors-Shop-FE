import { vehicle } from "../vehicle";
import { ContentDescription } from "./style";

function Description(): JSX.Element {
  return (
    <ContentDescription>
      <h4>Descrição</h4>
      <p>{vehicle.description}</p>
    </ContentDescription>
  );
}

export default Description;
