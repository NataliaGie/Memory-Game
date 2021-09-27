import { GameButton } from './StartGameButtonStyles';

type Props = {
    onClick: () => void;
}

const StartGameButton: React.FC<Props> = ({onClick}) => {
    return (
        <>
            <GameButton
             onClick={onClick}>
                 Start game!
            </GameButton>
        </>
    )
}

export default StartGameButton;