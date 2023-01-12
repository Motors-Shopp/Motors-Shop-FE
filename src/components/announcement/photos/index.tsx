// import { vehicle } from "../vehicle";
import { ContentPhotos } from "./style";

import { useEffect, useState } from "react";
import api from "../../../services/api/api";
import { useParams } from "react-router-dom";

function Photos(): JSX.Element {

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
    <>
      <ContentPhotos>
        <div>
          <h4>Fotos</h4>
        </div>

        <section>
          <div>
            <div>
              <img src={veicle.img} alt={veicle.name}></img>
            </div>
            <div>
              <img src={veicle.img} alt={veicle.name}></img>
            </div>
            <div>
              <img src={veicle.img} alt={veicle.name}></img>
            </div>
          </div>
          <div>
            <div>
              <img src={veicle.img} alt={veicle.name}></img>
            </div>
            <div>
              <img src={veicle.img} alt={veicle.name}></img>
            </div>
            <div>
              <img src={veicle.img} alt={veicle.name}></img>
            </div>
          </div>
        </section>
      </ContentPhotos>
    </>
  );
}

export default Photos;
