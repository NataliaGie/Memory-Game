import { useState, useEffect } from "react";
import { AppWrapper, BoardGrid, BoardWrapper } from "./AppStyles";
import GlobalStyle from "./global";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import Modal from "./components/Modal/Modal";
import Card from "./components/Card/Card";
import CardPlaceholder from "./components/CardPlaceholder";
import panda from './images/panda.jpg';
import dog from './images/dog.jpg';
import flamingo from './images/flamingo.jpg';
import giraffe from './images/giraffe.jpg';
import iguana from './images/iguana.jpg';
import jaguar from './images/jaguar.jpg';

function App() {

  const animals = [
    { img: panda, name: 'panda', flipped: false, matched: false, id: 1},
    { img: dog, name: 'dog', flipped: false, matched: false, id: 2},
    { img: flamingo, name: 'flamingo', flipped: false, matched: false, id: 3},
    { img: giraffe, name: 'giraffe', flipped: false, matched: false, id: 4},
    { img: jaguar, name: 'jaguar', flipped: false, matched: false, id: 5},
    { img: iguana, name: 'iguana', flipped: false, matched: false, id: 6},
    { img: panda, name: 'panda', flipped: false, matched: false, id: 7},
    { img: dog, name: 'dog', flipped: false, matched: false, id: 8},
    { img: flamingo, name: 'flamingo', flipped: false, matched: false, id: 9},
    { img: giraffe, name: 'giraffe', flipped: false, matched: false, id: 10},
    { img: jaguar, name: 'jaguar', flipped: false, matched: false, id: 12},
    { img: iguana, name: 'iguana', flipped: false, matched: false, id: 11}
  ];

  const [cards, setCards] = useState(animals);
  const [game, newGame] = useState(false);
  const [clickedCards, setClickedCards] = useState<any | null>([]);
  const [isModalOpen, setModalOpen] = useState(false);

    // Durstenfeld shuffle algorithm implementation
    const shuffleCards = (array: any) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
        return array;
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

  const startingGameHandler = () => {
    setCards(shuffleCards(animals));
    newGame(true);
  };

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
