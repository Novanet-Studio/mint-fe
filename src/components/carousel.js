import Slider from "react-slick";
import Card from "./card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

const Carousel = (props) => {
  return (
    <Slider className="carousel" {...props.settings}>
      {props.items.map(function (player) {
        return (
          <div className="card card-slider" key={player.id}>
            <img
              className="card__image"
              src={player.image.cardImage}
              alt="Player performing portrait"
            />
            <h4 className="card__name">{player.name}</h4>
            <p className="card__league">{player.league}</p>
            <p className="card__level">{player.level}</p>
            <h5 className="card__tier-title">Card Tier</h5>
            <p className="card__tier-value">{player.tier}</p>
            <h4 className="card__value">{player.value.toFixed(2)} $</h4>
            <p className="card__average">
              {player.average.toFixed(2)} average sale
            </p>
            <button className="button button__action--fill card__button">
              View
            </button>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
