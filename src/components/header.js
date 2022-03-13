import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./navigation";
import logo from "../assets/images/DPC_Logo_White.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__emblema" src={logo} alt="logo" />
      </div>
      <Navigation />
      <div className="header__rrss">
        <FontAwesomeIcon
          className="icon"
          icon={["fab", "twitter"]}
          size="lg"
        />
        <FontAwesomeIcon
          className="icon"
          icon={["fab", "discord"]}
          size="lg"
        />
      </div>
      <div className="header__buttons">
        <button className="button button__action--fill">jgdfkl98</button>
        <button className="button button__action--outline">List you card</button>
      </div>
    </header>
  );
};

export default Header;
