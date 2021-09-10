import { BoardWrapper, BoardGrid } from "./CardBoardStyles";
import Card from "../Card/Card";
import panda from '../../images/panda.jpg';
import dog from '../../images/dog.jpg';
import flamingo from '../../images/flamingo.jpg';
import giraffe from '../../images/giraffe.jpg';
import iguana from '../../images/iguana.jpg';
import peacock from '../../images/peacock.jpg';

const CardBoard: React.FC = () => {

    const animals = [panda, dog, flamingo, giraffe, iguana, peacock];
    const animalGameCard = [...animals, ...animals];

    return (
        <BoardWrapper>
            <BoardGrid>
                {animalGameCard.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            src={card}
                            alt={`' + ${card} + '`} />
                    );
                })}
            </BoardGrid>
        </BoardWrapper>
    )
}

export default CardBoard;