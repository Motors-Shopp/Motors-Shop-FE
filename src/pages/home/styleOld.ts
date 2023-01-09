import styled from "styled-components"

export const HomeBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    padding: 20% 5%;


    background-color: var(--brand2);
    color: var(--grey10);

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 45px;
        max-width: 700px;
    }

    h2, p {
        text-align: center;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    @media (min-width: 600px) {
        padding: 5%;
        max-height: 450px;

        div {
            max-width: 450px;
            flex-direction: row;
        }
    }
`

export const BannerButton = styled.button`
    background: transparent;
    color: var(--grey10);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    gap: 25px;
    width: 100%;
    height: 60px;

    border: 1px solid var(--grey10);
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;

    cursor: pointer;

    :hover {
        background: transparent;
        color: var(--grey9);
    }

    @media (min-width: 600px) {
        
    }
`