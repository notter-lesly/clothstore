import logo from "../assets/img/logo.svg";
import "./header.scss";
import Cart from"./Cart"

function Header() {
  return (
    <div className="header">
      <div className="title">
        <img src={logo} alt="logo" />
        <h1> PIG'S FARM MALL</h1>
        <ul>
          <li>
            <a href="#"> login </a>
          </li>
          <li>
            <Cart/>
          </li>
        </ul>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Header;
