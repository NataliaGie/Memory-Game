import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const BoardWrapper = styled.div`
    margin: 50px auto 0;
    height: 85vh;
    width: 57vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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