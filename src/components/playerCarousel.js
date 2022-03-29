import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

const PlayerCarousel = (props) => {
  return (
    <Slider className="playerCarousel" {...props.settings}>
      {props.items.map(function (image) {
        return (
          <img
            className="playerCarousel__image"
            key={image.id}
            src={image.media.video}
            alt="Player highlight"
          />
        );
      })}
    </Slider>
  );
};

export default PlayerCarousel;
