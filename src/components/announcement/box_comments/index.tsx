// import { comments } from "../comments";
import Comment from "./comment";
import { ContentComments } from "./style";

import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api/api";

// import jwt_decode from "jwt-decode";

function Comments(): JSX.Element {

  const [ListaDeComentarios, setListaDeComentarios] = useState<any>([]);
  
  const params:any =  useParams()

  useEffect(() => {

    api
    .get(`http://localhost:3005/comments/vehicles/${params.id}`)
    .then((response) => setListaDeComentarios(response.data))
    .catch((err) => {
      // alert("ocoreu um erro");
      console.error("ops!" + err);
    });
    
  },[params]);
  // http://localhost:3005/comments/vehicles/b55f9350-b41f-4ae8-8dd8-e29a0913769a
  // console.log(ListaDeComentarios)

  if(ListaDeComentarios.length === 0){
    return (
      <ContentComments>
        <h1>Sem comentarios</h1>
      </ContentComments>
    )
  }


  return (
    <ContentComments>
      <h4>Comentários</h4>
      {ListaDeComentarios.map((cmt:any) => (
        <Comment
          key={cmt.id}
          name={cmt.user.name}
          img={cmt.user.user_picture}
          date={cmt.date}
          text={cmt.comment}
        />
      ))}
    </ContentComments>
  );
}

export default Comments;
