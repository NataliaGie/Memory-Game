import { useState, useEffect } from "react";
import { AppWrapper, BoardGrid, BoardWrapper } from "./AppStyles";
import GlobalStyle from "./global";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import Modal from "./components/Modal/Modal";
import Card from "./components/Card/Card";
import CardPlaceholder from "./components/CardPlaceholder";
import { animals, shuffleCards } from './utilities';

function App() {

  const [cards, setCards] = useState(animals);
  const [game, newGame] = useState(false);
  const [clickedCards, setClickedCards] = useState<any | null>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const startingGameHandler = () => {
    setCards(prevState => 
      prevState.map(card => Object.assign({}, card, card.flipped = false)));
    setClickedCards([]);
    setCards(shuffleCards(animals));
    newGame(true);
  };

  const onCardClickHandler = (currentCard: any, id: number) => {
    setClickedCards(clickedCards.concat(currentCard));
    const flippedCard = Object.assign({}, currentCard, currentCard.flipped = true)
    setCards(prevState => 
      prevState.map((card) => card.id === currentCard.id ? flippedCard : card)
    );
  };

  const onModalButtonClickHandler = () => {
    setModalOpen(false);
  }

  const checkIsMatching = () => {
    if (clickedCards.length === 2 && clickedCards[0].name === clickedCards[1].name) {
      setCards(prevState =>
        prevState.map(card => card.name === clickedCards[0].name ? {...card, matched: true} : card));
      return cards;
    }
  }

  useEffect(() => {
    window.setTimeout(() => {
    if (clickedCards.length >= 2) {
      checkIsMatching();
      setClickedCards([]);
      setCards(prevState => 
      prevState.map(card => Object.assign({}, card, card.flipped = false))
      )}
    }, 500);
  }, [clickedCards]);

  useEffect (() => {
    let checkedMatched = cards.map(card => card.matched);
    let isEveryCardMatched = checkedMatched.every(element => element === true);
    window.setTimeout(() => {
      if (isEveryCardMatched) {
        setModalOpen(true);
      }
    }, 1000);
  }, [cards]);

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
      <BoardWrapper>
          <BoardGrid>
            {game ?
              cards.map((card) => {
                return (
                <Card
                  onClick={() => onCardClickHandler(card, card.id)}
                  flipped={card.flipped}
                  key={card.id}
                  src={card.img}
                  id={card.id}
                  matched={card.matched}
                  cardName={card.name} />
                )})
              : 
              cards.map((item, index) => {
                return <CardPlaceholder key={index} />
              })}
          </BoardGrid>
        </BoardWrapper>
        <StartGameButton onClick={startingGameHandler} />
        <Modal
          isOpen={isModalOpen}
          onClick={onModalButtonClickHandler}/>
      </AppWrapper>
    </>
  );
}

export default App;
