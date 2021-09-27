import styled from "styled-components";
import winBackgr from '../../images/win.png';

type Props = {
    isOpen: boolean;
}

const buttonBlue = '#1e98bd';

export const ModalWrapper = styled.div<Props>`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${props => props.isOpen ? 'inline-block' : 'none'};
`

export const ModalWindow = styled.div`
    margin: 12% auto 0;
    width: 35%;
    height: 48%;
    background-color: white;
    background-image: url(${winBackgr});
    border-radius: 25px;
    background-size: cover;
    text-align: center;
`

export const ModalMessage = styled.p`
    padding-top: 28%;
    font-size: 2.25rem;
`

export const ModalButton = styled.button`
    width: 25%;
    height: 14%;
    font-size: 1.25rem;
    text-align: center;
    margin-top: 60px;
    background-color: transparent;
    border-radius: 10px;
    border-color: ${buttonBlue};
    color: ${buttonBlue};
`