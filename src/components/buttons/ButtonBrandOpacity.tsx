import { IButton } from "../../interfaces/components/buttons";
import { ContentOpacity } from "./style";

function ButtonOpacity({ children, ...rest }: IButton) {
  return (
    <ContentOpacity type="button" {...rest}>
      {children}
    </ContentOpacity>
  );
}

export default ButtonOpacity;
