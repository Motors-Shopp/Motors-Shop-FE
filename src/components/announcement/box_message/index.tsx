// import ButtonBrand1 from "../../buttons/ButtonBrand1";
// import { user } from "../user";
import { ContentBoxMessage } from "./style";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api/api";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import jwt_decode from "jwt-decode";

function BoxMessage(): JSX.Element {
  // const [ListaDeComentarios, setListaDeComentarios] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  // http://localhost:3005/comments/b55f9350-b41f-4ae8-8dd8-e29a0913769a/4f485e31-3a93-4789-b35e-330dfde4ba1c
  const params: any = useParams();

  const token:any = localStorage.getItem("TokenMotorsShop");
    

  useEffect(() => {

   
    if (token) {


    const decode:any = jwt_decode(token)

    api
      .get(`http://localhost:3005/users/${decode.sub}`)
      .then((response) => setUsers(response.data))
      .catch((err) => {
        // alert("ocoreu um erro");
        console.error("ops!" + err);
      });

    }

  }, [params,token]);

  const formSchema = yup.object().shape({
    comment: yup.string().required("comment obrigatório"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: any) => {

    const token:any = localStorage.getItem("TokenMotorsShop");

    const decode:any = jwt_decode(token)

    api
    .post(`http://localhost:3005/comments/${params.id}/${decode.sub}`,data)
    .then((response) => console.log(response.data))
    .catch((err) => {
      // alert("ocoreu um erro");
      console.error("ops!" + err);
    });

    // console.log(data)

  };
  if (token){

    return (
      <ContentBoxMessage>
        <div>
          <img alt={users.name} src={users.user_picture}></img>
          <h5>{users.name}</h5>
        </div>
        <form className="box" onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            {...register("comment")}
            className="input1"
            type="text"
            placeholder="deixe o seu comentário aqui"
          ></input>
          <button>Comentar</button>
        </form>
      </ContentBoxMessage>
    );
    
  }

  return (
    <ContentBoxMessage>
      <h1>não fez login</h1>
    </ContentBoxMessage>
  );
}

export default BoxMessage;
