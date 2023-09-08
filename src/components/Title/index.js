import { styled } from "styled-components";


export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color || '#0b0b0b'};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.align || 'center'};
    margin: 0;
    text-transform: uppercase;
`
