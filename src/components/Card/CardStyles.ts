import styled, { css } from 'styled-components';

type Props = {
    flipped: boolean;
}

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1.3px solid black;
    position: relative;
    perspective: 600px;
`

const mainStyles = css`
    border-radius: 5px;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s;
    backface-visibility: hidden;
    transform-style: preserve-3d;
`

export const CardFront = styled.img<Props>`
    ${mainStyles}

    z-index: ${props => props.flipped ? 2 : 1};
    transform: ${props => props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)'};
    
`

export const CardBack = styled.img<Props>`
    ${mainStyles}
    
    cursor: pointer;
    position: absolute;
    z-index: ${props => props.flipped ? 1 : 2};
    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)'};
`