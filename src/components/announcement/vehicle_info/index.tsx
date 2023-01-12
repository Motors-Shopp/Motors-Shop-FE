import ButtonBrand1 from "../../buttons/ButtonBrand1";
// import { vehicle } from "../vehicle";
import { ContentVehicleInfo } from "./style";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api/api";

function VehicleInfo(): JSX.Element {

  const params:any =  useParams()

  const [veicle, setveicle] = useState<any>([]);

  useEffect(() => {

    api
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
      <div>{veicle.title}</div>
      <div>
        <div>
          <p>{veicle.year}</p>
          <p>{veicle.kilometers}km</p>
        </div>
        <p>R${veicle.price}00,00</p>
      </div>

      <ButtonBrand1>Comprar</ButtonBrand1>
    </ContentVehicleInfo>
  );
}

export default VehicleInfo;
