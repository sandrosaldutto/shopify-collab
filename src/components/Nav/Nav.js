import "./Nav.scss";
import logo from "../../assets/logo/logo.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo-container">
        <img className="nav__logo" src={logo} alt="collab"></img>
        <p className="nav__title">
          Shopify <span className="nav__title--bold">Collab</span>
        </p>
      </div>
      <ul className="nav__navlist">
          <li className="nav__list-item"><a href='/'>Home</a></li>
          <li className="nav__list-item">Find a Parter</li>
          <li className="nav__list-item">Contact</li>
      </ul>
        <div className="nav__profile">
          <p className="nav__avatar">AB</p>
          <h3 className="nav__user-name">Ashley Brooks</h3>
        </div>
    </div>
  );
}

export default Nav;
