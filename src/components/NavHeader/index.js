import styled from 'styled-components';

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 8px;
`

const NavBarItem = styled.li`
  font-size: 16px;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
`

const textoOpcoes = ['categorias', 'favoritos', 'minha estante']

function NavHeader() {
    return (
        <NavBar>
          { textoOpcoes.map( (texto) => (
            <NavBarItem><p>{texto}</p></NavBarItem>
          ) ) }
        </NavBar>
    )
}

export default NavHeader