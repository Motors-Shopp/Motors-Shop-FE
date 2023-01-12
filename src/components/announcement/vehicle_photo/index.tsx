// import { vehicle } from "../vehicle";
import { ContentVehiclePhoto } from "./style";

import { useEffect, useState } from "react";

import api from "../../../services/api/api";

import { useParams } from "react-router-dom";

function VehiclePhoto(): JSX.Element {

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


  return (
    <ContentVehiclePhoto>
      <img alt={veicle.name} src={veicle.img}></img>
    </ContentVehiclePhoto>
  );
}

export default VehiclePhoto;
