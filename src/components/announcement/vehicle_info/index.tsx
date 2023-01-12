import ButtonBrand1 from "../../buttons/ButtonBrand1";
import { vehicle } from "../vehicle";
import { ContentVehicleInfo } from "./style";

function VehicleInfo(): JSX.Element {
  return (
    <ContentVehicleInfo>
      <h2 className="vehicleName">{vehicle.name}</h2>
      <section className="vehicleInfo">
        <div className="yearKm">
          <p>{vehicle.year}</p>
          <p>{vehicle.km}km</p>
        </div>
        <span className="price">R$ {vehicle.price}00,00</span>
      </section>

      <ButtonBrand1>Comprar</ButtonBrand1>
    </ContentVehicleInfo>
  );
}

export default VehicleInfo;
