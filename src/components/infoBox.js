import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import "./infoBox.scss";

const InfoBox = (props) => {
  return (
    <div className="infoBox">
      <div className="infoBox__left">
        <h3 className="infoBox__title">{props.title}</h3>
        <div className="infoBox__logo">
          {props.logo ? <img src={props.logo} alt="Partner logo" /> : null}
        </div>
        <div className="infoBox__rrss">
          <h4 className="infoBox__subtitle">{props.subtitle}</h4>
          <p className="infoBox__subtitleText">{props.subtitleText}</p>
        </div>
        <div className="infoBox__rrss">
          <FontAwesomeIcon
            className="icon infoBox__icon"
            icon={["fab", "twitter"]}
          />
          <FontAwesomeIcon
            className="icon infoBox__icon"
            icon={["fab", "discord"]}
          />
        </div>
      </div>
      <div className="infoBox__right">
        <ReactMarkdown className="infoBox__description">
          {props.description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default InfoBox;
