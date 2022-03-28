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
          <Card
            clase="card-slider"
            key={player.id}
            image={player.image}
            name={player.name}
            league={player.league}
            level={player.level}
            tier={player.tier}
            value={player.value}
            average={player.average}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
