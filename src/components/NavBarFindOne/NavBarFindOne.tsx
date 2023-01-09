import { useState } from "react";
import { user } from "../announcement/user";
import ButtonWhite2 from "../buttons/ButtonWhite2";
import NavmodalCreateAnuncioBar from "../modalCreateAnuncio/index";
import { NavFind } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import api from "../api";

function NavFindSeller() {
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

    await api
      .post("http://localhost:3005/vehicles/", dados)
      .then((response) => console.log(response))
      .catch((err) => {
        alert("ocoreu um erro");
        console.error("ops!" + err);
      });
  };

  const [modal, setModal] = useState(false);
  const [tipoVeicle, setTipoVeicle] = useState("Carro");

  return (
    <NavFind>
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
      <ButtonWhite2
        onClick={() => {
          setModal(true);
        }}
      >
        Criar anuncio
      </ButtonWhite2>
    </NavFind>
  );
}

export default NavFindSeller;
