import { IButton } from "../../interfaces/components/buttons";
import { ContentSucess } from "./style";

function ButtonSucess({ children, ...rest }: IButton) {
  return (
    <ContentSucess type="button" {...rest}>
      {children}
    </ContentSucess>
  );
}

export default ButtonSucess;
