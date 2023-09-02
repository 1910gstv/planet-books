import './style.css'

const textoOpcoes = ['categorias', 'favoritos', 'minha estante']

function NavHeader() {
    return (
        <ul className="nav">
          { textoOpcoes.map( (texto) => (
            <li className="nav-item"><p>{texto}</p></li>
          ) ) }
        </ul>
    )
}

export default NavHeader