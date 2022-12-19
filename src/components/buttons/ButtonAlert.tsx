import { IButton } from "../../interfaces/components/buttons";
import { ContentAlert } from "./style";

function ButtonAlert({ children, ...rest }: IButton) {
  return (
    <ContentAlert type="button" {...rest}>
      {children}
    </ContentAlert>
  );
}

export default ButtonAlert;
