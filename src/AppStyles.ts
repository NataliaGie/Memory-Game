import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const BoardWrapper = styled.div`
    margin: 25px auto 0;
    height: 80vh;
    width: 60vw;
`

export const BoardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
    justify-items: center;
    align-items: center;
`