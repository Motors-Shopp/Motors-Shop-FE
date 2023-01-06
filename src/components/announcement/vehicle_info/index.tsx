import ButtonBrand1 from "../../buttons/ButtonBrand1";
import { vehicle } from "../vehicle";
import { ContentVehicleInfo } from "./style";

function VehicleInfo(): JSX.Element {
  return (
    <ContentVehicleInfo>
      <div>{vehicle.name}</div>
      <div>
        <div>
          <p>{vehicle.year}</p>
          <p>{vehicle.km}km</p>
        </div>
        <p>R${vehicle.price}00,00</p>
      </div>

      <ButtonBrand1>Comprar</ButtonBrand1>
    </ContentVehicleInfo>
  );
}

export default VehicleInfo;
