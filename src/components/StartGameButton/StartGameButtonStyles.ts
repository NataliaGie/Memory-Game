import styled from 'styled-components';

const buttonDarkGreen = '#2c965a';
const buttonLightGreen = '#79c79b';

export const GameButton = styled.button`
    width: 200px;
    height: 100px;
    margin: 20% 80px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
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