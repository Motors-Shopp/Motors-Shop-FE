import styled from "styled-components";

export const Card = styled.div`
    width: 275px;
    height: 350px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 15px;
        
    .cardContent {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 25px;
        text-align: initial;
        margin: 0;
        overflow: hidden;
    }

.imgCard {
    margin: 0;
    width: 100%;
    height: 40%;
    background-color: var(--grey6);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgCarro {
    display: flex;
    justify-content: center;
    background-color: #e9ecef;
    width: 90%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    width: 240px;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: "Lexend";
    color: var(--grey1);
    padding-bottom: 10px;
}

.description {
    font-family: "Inter";
    font-size: 0.9rem;
    color: var(--grey2);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.ownerAndPrice{
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
        font-weight: 600;
    }
}

.priceKmYear {
    display: flex;
    justify-content: space-between;
}

.priceYear {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 50%;
    height: 32px;
}

.imgProfile {
    width: 25px;
    height: 25px;
    border-radius: 100%;
}

.nameAndphotoProfile {
    display: flex;
    justify-content: space-between;
    width: 65px;
    font-size: 0.875rem;
    text-align: center;
}

.nameProfile {
    margin-left: 3px;
    color: var(--grey2);
    font-weight: 500;
    font-family: "Inter";
}

.cardInfo {
    width: 30px;
    height: 20px;
    /* margin-top: 5px;
    margin-left: 5px; */
    background-color: var(--brand4);
    color: var(--brand2);
    font-size: 12px;
}`