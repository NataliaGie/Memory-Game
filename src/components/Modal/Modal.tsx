import { ModalWrapper,
         ModalWindow, 
         ModalMessage,
         ModalButton } from "./ModalStyles";

type ModalProps = {
    isOpen: boolean;
    onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClick}) => {
    return (
    <ModalWrapper isOpen={isOpen}>
        <ModalWindow>
            <ModalMessage>You won the game!</ModalMessage>
            <ModalButton onClick={onClick}>OK</ModalButton>
        </ModalWindow>
    </ModalWrapper>
    )
};

export default Modal;

