import styled from "styled-components";
import winBackgr from '../../images/win.png';

type Props = {
    isOpen: boolean;
}

const buttonDarkBlue = '#1e98bd';
const buttonLightBlue = '#68b9d4';

export const ModalWrapper = styled.div<Props>`
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${props => props.isOpen ? 'inline-block' : 'none'};
`

export const ModalWindow = styled.div`
    margin: 28vh auto 0;
    width: 500px;
    height: 350px;
    background-color: white;
    background-image: url(${winBackgr});
    border-radius: 25px;
    background-size: cover;
    text-align: center;

    @media (max-width: 870px) {
        width: 400px;
        height: 290px;
    }

    @media (max-width: 540px) {
        width: 300px;
        height: 250px;
    }

    @media (max-width: 370px) {
        width: 200px;

    }
`

export const ModalMessage = styled.p`
    padding-top: 20%;
    font-size: 2.25rem;

    @media (max-width: 870px) {
        font-size: 2rem;
    }

    @media (max-width: 540px) {
        padding-top: 25%;
        font-size: 1.9rem;
    }
`

export const ModalButton = styled.button`
    width: 25%;
    height: 14%;
    cursor: pointer;
    font-size: 1.25rem;
    text-align: center;
    margin-top: 100px;
    background-color: transparent;
    border-radius: 10px;
    border-color: ${buttonDarkBlue};
    color: ${buttonDarkBlue};

    &:hover,
    &:active {
        color: white;
        background-color: ${buttonLightBlue};
        border-color: ${buttonLightBlue};
    }

    @media (max-width: 540px) {
        margin-top: 80px;
    }

    @media (max-width: 370px) {
        margin-top: 60px;
        width: 75px;
    }
`