import "./style.css";
import Logo from "../Logo";
import NavHeader from "../NavHeader";
import IconesHeader from "../IconsHeader";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <NavHeader />
      <IconesHeader />
    </header>
  );
}

export default Header