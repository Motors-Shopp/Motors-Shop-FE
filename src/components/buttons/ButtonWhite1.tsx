import { IButton } from "../../interfaces/components/buttons";
import { ContentWhite1 } from "./style";

function ButtonWhite1({ children, ...rest }: IButton) {
  return (
    <ContentWhite1 type="button" {...rest}>
      {children}
    </ContentWhite1>
  );
}

export default ButtonWhite1;
