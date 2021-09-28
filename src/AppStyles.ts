import styled from "styled-components";
import background from './images/pageBackground.png';

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url(${background});
    background-size: cover;

    @media (max-width: 1050px) {
        flex-direction: column;
    }
`

export const BoardWrapper = styled.div`
    margin: 40px 0 40px 80px;
    height: 650px;
    width: 55vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;

    @media (max-width: 1350px) {
        width: 65vw;
    }

    @media (max-width: 1050px) {
        margin: 70px auto 20px;
    }

    @media (max-width: 910px) {
        width: 70vw;
        margin: 70px auto 30px;
    }

    @media (max-width: 720px) {
        width: 85vw;
        height: 550px;
    }

    @media (max-width: 550px) {
        width: 93vw;
        height: 460px;
    }

`

export const BoardGrid = styled.div`
    height: 95%;
    width: 95%;
    margin: 0 auto;
    padding-top: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
    justify-items: center;
    align-items: center;

    @media (max-width: 1350px) {
        padding-top: 15px;
    }

    @media (max-width: 540px) {
        grid-gap: 5px;
    }
`