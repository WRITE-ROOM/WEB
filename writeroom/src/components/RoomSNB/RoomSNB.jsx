import axios from "axios";
import * as S from "./RoomSNB.style";
import { GoGear } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect } from "react";
import { CategoryToggle } from "../CategoryToggle/CategoryToggle";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRoom } from "../../redux/room";
const RoomSNB = ({ percent, isOpen, handleRoomSNB }) => {
  const nameArr = ["지환", "수민", "영주"];
  const dispatch = useDispatch();
  const params = useParams();
  const roomId = params.roomId;

  const receivedToken = localStorage.getItem("token");
  const receivedId = localStorage.getItem("id");

  const getRoomMember = async (roomId) => {
    try {
      const response = await axios.get(`/rooms/13/userRoom`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      // 500번 에러 발생
      console.log(response.data);
      dispatch(setRoom(response.data));
    } catch (error) {
      console.error("이건 RoomSNB 에러:", error);
    }
  };

  // useEffect(() => {
  //   getRoomMember(roomId);
  // }, [roomId]);
  return (
    <div>
      {isOpen ? (
        <S.Container>
          <S.TitleBox>
            <h2>스포츠에 대한 고찰</h2>
            <S.IconsBox>
              <MdKeyboardDoubleArrowLeft onClick={handleRoomSNB} />
              <GoGear />
            </S.IconsBox>
          </S.TitleBox>
          <S.BasicBox>
            <h2>멤버</h2>
            {nameArr.map((name, idx) => (
              <S.Member key={idx}>
                <BsPersonCircle size={30} />
                <h2>{name}</h2>
                <p>(3시간전)</p>
              </S.Member>
            ))}
            <S.Plus>
              <GoPlusCircle size={30} />
              <h2>초대하기</h2>
            </S.Plus>
          </S.BasicBox>
          <S.BasicBox>
            <h2>챌린지</h2>
            <ProgressBar percent={percent} />
          </S.BasicBox>
          <S.BasicBox>
            <S.CategoryWrapper>
              <h2>카테고리</h2>
              <BiDotsVerticalRounded size={20} />
            </S.CategoryWrapper>
            {nameArr.map((name, idx) => (
              <CategoryToggle name={name} key={idx} />
            ))}
          </S.BasicBox>
        </S.Container>
      ) : (
        <MdKeyboardDoubleArrowRight size={20} onClick={handleRoomSNB} />
      )}
    </div>
  );
};

export default RoomSNB;
