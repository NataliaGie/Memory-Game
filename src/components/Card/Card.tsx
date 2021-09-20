import { CardFront, CardBack, CardWrapper } from './CardStyles';
import cardBackImg from '../../images/cardBack.png';

type Props = {
    src: string;
    onClick: () => void;
    id: number;
    flipped: boolean;
}

const Card: React.FC<Props> = ({src, onClick, flipped}) => {
    return (
        <CardWrapper>
            <CardBack  
                onClick={onClick} flipped={flipped} src={cardBackImg} alt={"Back of card"} />
            <CardFront 
                flipped={flipped} src={src} alt={'Front of card'} />
        </CardWrapper>
    );
}

export default Card;