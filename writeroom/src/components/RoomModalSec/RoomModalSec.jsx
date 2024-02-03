import * as S from "./RoomModalSec.style";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const RoomModalSec = ({ title1, title2, description, button1, button2 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <S.Background>
          <S.Container>
            <S.DeleteWrapper>
              <IoClose size={30} onClick={handleCloseModal} />
            </S.DeleteWrapper>
            <h1>{title1}</h1>
            <h1>{title2}</h1>
            <p>{description}</p>
            <S.ButtonWrapper>
              <S.FirstButton>{button1}</S.FirstButton>
              <S.SecondButton>{button2}</S.SecondButton>
            </S.ButtonWrapper>
          </S.Container>
        </S.Background>
      )}
    </>
  );
};

export default RoomModalSec;
