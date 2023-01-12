// import { vehicle } from "../vehicle";
import { ContentDescription } from "./style";


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api/api";

function Description(): JSX.Element {

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
    <ContentDescription>
      <h4>Descrição</h4>
      <p>{veicle.description}</p>
    </ContentDescription>
  );
}

export default Description;
