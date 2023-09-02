import "./style.css";
import perfil from "../../img/perfil.svg";
import carrinho from "../../img/sacola.svg";

const icons = [perfil, carrinho];

function IconsHeader() {
  return (
    <ul className="icons">
      {icons.map((icone) => (
        <li>
          <img src={icone} alt="icone"></img>
        </li>
      ))}
    </ul>
  );
}

export default IconsHeader;
