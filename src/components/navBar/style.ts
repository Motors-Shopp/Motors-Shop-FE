import styled  from "styled-components";

export const StyleNavBar = styled.div`
    width: 100%;
    height: 500px;
    background-color: var(--brand2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lexend";

.conteiner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 5%;
    gap: 45px;
    text-align: center;
}

.title{
    color: var(--whiteFixed);
    font-size: 1.2rem;
    font-weight: bold;
}

.Pmobile, .Pdesktop{
    display: flex;
    justify-content: center;
}

.description{
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    color: var(--whiteFixed);
}

.categories{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}

.btnHome{
    width: 100%;
    font-size: 1rem;
    color: var(--whiteFixed);
    border: 1px solid var(--whiteFixed);
    background-color: var(--random10);
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}

@media screen and (min-width:700px){
    height: 400px;

.conteiner {
    width: 50%;
}

.title{
    font-size: 1.6rem;
}

.categories{
    display: flex;
    flex-direction: row;
    width:50%;
    gap: 20px;
}
}`