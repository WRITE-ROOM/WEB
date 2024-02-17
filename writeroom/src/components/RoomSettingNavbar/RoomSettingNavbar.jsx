import * as S from "./RoomSettingNavbar.style";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import RoomModal from "../RoomModal/RoomModal";
import { useState } from "react"; // Import useState hook
import { set } from "date-fns";

const RoomSettingNavbar = ({ title, onSave, member, myAuth, leaveRoom }) => {
  const handleSave = () => {
    onSave();
  };
  const params = useParams();
  const navigate = useNavigate();
  const roomId = params.roomId;
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleLeaveRoom = () => {
    setShowModal(true);
  };

  const handleConfirmLeaveRoom = () => {
    leaveRoom();
    navigate(`/main`);
  };
  const closeModal = () => setShowModal(false);
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.ButtonWrapper>
        <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
        <S.IconWrapper>
          {member ? (
            <>
              {showModal && (
                <div>
                  <RoomModal
                    title1={`나의 권한은 ${
                      myAuth === "PARTICIPANT" ? "참여자" : "관리자"
                    }에요`}
                    title2="룸을 정말 떠나시겠어요?"
                    isOpen={showModal}
                    button2="떠나기"
                    deletefunction={handleConfirmLeaveRoom}
                    closeModal={closeModal}
                  />
                </div>
              )}
              <IoClose size={40} onClick={handleLeaveRoom} />
            </>
          ) : (
            <IoClose
              size={40}
              onClick={() => {
                navigate(`/main`);
              }}
            />
          )}
        </S.IconWrapper>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default RoomSettingNavbar;
