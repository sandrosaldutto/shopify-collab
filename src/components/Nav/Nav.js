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
          <li className="nav__list-item"><a className="nav__link-text" href='/'>Home</a></li>
          <li className="nav__list-item"><a className="nav__link-text" href='/'>Find a Parter</a></li>
          <li className="nav__list-item"><a className="nav__link-text" href='/'>Contact</a></li>
      </ul>
        <div className="nav__profile">
          <p className="nav__avatar">AB</p>
          <h3 className="nav__user-name">Ashley Brooks</h3>
        </div>
    </div>
  );
}

export default Nav;
