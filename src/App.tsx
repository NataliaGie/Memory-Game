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

  const animals = [panda, dog, flamingo, giraffe, iguana, peacock];


// Durstenfeld shuffle algorithm implementation
  const shuffleCards = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
      return array;
    };
  

  const [cards, setCards] = useState(animals);
  const [game, newGame] = useState(false);

  const startingGameHandler = () => {
    setCards(shuffleCards(animals.concat(animals)));
    newGame(true);
    console.log('click');
  }

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
      <BoardWrapper>
            <BoardGrid>
              {game ? cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    src={card}
                    alt={'card'} />
                )
              })
            : null}
            </BoardGrid>
        </BoardWrapper>
        <StartGameButton onClick={startingGameHandler} />
      </AppWrapper>
    </>
  );
}

export default App;
