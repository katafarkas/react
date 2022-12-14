import CARD_BACK from "./assets/card-back1.png";

function Card({ image, isFlipped }) {
  let card = null

  if (isFlipped) {
    card = <img src={image} alt="card-front" />;
  } else {
    card = <img src={CARD_BACK} alt="card-back" />;
  }

  return (
    <div className="card">
      <div className="card-inner">
        {card}
      </div>
    </div>
  );
}

export default Card;
