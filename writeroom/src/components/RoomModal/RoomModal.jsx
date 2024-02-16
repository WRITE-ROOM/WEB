import * as S from "./RoomModal.style";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const RoomModal = ({
  title1,
  title2,
  description,
  description2,
  button1,
  button2,
  deletefunction,
}) => {
  const receivedToken = localStorage.getItem("token");
  const params = useParams();
  const navigate = useNavigate();

  const roomId = params.roomId;
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
              <S.DeleteButton onClick={() => deletefunction()}>
                {button2}
              </S.DeleteButton>
            </S.ButtonWrapper>
          </S.Container>
        </S.Background>
      )}
    </>
  );
};

export default RoomModal;
