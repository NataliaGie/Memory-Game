import styled, { css } from 'styled-components';

type Props = {
    flipped: boolean;
    matched: boolean;
    cardName: string
;}

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: relative;
    perspective: 600px;
`

const mainStyles = css<Props>`
    border-radius: 5px;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    border: 1.3px solid grey;
    object-fit: cover;
    transition: all 0.5s;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    opacity: ${props => props.matched ? 0 : 1};
`

export const CardFront = styled.img`
    ${mainStyles}

    z-index: ${props => props.flipped ? 2 : 1};
    transform: ${props => props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)'};
    
`

export const CardBack = styled.img`
    ${mainStyles}
    
    cursor: ${props => props.matched ? 'auto' : 'pointer'};
    position: absolute;
    z-index: ${props => props.flipped ? 1 : 2};
    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)'};
`