import ButtonBlack1 from "../../buttons/ButtonBlack1";
// import { user } from "../user";
import { ContentBio } from "./style";

// import jwt_decode from "jwt-decode";


import { useEffect, useState } from "react";
import api from "../../../services/api/api";
import { useParams } from "react-router-dom";

function Bio(): JSX.Element {

  const params:any =  useParams()

  // const [users, setUsers] = useState<any>([]);
  const [veicle, setveicle] = useState<any>([]);


  useEffect(() => {

    // const token:any = localStorage.getItem("TokenMotorsShop");

    // if (token) {

    // const decode:any = jwt_decode(token)

      // api
      // .get(`http://localhost:3005/users/${decode.sub}`)
      // .then((response) => setUsers(response.data))
      // .catch((err) => {
      //   // alert("ocoreu um erro");
      //   console.error("ops!" + err);

      // });

      api
      .get(`http://localhost:3005/vehicles/${params.id}`)
      .then((response) => setveicle(response.data.seller))
      
      .catch((err) => {
        // alert("ocoreu um erro");
        console.error("ops!" + err);
      });
  // }

  },[params]);

  return (
    <>
      <ContentBio>
        <img alt={veicle.name} src={veicle.user_picture}></img>
        <h4>{veicle.name}</h4>
        <div>
          <p>{veicle.bio}</p>
        </div>
        <ButtonBlack1>Ver todos anuncios</ButtonBlack1>
      </ContentBio>
    </>
  );
}

export default Bio;
