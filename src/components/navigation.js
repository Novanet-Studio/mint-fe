import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            className="navigation__item"
            activeClassName="active"
            to="/"
          >
            Marketplace
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation__item"
            activeClassName="active"
            to="/listedcardpage"
          >
            My Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation__item"
            activeClassName="active"
            to="/mintcustomcardpage"
          >
            Mint Custom Card
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation__item"
            activeClassName="active"
            to="/"
          >
            DPC Player Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
