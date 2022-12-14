import "./App.css";
import "./MemoryGame.css";
import CARD_HEARTS_1 from "./assets/card-hearts-1.png";
import CARD_CLUBS_1 from "./assets/card-clubs-1.png";
import CARD_DIAMONDS_1 from "./assets/card-diamonds-1.png";
import CARD_SPADES_1 from "./assets/card-spades-1.png";
import Card from "./Card";
import { useEffect, useState } from "react";

// Randomize from stackoverflow
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const cardData = [
  {
    id: 1,
    img: CARD_HEARTS_1,
  },
  {
    id: 2,
    img: CARD_HEARTS_1,
  },
  {
    id: 3,
    img: CARD_CLUBS_1,
  },
  {
    id: 4,
    img: CARD_CLUBS_1,
  },
  {
    id: 5,
    img: CARD_DIAMONDS_1,
  },
  {
    id: 6,
    img: CARD_DIAMONDS_1,
  },
  {
    id: 7,
    img: CARD_SPADES_1,
  },
  {
    id: 8,
    img: CARD_SPADES_1,
  },
];

shuffleArray(cardData);

function MemoryGame() {
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [matchedCardIds, setMatchedCardIds] = useState([]);

  function handleCardClick(cardId) {
    if (!clickedCardIds.includes(cardId) && clickedCardIds.length < 2) {
      setClickedCardIds((oldArray) => [...oldArray, cardId]);
    }
  }

  useEffect(() => {
    if (clickedCardIds.length === 2) {
      const first = cardData.find((e) => e.id === clickedCardIds[0]);
      const second = cardData.find((e) => e.id === clickedCardIds[1]);

      if (first.img === second.img) {
        setMatchedCardIds((oldArray) => [...oldArray, first.id]);
        setMatchedCardIds((oldArray) => [...oldArray, second.id]);
        setClickedCardIds([]);
      } else {
        setTimeout(function () {
          setClickedCardIds([]);
        }, 1000);
      }
    }

    if (matchedCardIds.length === cardData.length) {
      alert("Győztél!");
    }
  }, [clickedCardIds, matchedCardIds.length]);

  return (
    <div className="cards">
      <div className="row">
        {cardData.map((index) => {
          return (
            <div className="card-holder">
              <button key={index.id} onClick={() => handleCardClick(index.id)}>
                <Card
                  image={index.img}
                  isFlipped={
                    clickedCardIds.includes(index.id) ||
                    matchedCardIds.includes(index.id)
                  }
                />
              </button>
            </div>
          );
        })}
      </div>
      <h2 className="game-name">Memóriajáték</h2>
    </div>
  );
}

export default MemoryGame;
