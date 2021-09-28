import styled from 'styled-components';

const buttonDarkGreen = '#2c965a';
const buttonLightGreen = '#79c79b';

export const GameButton = styled.button`
    width: 200px;
    height: 100px;
    margin: 45vh auto 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    font-size: 1.8rem;
    border-color: ${buttonDarkGreen};
    color: ${buttonDarkGreen};

    @media (max-width: 1050px) {
        margin: 20px auto;
    }

    @media (max-width: 910px) {
        margin: 35px auto;
    }

    &:hover,
    &:active {
        color: white;
        background-color: ${buttonLightGreen};
        border-color: ${buttonLightGreen};
    }
`