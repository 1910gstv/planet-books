import { Titulo } from "../Title";
import { livros } from "./LastReleasesData";
import CardRecommend from "../CardRecommend";
import styled from "styled-components";
import imgLivro from "../../img/livro2.png"

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastReleases() {
  return (
    <LastReleasesContainer>
      <Titulo color="#da0037" fontSize="36px">
        Ultimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="livro"></img>
        ))}
      </NovosLivrosContainer>
      <CardRecommend 
        titulo="Talvez você se interesse por ..."
        subtitulo="Angular 11"
        descricao="Aprenda uma nova tecnologia da plataforma google"
        img={imgLivro}
      />
    </LastReleasesContainer>
  );
}

export default LastReleases;
