import * as S from "./RoomModal.style";
import { useState } from "react";
const RoomModal = ({
  title1,
  title2,
  description,
  description2,
  button1,
  button2,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <S.Background>
          <S.Container>
            <h1>{title1}</h1>
            <h1>{title2}</h1>
            <p>{description}</p>
            <p>{description2}</p>
            <S.ButtonWrapper>
              <S.CancelButton onClick={handleCloseModal}>취소</S.CancelButton>
              <S.DeleteButton>{button2}</S.DeleteButton>
            </S.ButtonWrapper>
          </S.Container>
        </S.Background>
      )}
    </>
  );
};

export default RoomModal;
