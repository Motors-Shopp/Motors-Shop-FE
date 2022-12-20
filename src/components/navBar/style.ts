import styled  from "styled-components";


export const StyleNavBar = styled.div`

@media screen and (min-width:200px){

    width: 100%;
    height: 300px;
    background-color: #6100ff;
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;

.Pdesktop{
    display: none;
}

.conteiner{
    width: 400px;
    height: 200px;
}

.title{
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold
}

.Pmobile{
    display: flex;
    justify-content: center;
}

.description{
    font-size: 9px;
    display: flex;
    justify-content: center;
    color: white;
}

.categories{
    font-size: 14px;
    display: column;
    margin-top: 20px;
}

button{
    margin-right: 2px;
    margin-left: 2px;
    width: 98%;
    color: white;
    border: 1px solid #ffffff;
    background-color: #6100ff;
    height: 30px;
    margin-bottom: 8px;
}

}


@media screen and (min-width:700px){
 
    width: 100%;
    height: 250px;
    background-color: #6100ff;
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;

.Pmobile{
    display: none;
}

.conteiner{
    /* background-color: red; */
    width: 400px;
    height: 150px;
}

.title{
    color: #ffffff;
    font-size: 28px;
    margin-bottom: 16px;
    font-weight: bold
}

.Pdesktop{
    display: flex;
    justify-content: center;
}

.description{
    font-size: 9px;
    display: flex;
    justify-content: center;
    color: white;
}

.categories{
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
}

button{
    margin-right: 5px;
    margin-left: 5px;
    width: 100px;
    color: white;
    border: 1px solid #ffffff;
    background-color: #6100ff;
    height: 25px;
}

}`