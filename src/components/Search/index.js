import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0px;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Search() {
    const [
        TextoDigitado, setTextoDigitado
    ] = useState('')

    return (
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
            <Input 
                placeholder="Escreva sua proxima leitura"
                onBlur={e => setTextoDigitado(e.target.value)}
            ></Input>
            <p>{TextoDigitado}</p>
        </SearchContainer>
    );
}

export default Search