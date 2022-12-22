import { StyleModalCreateAnuncio } from "./style";

// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

function modalCreateAnuncio({ setModal }: any): any {
 

  return (
    <StyleModalCreateAnuncio>
        <div className="barCriarAnuncio">
            <p className="textAjusting1">Criar anuncio</p>
            <div
            onClick={() => {
                setModal(false);
            }}
            className="closeModal"
            >
            <p>X</p>
            </div>
        </div>
        <div className="tipoAnuncio">
            <p className="textAjusting1">tipo de anuncio</p>
        </div>
        <div className="conteinerBtnModal">
            <button className="btnModal">Venda</button>
            <button className="btnModal">Leilão</button>
        </div>
        <p className="textAjusting1">informações do veiculo</p>
        <p className="textAjusting1">Titulo</p>
        <input placeholder="titulo" className="inputModal1" type="text" />
        <div className="anoKMPreco">
            <div>
            <p>Ano</p>
            <input placeholder="Ano" className="inputModal2" type="text" />
            </div>
            <div>
            <p>Quilometragem</p>
            <input
                placeholder="Quilometragem"
                className="inputModal2"
                type="text"
            />
            </div>
            <div>
            <p>Preço</p>
            <input placeholder="Preço" className="inputModal2" type="text" />
            </div>
        </div>
        <p className="textAjusting1">descrisção</p>
        <input placeholder="descrisção" className="inputModal3" type="text" />
        <p className="textAjusting1">tipo de veiculo</p>
        <div className="conteinerBtnModal">
            <button className="btnModal">Carro</button>
            <button className="btnModal">Moto</button>
        </div>
        <p className="textAjusting1">imagem da capa</p>
        <input placeholder="imagem da capa" className="inputModal1" type="text" />
        <p className="textAjusting1">1* imagem da galeria</p>
        <input
            placeholder="1* imagem da galeria"
            className="inputModal1"
            type="text"
        />
        <div className="caixaDeCampoParaImagem">
            <p>Adicionar campo para a imagem da galeria</p>
        </div>
        <div className="conteinerCaixaCriarANDcancelar">
            <button
            onClick={() => {
                setModal(false);
            }}
            className="btnmodal2"
            >
            Cancelar
            </button>
            <button type="submit" className="btnmodal3">
            Criar Anuncio
            </button>
        </div>
    </StyleModalCreateAnuncio>
  );
}

export default modalCreateAnuncio;
