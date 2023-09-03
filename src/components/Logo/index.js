import logo from '../../img/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  width: 200px;
  justify-content: flex-start;
`

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`

const LogoText = styled.p`
  margin-left: 12px;
  color: #0d0d0d;
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImg src={logo} alt="logo-planet-books" />
          <LogoText><strong>Planet</strong>Books</LogoText>
        </LogoContainer>
    );

}

export default Logo