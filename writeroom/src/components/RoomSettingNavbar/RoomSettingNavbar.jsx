import * as S from "./RoomSettingNavbar.style";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
const RoomSettingNavbar = ({ title, onSave }) => {
  const handleSave = () => {
    onSave();
  };
  const params = useParams();
  const navigate = useNavigate();
  const roomId = params.roomId;
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.ButtonWrapper>
        <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
        <S.IconWrapper>
          <IoClose
            size={40}
            onClick={() => {
              // navigate(`/main${roomId}`);
              navigate(`/main`);
            }}
          />
        </S.IconWrapper>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default RoomSettingNavbar;
