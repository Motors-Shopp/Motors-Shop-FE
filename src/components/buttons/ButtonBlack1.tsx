import { IButton } from "../../interfaces/components/buttons";
import { ContentBlack1 } from "./style";

function ButtonBlack1({ children, ...rest }: IButton) {
  return (
    <ContentBlack1 type="button" {...rest}>
      {children}
    </ContentBlack1>
  );
}

export default ButtonBlack1;
