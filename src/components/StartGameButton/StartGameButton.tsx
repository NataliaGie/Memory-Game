import { ButtonWrapper, GameButton } from './StartGameButtonStyles';

type Props = {
    onClick: () => void;
}

const StartGameButton: React.FC<Props> = ({onClick}) => {
    return (
        <ButtonWrapper>
            <GameButton onClick={onClick}>Start Game</GameButton>
        </ButtonWrapper>
    )
}

export default StartGameButton;