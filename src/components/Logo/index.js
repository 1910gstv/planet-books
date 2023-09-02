import './style.css'
import logo from '../../img/logo.png'

function Logo() {
    return (
        <div className="logo">
          <img src={logo} alt="logo-planet-books"></img>
          <p><strong>Planet</strong>Books</p>
        </div>
    );

}

export default Logo