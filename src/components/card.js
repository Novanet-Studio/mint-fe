import "./card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__image" src={props.image.cardImage} alt="Player performing portrait"/>
      <h4 className="card__name">{props.name}</h4>
      <p>{props.league}</p>
      <p>{props.level}</p>
      <h5 className="card__tier">Card Tier</h5>
      <p>{props.tier}</p>
      <h4>{props.value} $</h4>
      <p>{props.average}</p>
      <button>View</button>
    </div>
  );
};

export default Card;
