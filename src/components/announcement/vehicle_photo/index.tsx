import { vehicle } from "../vehicle";
import { ContentVehiclePhoto } from "./style";

function VehiclePhoto(): JSX.Element {
  return (
    <ContentVehiclePhoto>
      <img alt={vehicle.name} src={vehicle.img}></img>
    </ContentVehiclePhoto>
  );
}

export default VehiclePhoto;
