import { user } from "../announcement/user";
import { vehicle } from "../announcement/vehicle";
import { ContentCard } from "./style";

function Card() {
  return (
    <ContentCard>
      <div className="groupImg">
        <img src={vehicle.img} alt={vehicle.name} />
      </div>

      <div className="title">{vehicle.name}</div>
      <p>{vehicle.description}</p>
      <div>
        <img src={user.img} alt={user.name} />
        <h5>{user.name}</h5>
      </div>
      <section className="footerCard">
        <div className="groupTicket">
          <div className="ticket">
            <h5 className="titleTicket">{vehicle.km}</h5>
            <h5 className="titleTicket">{vehicle.year}</h5>
          </div>
        </div>
        <h6>R$ {vehicle.price}00.000</h6>
      </section>
    </ContentCard>
  );
}

export default Card;
