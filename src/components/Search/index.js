import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./searchData";

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

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    width: 700px;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid #fff;
    }
`

function Search() {
    const [
        livrosPesquisados, setLivrosPesquisados
    ] = useState([])

    return (
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
            <Input 
                placeholder="Escreva sua proxima leitura"
                onBlur={ e => {
                    const TextoDigitado = e.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(TextoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            ></Input>
            {livrosPesquisados.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </Resultado>
            ))}
        </SearchContainer>
    );
}

export default Search