import { CardFront, CardBack, CardWrapper } from './CardStyles';
import cardBackImg from '../../images/cardBack.png';

type Props = {
    src: string;
    id: number;
    flipped: boolean;
    matched: boolean;
    cardName: string;
    onClick: () => void;
}

const Card: React.FC<Props> = ({src, onClick, flipped, matched, cardName}) => {
    return (
        <CardWrapper>
            <CardBack  
                onClick={onClick}
                flipped={flipped}
                src={cardBackImg} 
                alt={"Back of card"}
                matched={matched}
                cardName={cardName} />
            <CardFront 
                flipped={flipped} 
                src={src} 
                alt={'Front of card'}
                matched={matched}
                cardName={cardName} />
        </CardWrapper>
    );
}

export default Card;