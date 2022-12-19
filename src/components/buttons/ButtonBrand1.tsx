import { IButton } from "../../interfaces/components/buttons";
import { ContentBrand1 } from "./style";

function ButtonBrand1({ children, ...rest }: IButton) {
  return (
    <ContentBrand1 type="button" {...rest}>
      {children}
    </ContentBrand1>
  );
}

export default ButtonBrand1;
