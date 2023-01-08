import { ggg } from "../../services/api/api";
import { Card } from "./style";

// import { GlobalStyle } from "../../styles/global";

function VehicleCard(): any {

  return ggg.map((produto, index) => (
    <Card>
      <div className="imgCard">
        <div className="isActive-div">Ativo</div>
        <img className="imgCarro" alt={produto.name} src={produto.imagen}></img>
      </div>
      <div className="title">{produto.name}</div>
      <div className="description">{produto.descrisao}</div>

      <div className="nameAndphotoProfile">
        <img className="imgProfile" alt={produto.name} src={produto.imgPerfil}></img>
        <div className="nameProfile">{produto.nameOfUser}</div>
      </div>

      <div className="priceKmYear">
        <div className="priceYear">
          <div className="cardInfo">{produto.km} KM</div>
          <div className="cardInfo">{produto.ano}</div>
        </div>
        <div>R${produto.preco}</div>
      </div>
      <br />
    </Card>
  ));
}

export default VehicleCard;
