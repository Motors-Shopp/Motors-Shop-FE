import { Card } from "./style";

import api from "../../services/api/api";

import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

function VehicleCard(type: any): any {

    const history = useHistory()

    const [listCar, setlistCar] = useState<any>([]);
    const [listMotorbike, setlistMotorbike] = useState<any>([]);
    // const [dadosDoVendedor, setDadosDoVendedor] = useState<any>([]);

    useEffect(() => {

        api
            .get("http://localhost:3005/vehicles/car")
            .then((response) => setlistCar(response.data))

            .catch((err) => {
                // alert("ocoreu um erro");
                console.error("ops!" + err);
            });

        api
            .get("http://localhost:3005/vehicles/motorbike")
            .then((response) => setlistMotorbike(response.data))

            .catch((err) => {
                // alert("ocoreu um erro");
                console.error("ops!" + err);
            });

    }, []);

    function IrPageAnuncio(id: any): any {

        history.push(`/Announcement/${id}`)

    }

    if (type.type === "motorbike") {

        let listaDeDadosVendedor2: any = []

        if (listMotorbike) {
            for (let i = 0; i < listMotorbike.length; i++) {
                listaDeDadosVendedor2.push(listMotorbike[i].seller)
            }
        }

        return listMotorbike.map((produto: any, index: any) => (
            <Card onClick={() => { IrPageAnuncio(produto.id) }} key={index}>
                <div className="imgCard">
                    <img className="imgCarro" alt={produto.title} src={produto.fristImg}></img>
                </div>
                <section className="cardContent">
                    <h3 className="title">{produto.title}</h3>
                    <p className="description">{produto.description}</p>

                    <div className="nameAndphotoProfile">
                        <img
                            className="imgProfile"
                            alt={listaDeDadosVendedor2[index].name}
                            src={listaDeDadosVendedor2[index].user_picture}
                        ></img>
                        <div className="nameProfile">{listaDeDadosVendedor2[index].name}</div>
                    </div>

                    <div className="priceKmYear">
                        <div className="priceYear">
                            <span className="cardInfo">{produto.kilometers} KM</span>
                            <span className="cardInfo">{produto.year}</span>
                        </div>
                        <span>R${produto.price}</div>
                    </div>
                </section>
            </Card>
        ))

    }
    else {

        let listaDeDadosVendedor: any = []

        if (listCar) {
            for (let i = 0; i < listCar.length; i++) {
                listaDeDadosVendedor.push(listCar[i].seller)
            }
        }

        return listCar.map((produto: any, index: any) => (
            <Card onClick={() => { IrPageAnuncio(produto.id) }} key={index}>
                <div className="imgCard">
                    <img className="imgCarro" alt={produto.title} src={produto.fristImg}></img>
                </div>
                <section className="cardContent">

                    <h3 className="title">{produto.title}</h3>
                    <p className="description">{produto.description}</p>

                    <div className="nameAndphotoProfile">
                        <img
                            className="imgProfile"
                            alt={listaDeDadosVendedor[index].name}
                            src={listaDeDadosVendedor[index].user_picture}
                        ></img>
                        <div className="nameProfile">{listaDeDadosVendedor[index].name}</div>
                    </div>

                    <div className="priceKmYear">
                        <div className="priceYear">
                            <span className="cardInfo">{produto.kilometers} KM</span>
                            <span className="cardInfo">{produto.year}</span>
                        </div>
                        <span>R${produto.price}</span>
                    </div>
                </section>
            </Card>
        ))

    }


}

export default VehicleCard;
