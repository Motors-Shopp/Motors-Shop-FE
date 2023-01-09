import { useState } from "react";
import NavmodalCreateAnuncioBar from "../modalCreateAnuncio/index";
import { StyleNavBar } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import api from "../../services/api/api";

function NavBar(): JSX.Element {
  const formSchema = yup.object().shape({
    Titulo: yup.string().required("obrigatório"),
    Ano: yup.string().required(" obrigatório"),
    Quilometragem: yup.string().required(" obrigatório"),
    Preço: yup.string().required(" obrigatório"),
    descrisção: yup.string().required(" obrigatório"),
    imagemDaCapa: yup.string().required(" obrigatório"),
    ImagemDaGaleria1: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: any) => {
    const dados = {
      title: data.Titulo,
      year: data.Ano,
      kilometers: data.Quilometragem,
      price: data.Preço,
      description: data.descrisção,
      typeOfVehicle: tipoVeicle,
      img: data.imagemDaCapa,
      fristImg: data.ImagemDaGaleria1,
    };

    console.log(dados);

    // const ggg = {
    //   "title":"title",
    //   "year":"1200",
    //   "kilometers":"21",
    //   "price":"42",
    //   "description":"72",
    //   "typeOfVehicle":"typeOfVehicle",
    //   "img":"img",
    //   "fristImg":"fristImg"
    // }

    await api
      .post("http://localhost:3005/vehicles/", dados)
      .then((response) => console.log(response))
      .catch((err) => {
        alert("ocoreu um erro");
        console.error("ops!" + err);
      });

    // console.log(dados)
  };

  // const onSubmitFunction = async (data) => {
  //   await api.post("http://localhost:3001/cliente/",data)
  //     .then((response) =>history.push('/home/',{"mensagem":response.data}))
  //     .catch((err) => {
  //       alert("ocoreu um erro tente outro email");
  //       console.error("ops!" + err);
  //     });
  // };

  const [modal, setModal] = useState(false);
  const [tipoVeicle, setTipoVeicle] = useState("Carro");

  return (
    <StyleNavBar>
      {modal && (
        <NavmodalCreateAnuncioBar
          setTipoVeicle={setTipoVeicle}
          errors={errors}
          register={register}
          onSubmitFunction={onSubmitFunction}
          handleSubmit={handleSubmit}
          setModal={setModal}
        ></NavmodalCreateAnuncioBar>
      )}
      <div className="conteiner">
        <div className="title">
          <p className="Pdesktop">Velocidade e experiência em</p>
          <p className="Pdesktop">um lugar feito para você</p>

          <p className="Pmobile">Velocidade e</p>
          <p className="Pmobile">experiência em um</p>
          <p className="Pmobile">lugar feito para você</p>
        </div>
        <div className="description">
          Um ambiente feito para você explorar o seu melhor
        </div>
        <div className="categories">
          <button className="btnHome">Carros</button>
          <button className="btnHome">Motos</button>
          {/* <button className="btnHome" onClick={()=>{setModal(true)}}>Criar Anuncio</button> */}
        </div>
      </div>
    </StyleNavBar>
  );
}

export default NavBar;
