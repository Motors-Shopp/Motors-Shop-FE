import { IButton } from "../../interfaces/components/buttons";
import { ContentWhite2 } from "./style";

function ButtonWhite2({ children, ...rest }: IButton) {
  return (
    <ContentWhite2 type="button" {...rest}>
      {children}
    </ContentWhite2>
  );
}

export default ButtonWhite2;
