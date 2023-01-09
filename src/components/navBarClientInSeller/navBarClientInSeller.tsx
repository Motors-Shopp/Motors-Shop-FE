import { user } from "../announcement/user";
import { NavClientInSeller } from "./style";

function NavClientSeller() {
  return (
    <NavClientInSeller>
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
    </NavClientInSeller>
  );
}

export default NavClientSeller;
