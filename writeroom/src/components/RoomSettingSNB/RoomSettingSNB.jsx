import { useNavigate, useParams } from "react-router-dom";
import * as S from "./RoomSettingSNB.style";

const RoomSettingSNB = () => {
  const navigate = useNavigate();
  const params = useParams();
  const roomId = params.roomId;

  const changePage = (page) => {
    navigate(`/rooms/${page}/${roomId}`);
  };
  return (
    <S.Container>
      <S.SNBBox onClick={() => changePage("setting")}>룸 관리</S.SNBBox>
      <S.SNBBox onClick={() => changePage("member")}>멤버 관리</S.SNBBox>
      <S.SNBBox onClick={() => changePage("challenge")}>챌린지 관리</S.SNBBox>
      <S.SNBBox onClick={() => changePage("category")}>카테고리 관리</S.SNBBox>
    </S.Container>
  );
};

export default RoomSettingSNB;
