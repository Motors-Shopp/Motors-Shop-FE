import { CadastroStyle } from "./style";

import React from "react";

import { useState } from "react";

import Header from "../header/index";


import {useHistory} from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api/api";

function CadastroFrom(): JSX.Element {
  const [is_seller, setIs_seller] = useState(false);
  const [is_client, setIs_client] = useState(true);

  const history = useHistory()

  const formSchema = yup.object().shape({
    Nome: yup.string().required("Nome obrigatório"),
    Email: yup.string().required("senha obrigatório"),
    cpf: yup.string().required("senha obrigatório"),
    Celular: yup.string().required("senha obrigatório"),
    Data_de_Nascimento: yup.string().required("senha obrigatório"),
    Descrição: yup.string().required("senha obrigatório"),
    CEP: yup.string().required("senha obrigatório"),
    Estado: yup.string().required("senha obrigatório"),
    Cidade: yup.string().required("senha obrigatório"),
    Numero: yup.string().required("senha obrigatório"),
    Complemento: yup.string().required("senha obrigatório"),
    Senha: yup.string().required("senha obrigatório"),
    Confirmar_Senha: yup.string().required("senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: any) => {
    // const dados = {
    //   "name": data.Nome,
    //   "email": data.Email,
    //   "cpf": data.cpf,
    //   "cellphone": data.Celular,
    //   "birthdate": data.Data_de_Nascimento,
    //   "bio": "vazio",
    //   "is_seller": is_seller,
    //   "is_client": is_client,
    //   "address": {
    //     "street": data.Estado,
    //     "number": data.Numero,
    //     "complement": data.Complemento,
    //     "district": "district",
    //     "state": data.Estado,
    //   },
    //   "password": data.Senha,
    // };



    const gggg = {
      "name": data.Nome,
      "email": data.Email,
      "cpf": data.cpf,
      "cellphone": data.Celular,
      "birthdate": "1993-04-23",
      "bio": "vazio",
      "is_seller": is_seller,
      "is_client": is_client,
      "password": data.Senha,
      "address": {
        "street": data.Estado,
        "number": data.Numero,
        "complement": data.Complemento,
        "district": "district",
        "state": data.Estado,
      },
    }

    // console.log(dados)
    // console.log(data.Data_de_Nascimento)

    await Api
      .post("http://localhost:3005/users", gggg)
      .then((response) => history.push("/login"))
      .catch((err) => {
        // alert("ocoreu um erro");
        console.error("ops!" + err);
      });
  };

  return (
    <CadastroStyle>
      <Header></Header>
      <div className="containerCadastro">
        <form onSubmit={handleSubmit(onSubmitFunction)} className="boxCadastro">
          <div className="textAjustingCadastro2">Cadastro</div>
          <div className="textAjustingCadastro1">Informações pessoais</div>
          <div className="textAjustingCadastro1">Nome</div>
          <div className="conteinerCadastro">
            <input
              {...register("Nome")}
              placeholder="Nome"
              className="inputCadastro1"
              type="text"
            />
          </div>
          <div className="textAjustingCadastro1">Email</div>
          <div className="conteinerCadastro">
            <input
              {...register("Email")}
              placeholder="Email"
              className="inputCadastro1"
              type="text"
            />
          </div>
          <div className="textAjustingCadastro1">cpf</div>
          <div className="conteinerCadastro">
            <input
              {...register("cpf")}
              placeholder="cpf"
              className="inputCadastro1"
              type="text"
            />
          </div>
          <div className="textAjustingCadastro1">Celular</div>
          <div className="conteinerCadastro">
            <input
              {...register("Celular")}
              placeholder="Celular"
              className="inputCadastro1"
              type="text"
            />
          </div>
          <div className="textAjustingCadastro1">Data_de_Nascimento</div>
          <div className="conteinerCadastro">
            <input
              {...register("Data_de_Nascimento")}
              placeholder="Data_de_Nascimento"
              className="inputCadastro1"
              type="text"
            />
          </div>
          <div className="textAjustingCadastro1">Descrição</div>
          <div className="conteinerCadastro">
            <input
              {...register("Descrição")}
              placeholder="Descrição"
              className="inputCadastro1"
              type="text"
            />
          </div>
          <div className="textAjustingCadastro1">Informações endereço</div>
          <div className="textAjustingCadastro1">CEP</div>

          <div className="conteinerCadastro">
            <input
              {...register("CEP")}
              placeholder="CEP"
              className="inputCadastro1"
              type="text"
            />
          </div>

          <div className="conteinerCadastro4">
            <div className="conteinerCadastro3">
              <div className="textAjustingCadastro3">Estado</div>
              <input
                {...register("Estado")}
                placeholder="Estado"
                className="inputCadastro2"
                type="text"
              />
            </div>

            <div className="conteinerCadastro3">
              <div className="textAjustingCadastro3">Cidade</div>
              <input
                {...register("Cidade")}
                placeholder="Cidade"
                className="inputCadastro2"
                type="text"
              />
            </div>
          </div>

          <div className="conteinerCadastro4">
            <div className="conteinerCadastro3">
              <div className="textAjustingCadastro3">Numero</div>
              <input
                {...register("Numero")}
                placeholder="Numero"
                className="inputCadastro2"
                type="text"
              />
            </div>

            <div className="conteinerCadastro3">
              <div className="textAjustingCadastro3">Complemento</div>
              <input
                {...register("Complemento")}
                placeholder="Complemento"
                className="inputCadastro2"
                type="text"
              />
            </div>
          </div>

          <div className="textAjustingCadastro1">Tipo de conta</div>

          <div className="conteinerCadastro5">
            <button
              onClick={() => {
                setIs_seller(true);
                setIs_client(false);
              }}
              className="buttonCadastro01"
            >
              Comprador
            </button>
            <button
              onClick={() => {
                setIs_client(true);
                setIs_seller(false);
              }}
              className="buttonCadastro01"
            >
              Anunciante
            </button>
          </div>

          <div className="textAjustingCadastro1">Senha</div>

          <div className="conteinerCadastro">
            <input
              {...register("Senha")}
              placeholder="Senha"
              className="inputCadastro1"
              type="text"
            />
          </div>

          <div className="textAjustingCadastro1">Confirmar Senha</div>

          <div className="conteinerCadastro">
            <input
              {...register("Confirmar_Senha")}
              placeholder="Confirmar_Senha"
              className="inputCadastro1"
              type="text"
            />
          </div>

          <div className="conteinerCadastro6">
            <button className="buttonCadastro02">Finalizar Cadastro</button>
          </div>
        </form>
      </div>
    </CadastroStyle>
  );
}

export default CadastroFrom;
