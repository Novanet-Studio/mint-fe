import "./card.scss";

const Card = (props) => {
  return (
    <div className={`card ${props.clase}`}>
      <img
        className="card__image"
        src={props.image.cardImage}
        alt="Player performing portrait"
      />
      <h4 className="card__name">{props.name}</h4>
      <p className="card__league">{props.league}</p>
      <p className="card__level">{props.level}</p>
      <h5 className="card__tier-title">Card Tier</h5>
      <p className="card__tier-value">{props.tier}</p>
      <h4 className="card__value">{props.value.toFixed(2)} $</h4>
      <p className="card__average">{props.average.toFixed(2)} average sale</p>
      <button className="button button__action--fill card__button">View</button>
    </div>
  );
};

export default Card;
