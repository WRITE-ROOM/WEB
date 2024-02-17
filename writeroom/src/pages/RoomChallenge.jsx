import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import * as S from "./RoomChallenge.style";
import RoomChallengeBox from "../components/RoomChallengeBox/RoomChallengeBox";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const RoomChallenge = () => {
  const challenge = useSelector((state) => state.challenge);

  const accessToken = localStorage.getItem("token");
  const roomId = useParams().roomId;
  const postChallenge = async () => {
    try {
      const params = { roomId: roomId };
      const res = await axios.post(`/challenge-goals/create`, challenge, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar
          title="챌린지 관리"
          challenge={true}
          postChallenge={postChallenge}
        />
        <RoomChallengeBox />
      </S.Contents>
    </S.Wrapper>
  );
};

export default RoomChallenge;
