import * as S from "./RoomSettingNavbar.style";
import { IoClose } from "react-icons/io5";
const RoomSettingNavbar = ({ title }) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.ButtonWrapper>
        <S.SaveButton>저장하기</S.SaveButton>
        <div>
          <IoClose size={40} />
        </div>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default RoomSettingNavbar;
