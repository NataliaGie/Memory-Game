import styled from "styled-components";
import background from './images/pageBackground.png';

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url(${background});
`

export const BoardWrapper = styled.div`
    margin: 50px 40px;
    height: 85vh;
    width: 57vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
`

export const BoardGrid = styled.div`
    height: 95%;
    width: 95%;
    margin: 0 auto;
    padding-top: 13px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
    justify-items: center;
    align-items: center;
`