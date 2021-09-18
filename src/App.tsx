import { useState } from "react";
import { AppWrapper, BoardGrid, BoardWrapper } from "./AppStyles";
import GlobalStyle from "./global";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import Card from "./components/Card/Card";
import panda from './images/panda.jpg';
import dog from './images/dog.jpg';
import flamingo from './images/flamingo.jpg';
import giraffe from './images/giraffe.jpg';
import iguana from './images/iguana.jpg';
import peacock from './images/peacock.jpg';

function App() {

  const animals = [
    { img: panda, name: 'panda1', flipped: false, id: 1},
    { img: dog, name: 'dog1', flipped: false, id: 2},
    { img: flamingo, name: 'flamingo1', flipped: false, id: 3},
    { img: giraffe, name: 'giraffe1', flipped: false, id: 4},
    { img: iguana, name: 'iguana1', flipped: false, id: 5},
    { img: peacock, name: 'peacock1', flipped: false, id: 6},
    { img: panda, name: 'panda2', flipped: false, id: 7},
    { img: dog, name: 'dog2', flipped: false, id: 8},
    { img: flamingo, name: 'flamingo2', flipped: false, id: 9},
    { img: giraffe, name: 'giraffe2', flipped: false, id: 10},
    { img: iguana, name: 'iguana2', flipped: false, id: 11},
    { img: peacock, name: 'peacock2', flipped: false, id: 12}
    ];

  const isAnimalFlipped = animals.map(array => array.flipped);

  const [cards, setCards] = useState(animals);
  const [game, newGame] = useState(false);

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
    setCards(prevState => 
      prevState.map((card) => card.id === currentCard.id ? {...card, flipped: true} : card)
    )
    }

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
      <BoardWrapper>
          <BoardGrid>
            {game ? 
              cards.map((card, index) => {
                return (
                <Card
                  onClick={() => onCardClickHandler(card, card.id)}
                  flipped={card.flipped}
                  key={index}
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
