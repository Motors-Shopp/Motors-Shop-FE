import styled  from "styled-components";

export const StyleModalCreateAnuncio = styled.div`

    position: absolute;
    margin-top: 25rem;
    width: 400px;
    height: 710px;
    background-color: #ffffff;
    border: 1px solid black;

.textAjusting1{
    justify-content: space-between;
    margin-left: 15px;
    font-weight: bold;
    font-size: 15px;
}

.textAjusting2{
    font-weight: bold;
    margin-left: 15px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
}

.barCriarAnuncio{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
}

.BtnX{
    color: grey;
    font-size: 20px;
    margin-left: -10px;
    margin-top: 13px;
}

.closeModal{
    cursor: pointer;
    width: 20px;
    height: 20px;
}

.tipoAnuncio{
    margin-top: 10px;
    margin-bottom: 10px;
}

.conteinerBtnModal{
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
}

.btnModal{
    width: 175px;
    height: 35px;
    font-weight: bold;
    cursor: pointer;
}

.btnModal:hover{
    background-color: #5126ea;
    color: white;
    border: green solid 3px;
}

.btnmodal2{
    width: 100px;
    height: 35px;
    margin-right: 10px;
    cursor: pointer;
}

.btnmodal3{
    background-color: #5126ea;
    color: white;
    border: none;
    border-radius: 5%;
    margin-right: 10px;
    width: 175px;
    height: 35px;
    cursor: pointer;
}

.anoKMPreco{
    display: flex;
    justify-content: space-around;
}

.inputModal2{
    width: 105px;
    height: 30px;
    margin-bottom: 10px;
}

.textAjusting3{
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;

}

.inputModal1{
    width: 375px;
    height: 30px;
    margin-left: 15px;

}

.inputModal3{
    width: 375px;
    height: 50px;
    margin-left: 15px;
    margin-bottom: 15px;
}

.textAjusting4{
    margin-left: 15px;
    margin-bottom: 15px;
    font-weight: bold;
}

.conteinerBtnModal2{
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
}

.inputModal4{
    width: 375px;
    height: 30px;
    margin-bottom: 15px;
    margin-left: 15px;
}

.caixaDeCampoParaImagem{
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 250px;
    height: 25px;
    padding: 2px;
    background-color: #edeafd;
    color: #4529e6;
    display: flex;
    font-size: 12px;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
}

.conteinerCaixaCriarANDcancelar{
    display: flex;
    justify-content: end;
    margin-right: 15px;
}
`