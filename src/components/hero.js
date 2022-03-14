import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.scss";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero__media">
        <img
          className="hero__media-image"
          src={props.media.heroImage}
          alt="Player card"
        />
      </div>
      <div className="hero__data">
        <div className="hero__share">
          <FontAwesomeIcon
            className="hero__icon"
            icon={["fa", "share-nodes"]}
            size="lg"
          />{" "}
          Share
        </div>
        <h1 className="hero__title">{props.title}</h1>
        <div className="hero__tier">
          <h3 className="hero__tier-title">Card tier</h3>
          <p className="hero__tier-score">{props.score}</p>
        </div>
        <div className="hero__listing">
          <p className="hero__listing-title">Listed for</p>
          <p className="hero__listing-value">
            {props.listvalue}{" "}
            <FontAwesomeIcon
              className="hero__listing-icon"
              icon={["fa", "tag"]}
              size="lg"
            />
          </p>
        </div>
        <div className="hero__buttons">
          <button className="button button__action--fill">
            Update listing
          </button>
          <button className="button button__action--outline">
            Remove listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
