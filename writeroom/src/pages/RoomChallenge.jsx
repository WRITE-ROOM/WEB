import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import * as S from "./RoomChallenge.style";
import RoomChallengeBox from "../components/RoomChallengeBox/RoomChallengeBox";
const RoomChallenge = () => {
  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar title="챌린지 관리" />
        <RoomChallengeBox />
      </S.Contents>
    </S.Wrapper>
  );
};

export default RoomChallenge;
