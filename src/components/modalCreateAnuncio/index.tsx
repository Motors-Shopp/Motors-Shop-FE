import { StyleModalCreateAnuncio } from "./style";

function modalCreateAnuncio({ setTipoVeicle,setModal,handleSubmit,onSubmitFunction,register,errors }: any): any {

  return (
    <StyleModalCreateAnuncio>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        {/* <input placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <br></br>
        <button className="btnModal" type="submit"></button>
       */}
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
        <input {...register("Titulo")} placeholder="titulo" className="inputModal1" type="text" />
        <div className="anoKMPreco">
            <div>
            <p>Ano</p>
            <input {...register("Ano")} placeholder="Ano" className="inputModal2" type="text" />
            </div>
            <div>
            <p>Quilometragem</p>
            <input
                placeholder="Quilometragem"
                className="inputModal2"
                type="text"
                {...register("Quilometragem")}
            />
            </div>
            <div>
            <p>Preço</p>
            <input {...register("Preço")} placeholder="Preço" className="inputModal2" type="text" />
            </div>
        </div>
        <p className="textAjusting1">descrisção</p>
        <input {...register("descrisção")} placeholder="descrisção" className="inputModal3" type="text" />
        <p className="textAjusting1">tipo de veiculo</p>
        <div className="conteinerBtnModal">
            <button onClick={()=>{setTipoVeicle("Carro")}} className="btnModal">Carro</button>
            <button onClick={()=>{setTipoVeicle("Moto")}} className="btnModal">Moto</button>
        </div>
        <p className="textAjusting1">imagem da capa</p>
        <input {...register("imagemDaCapa")} placeholder="imagem da capa" className="inputModal1" type="text" />
        <p className="textAjusting1">1* imagem da galeria</p>
        <input
            placeholder="1* imagem da galeria"
            className="inputModal1"
            type="text"
            {...register("ImagemDaGaleria1")}
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
      </form>

    </StyleModalCreateAnuncio>
  );
}

export default modalCreateAnuncio;
