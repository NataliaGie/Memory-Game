import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const BoardWrapper = styled.div`
    margin: 20px auto;
    height: 80vh;
    width: 60vw;
`

export const BoardGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
    justify-items: center;
    align-items: center;
`