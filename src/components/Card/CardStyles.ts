import styled, { css } from 'styled-components';

type Props = {
    flipped: boolean;
}

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1.3px solid black;
`

const mainStyles = css`
    position: relative;
    border-radius: 5px;
    margin: 0 auto;
    height: inherit;
    width: inherit;
    object-fit: cover;
`

export const CardFront = styled.img<Props>`
    ${mainStyles}

    display: ${props => props.flipped ? 'block' : 'none'};
`

export const CardBack = styled.img<Props>`
    ${mainStyles}

    cursor: pointer;
    display: ${props => props.flipped ? 'none' : 'block'};
`