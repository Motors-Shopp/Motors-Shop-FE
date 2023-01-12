import { ggg } from "../../services/api/api";
import { Card } from "./style";

function VehicleCard(): any {
    return ggg.map((produto) => (
        <Card>
            <div className="imgCard">
                <img className="imgCarro" alt={produto.name} src={produto.imagen}></img>
            </div>
            <section className="cardContent">
                <h3 className="title">{produto.name}</h3>
                <p className="description">{produto.descrisao}</p>

                <div className="ownerAndPrice">
                    <div className="nameAndphotoProfile">
                        <img
                            className="imgProfile"
                            alt={produto.name}
                            src={produto.imgPerfil}
                        ></img>
                        <p className="nameProfile">{produto.nameOfUser}</p>
                    </div>

                    <div className="priceKmYear">
                        <div className="priceYear">
                            <span className="cardInfo">{produto.km} KM</span>
                            <span className="cardInfo">{produto.ano}</span>
                        </div>
                        <span>R$ {produto.preco}</span>
                    </div>
                </div>
            </section>
        </Card>
    ));
}

export default VehicleCard;
