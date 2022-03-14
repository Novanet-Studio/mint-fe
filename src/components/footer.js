import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__rrss">
        <FontAwesomeIcon
          className="icon footer__icon"
          icon={["fab", "twitter"]}
        />
        <FontAwesomeIcon
          className="icon footer__icon"
          icon={["fab", "discord"]}
        />
      </div>
      <p className="footer__legal">
        dpcnft@gmail.com <br />© 2021 Digital Player Cards. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
