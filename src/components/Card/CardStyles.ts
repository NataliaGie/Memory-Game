import styled, { css } from 'styled-components';

type Props = {
    flipped: boolean;
}

export const CardWrapper = styled.div`
    width: inherit;
    height: inherit;
    border-radius: 5px;
    border: 1px solid black;
`

const mainStyles = css`
    width: inherit;
    height: inherit;
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