import ButtonBrand1 from "../../buttons/ButtonBrand1";
// import { vehicle } from "../vehicle";
import { ContentVehicleInfo } from "./style";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../../services/api/api";

function VehicleInfo(): JSX.Element {

  const params:any =  useParams()

  const [vehicle, setveicle] = useState<any>([]);

  useEffect(() => {

    Api
    .get(`http://localhost:3005/vehicles/${params.id}`)
    .then((response) => setveicle(response.data))
    
    .catch((err) => {
      // alert("ocoreu um erro");
      console.error("ops!" + err);
    });
    
  },[params]);

  // console.log(veicle)

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
