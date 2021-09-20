import { useState, useEffect } from "react";
import { AppWrapper, BoardGrid, BoardWrapper } from "./AppStyles";
import GlobalStyle from "./global";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import Card from "./components/Card/Card";
import panda from './images/panda.jpg';
import dog from './images/dog.jpg';
import flamingo from './images/flamingo.jpg';
import giraffe from './images/giraffe.jpg';
import iguana from './images/iguana.jpg';
import jaguar from './images/jaguar.jpg';

function App() {

  const animals = [
    { img: panda, flipped: false, id: 1},
    { img: dog, flipped: false, id: 2},
    { img: flamingo, flipped: false, id: 3},
    { img: giraffe, flipped: false, id: 4},
    { img: jaguar, flipped: false, id: 5},
    { img: iguana, flipped: false, id: 6},
    { img: panda, flipped: false, id: 7},
    { img: dog, flipped: false, id: 8},
    { img: flamingo, flipped: false, id: 9},
    { img: giraffe, flipped: false, id: 10},
    { img: jaguar, flipped: false, id: 12},
    { img: iguana, flipped: false, id: 11}
  ];

  type onChangeEvent = React.MouseEvent<HTMLElement>;

  const isAnimalFlipped = animals.map(array => array.flipped);

  const [cards, setCards] = useState(animals);
  const [game, newGame] = useState(false);
  const [clickedCard, setClickedCard] = useState(0);

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

  const startingGameHandler = () => {
    setCards(shuffleCards(animals));
    newGame(true);
  }

  const onCardClickHandler = (currentCard: any, id: number) => {
    console.log(`I clicked ${currentCard.name} ${id}`);
    const flippedCard = Object.assign({}, currentCard, currentCard.flipped = true)
    setCards(prevState => 
      prevState.map((card) => card.id === currentCard.id ? flippedCard : card)
    )
    setClickedCard(clickedCard + 1);
    console.log(clickedCard);
  }

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (clickedCard === 2) {
        setCards(animals);
        setClickedCard(0);
      }
    }, 400);
  }, [clickedCard]);

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
                  id={card.id} />
                )})
            : null}
          </BoardGrid>
        </BoardWrapper>
        <StartGameButton onClick={startingGameHandler} />
      </AppWrapper>
    </>
  );
}

export default App;
