import { Card } from "./style";

// import { GlobalStyle } from "../../styles/global";

function VehicleCard(): any {
  const ggg = [
    {
      name: "cyberpunk",
      km: "0",
      ano: "2021",
      preco: "700.000,00",
      nameOfUser: "suze",
      descrisao: "is simply dummy text of the printing",
      imgPerfil:
        "https://s2.glbimg.com/s5qbLhszZPNbfGmtPpqVEs65E6g=/0x0:1980x1121/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/N/p/VM7L3XRr2LKluhDgfJqg/fiatpulse-frontal.jpeg",
      imagen:
        "https://cdn.dooca.store/1841/files/carro-cyberpunk2.png?v=1608241638&webp=0",
    },
    {
      name: "fiat",
      km: "0",
      preco: "20.000,00",
      ano: "2020",
      nameOfUser: " amanda",
      descrisao: "is simply dummy text of the printing",
      imgPerfil:
        "https://s2.glbimg.com/s5qbLhszZPNbfGmtPpqVEs65E6g=/0x0:1980x1121/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/N/p/VM7L3XRr2LKluhDgfJqg/fiatpulse-frontal.jpeg",
      imagen:
        "https://s2.glbimg.com/s5qbLhszZPNbfGmtPpqVEs65E6g=/0x0:1980x1121/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/N/p/VM7L3XRr2LKluhDgfJqg/fiatpulse-frontal.jpeg",
    },
    {
      name: "bugati chion",
      km: "0",
      preco: "100.000,00",
      nameOfUser: " daniel",
      ano: "2022",
      descrisao: "is simply dummy text of the printing",
      imgPerfil:
        "https://s2.glbimg.com/s5qbLhszZPNbfGmtPpqVEs65E6g=/0x0:1980x1121/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/N/p/VM7L3XRr2LKluhDgfJqg/fiatpulse-frontal.jpeg",
      imagen:
        "https://s2.glbimg.com/YuSV6C_ZWJs52LY8pUc_JpLK9M8=/0x0:940x628/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/i/X/19YaO2RzKVZ0PNDZXgbA/2016-02-29-bugatti-chiron-10.jpg",
    },
    {
      name: "ferrari",
      km: "0",
      preco: "60.000,00",
      ano: "2019",
      nameOfUser: " ggg",
      descrisao: "is simply dummy text of the printing",
      imgPerfil:
        "https://s2.glbimg.com/s5qbLhszZPNbfGmtPpqVEs65E6g=/0x0:1980x1121/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/N/p/VM7L3XRr2LKluhDgfJqg/fiatpulse-frontal.jpeg",
      imagen:
        "https://s3.amazonaws.com/www.revistacarro.com.br/static/images/uploads/ferrari-f12tdf-4_txt_620x467.jpg",
    },
  ];

  return ggg.map((produto, index) => (
    <Card>
      <div className="imgCard">
        <div className="isActive-div">Ativo</div>
        <img className="imgCarro" alt={produto.name} src={produto.imagen}></img>
      </div>
      <div className="title">{produto.name}</div>
      <div className="description">{produto.descrisao}</div>

      <div className="nameAndphotoProfile">
        <img
          className="imgProfile"
          alt={produto.name}
          src={produto.imgPerfil}
        ></img>
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
