import { CardImage, CardWrapper } from './CardStyles';

type Props = {
    alt: string;
    src: string;
    key: number;
}

const Card: React.FC<Props> = ({alt, src, key}) => {
    return (
        <CardWrapper>
            <CardImage src={src} />
        </CardWrapper>
    );
}

export default Card;