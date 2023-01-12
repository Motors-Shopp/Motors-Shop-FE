import { StyleHeader } from "./style";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


import {useHistory} from "react-router-dom";

// import jwt_decode from "jwt-decode";

import api from "../../services/api/api";

import jwt_decode from "jwt-decode";

function Header(): any {

  const [checkLogado, setCheckLogado] = useState(false);
  const [listaUsers, setlistaUsers] = useState<any>([]);

  const history =  useHistory()

  useEffect(() => {

    const token:any = localStorage.getItem("TokenMotorsShop");

    if (token) {
      setCheckLogado(true);

    const decode:any = jwt_decode(token)


      api
      .get(`http://localhost:3005/users/${decode.sub}`)
      .then((response) => setlistaUsers(response.data))
      .catch((err) => {
        // alert("ocoreu um erro");
        console.error("ops!" + err);

      });
  }
    
  },[]);
  
  if (checkLogado === false) {
    return (
      <StyleHeader>
        <header>
            <div className="logo">
                <h1 >Motors</h1>
                <span className="logoShop"> shop </span>
            </div>
            <div className="usersnameInternal2Semlogin">
                <div onClick={()=>{history.push("/")}} className="textAjusting01Semlogin">Fazer Login</div>
                <button onClick={()=>{history.push("/cadastro")}} className="buttonSemlogin01">Cadastrar</button>
            </div>
          </div>
          {/* mobile */}
          <div className="mobileMenu">
            <span>☰</span>
          </div>
        </header>
      </StyleHeader>
    )}
    else{
            <div className="headersCategorysAndUsername">
                <div className="categories">
                    <p>Carros</p>
                    <p>Motos</p>
                </div>
                <div className="usersname">
                    <img
                      className="imgProfile"
                      alt={listaUsers.name}
                      src={
                        listaUsers.user_picture
                      }
                    ></img>
                    <p>{listaUsers.name}</p>
                </div>

            </div>
            {/* mobile */}
            <div className="mobileMenu">
                <span>☰</span>
              </div>
            </header>
          </StyleHeader>
        };
        
      }

        </header>
    </StyleHeader>
    
}

export default Header;
