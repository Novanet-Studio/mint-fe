import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <Link className="navigation__item" to="/">
            Marketplace
          </Link>
        </li>
        <li>
          <Link className="navigation__item" to="/listedcardpage">
            My Cards
          </Link>
        </li>
        <li>
          <Link className="navigation__item" to="/mintcustomcardpage">
            Mint Custom Card
          </Link>
        </li>
        <li>
          <Link className="navigation__item" to="/">
            DPC Player Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
