import perfil from "../../img/perfil.svg";
import carrinho from "../../img/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`
const icons = [perfil, carrinho];

function IconsHeader() {
  return (
    <Icones>
      {icons.map((icone) => (
        <li>
          <img src={icone} alt="icone"></img>
        </li>
      ))}
    </Icones>
  );
}

export default IconsHeader;
