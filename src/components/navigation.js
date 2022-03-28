import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            className="navigation__item"
            activeclassname="active"
            to="/marketplaceviewallpage"
          >
            Marketplace
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__item" c="active" to="/listedcardpage">
            My Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation__item"
            activeclassname="active"
            to="/mintcustomcardpage"
          >
            Mint Custom Card
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
