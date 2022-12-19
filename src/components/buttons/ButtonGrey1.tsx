import { IButton } from "../../interfaces/components/buttons";
import { ContentGrey1 } from "./style";

function ButtonGrey1({ children, ...rest }: IButton) {
  return (
    <ContentGrey1 type="button" {...rest}>
      {children}
    </ContentGrey1>
  );
}

export default ButtonGrey1;
