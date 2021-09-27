import styled from 'styled-components';

const buttonDarkGreen = '#2c965a';
const buttonLightGreen = '#79c79b';

export const ButtonWrapper = styled.div`
    margin: 0 auto;
    padding-top: 42vh;
    padding-right: 8%;
`

export const GameButton = styled.button`
    width: 200px;
    height: 100px;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    font-size: 1.8rem;
    border-color: ${buttonDarkGreen};
    color: ${buttonDarkGreen};

    &:hover {
        color: white;
        background-color: ${buttonLightGreen};
        border-color: ${buttonLightGreen};
    }
`