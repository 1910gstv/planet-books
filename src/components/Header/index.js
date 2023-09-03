import Logo from "../Logo";
import NavHeader from "../NavHeader";
import IconesHeader from "../IconsHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: hsl(0, 0%, 100%);
  padding: 0 12px;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <NavHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header