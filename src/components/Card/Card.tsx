import { CardFront, CardBack, CardWrapper } from './CardStyles';
import cardBackImg from '../../images/cardBack.png';

type Props = {
    src: string;
    key: number;
    onClick: () => void;
    id: number;
    flipped: boolean;
}

const Card: React.FC<Props> = ({src, key, onClick, flipped}) => {
    return (
        <CardWrapper>
            <CardBack  
                onClick={onClick} flipped={flipped} src={cardBackImg} alt={"Back of card"} />
            <CardFront 
                flipped={flipped} key={key} src={src} alt={'Front of card'} />
        </CardWrapper>
    );
}

export default Card;