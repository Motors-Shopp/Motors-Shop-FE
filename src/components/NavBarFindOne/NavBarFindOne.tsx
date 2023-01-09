import { user } from "../announcement/user";
import ButtonWhite2 from "../buttons/ButtonWhite2";
import { NavFind } from "./style";

function NavFindSeller() {
  return (
    <NavFind>
      <div className="infos">
        <img src={user.img} alt={user.name} />
        <div className="detailsSeller">
          <div className="name">
            <h6>{user.name}</h6>
          </div>
          <div className="ticket">
            <h6>Anunciante</h6>
          </div>
        </div>
      </div>
      <p>{user.bio}</p>
      <ButtonWhite2>Criar anuncio</ButtonWhite2>
    </NavFind>
  );
}

export default NavFindSeller;
