import { LoginStyle } from "./style";

import React from 'react';

import {useHistory} from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "../header/index";

import api from "../api";

function LoginFrom (): JSX.Element{

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        senha: yup.string().required("senha obrigatório"),
      });

      const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });

      const onSubmitFunction = async (data: any) => {

        const dados = {
            "email": data.name,
            "password": data.senha
        }

        // {
        //     "email": "loolacerda@gmail.com",
        //     "password": "1234"
        // }

        await api
        .post("http://localhost:3005/login", dados)
        .then((response) => history.push("/"))
        .catch((err) => {
          alert("ocoreu um erro");
          console.error("ops!" + err);
        });
    };

    return (
        <LoginStyle>
            <Header></Header>
            <div className="container">
                <form className="box" onSubmit={handleSubmit(onSubmitFunction)}>
                    <div className="textAjusting2">
                        <span className="ajustingText1">Login</span>
                    </div>
                    <div className="textAjusting1">Usuario</div>
                    <div className="conteiner2">
                        <input {...register("name")} placeholder="name" className="input1" type="text" />
                    </div>
                    <div className="textAjusting1">Senha</div>
                    <div className="conteiner2">
                        <input {...register("senha")} placeholder="senha" className="input1" type="text" />
                    </div>
                    <div className="conteiner3">
                        <span className="textajusting3">Esqueci minha senha</span>
                    </div>
                    <div className="conteiner2">
                        <button className="button1">Entrar</button>
                    </div>
                    <div className="conteiner4">
                        <span>Ainda não possui uma conta?</span>
                    </div>
                    <div className="conteiner2">
                        <button onClick={()=>{history.push("/cadastro")}} className="button2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </LoginStyle>
    )
}


export default LoginFrom;
