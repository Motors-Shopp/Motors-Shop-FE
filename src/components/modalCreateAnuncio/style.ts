import styled  from "styled-components";


export const StyleModalCreateAnuncio = styled.div`

    position: absolute;
    margin-top: 15rem;
    width: 400px;
    height: 550px;
    background-color: #ffffff;
    border: 1px solid black;

.textAjusting1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-left: 15px;
    /* background-color: aliceblue; */
}

.barCriarAnuncio{
    height: 25px;
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    /* background-color: yellowgreen; */
}

.closeModal{
    /* background-color: blue; */
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

.inputModal1{
    width: 375px;
    height: 27px;
    margin-left: 10px;

}

.inputModal2{
    width: 120px;
    height: 30px;
}

.inputModal3{
    width: 375px;
    height: 50px;
    margin-left: 10px;
}

.caixaDeCampoParaImagem{
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 310px;
    height: 25px;
    padding: 2px;
    background-color: #edeafd;
    color: #4529e6;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.conteinerCaixaCriarANDcancelar{
    display: flex;
    justify-content: end;
}





`