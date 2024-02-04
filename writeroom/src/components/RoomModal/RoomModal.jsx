import * as S from "./RoomModal.style";
import { useState } from "react";
const RoomModal = ({ title1, title2, description }) => {
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
            <S.ButtonWrapper>
              <S.CancelButton onClick={handleCloseModal}>취소</S.CancelButton>
              <S.DeleteButton>삭제</S.DeleteButton>
            </S.ButtonWrapper>
          </S.Container>
        </S.Background>
      )}
    </>
  );
};

export default RoomModal;
