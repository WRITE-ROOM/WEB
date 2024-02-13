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
import { CategoryToggle } from "../CategoryToggle/CategoryToggle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UseToolTip from "../UseToolTip/UseToolTip";
import { setRoomInfo, resetRoomInfo } from "../../redux/roomInfo";
import { selectRoomInfoState } from "../../redux/roomInfo";

const RoomSNB = ({ percent, isOpen, handleRoomSNB }) => {
  const nameArr = ["지환", "수민", "영주"];
  const dispatch = useDispatch();
  const params = useParams();
  const roomId = params.roomId;

  const receivedToken = localStorage.getItem("token");
  const receivedId = localStorage.getItem("id");

  const getRoomName = async () => {
    try {
      const response = await axios.get("/rooms/13/list?page=0", {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(resetRoomInfo());
      dispatch(
        setRoomInfo({
          roomId: response.data.roomId,
          roomTitle: response.data.roomTitle,
        })
      );
    } catch (error) {
      console.error("룸 메인 에러:", error);
    }
  };

  // const getRoomMember = async () => {
  //   try {
  //     const response = await axios.get(`/rooms/13/userRoom`, {
  //       headers: {
  //         Authorization: `Bearer ${receivedToken}`,
  //       },
  //     });
  //     // console.log(response.data);

  //     dispatch(setRoomInfo({ memberList: response.data.result.memberList }));
  //   } catch (error) {
  //     console.error("이건 RoomSNB 에러:", error);
  //   }
  // };
  const getChallenge = async () => {
    try {
      const response = await axios.get(`/rooms/challenges/13`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      console.log(response.data);
      dispatch(
        setRoomInfo({
          goalsAchieveRate: response.data.goalsAchieveRate,
          goalsTargetCount: response.data.goalsTargetCount,
          routineAchieveRate: response.data.routineAchieveRate,
          routineTargetCount: response.data.routineTargetCount,
        })
      );
    } catch (error) {
      console.error("이건 get챌린지 에러:", error);
    }
  };

  // useEffect(() => {
  //   getRoomName();
  //   getChallenge();
  // }, [roomId]);
  const roomSelector = useSelector(selectRoomInfoState);
  console.log(roomSelector.room);
  return (
    <div>
      {isOpen ? (
        <S.Container>
          <S.TitleBox>
            {roomSelector.room[0] && <h2>{roomSelector.room[0].roomTitle}</h2>}
            <S.IconsBox>
              <S.ToolTipWrapper>
                <UseToolTip message="메뉴 닫기">
                  <MdKeyboardDoubleArrowLeft
                    color="gray"
                    size={30}
                    onClick={handleRoomSNB}
                  />
                </UseToolTip>
              </S.ToolTipWrapper>
              <S.ToolTipWrapper>
                <UseToolTip message="룸관리">
                  <GoGear size={30} />
                </UseToolTip>
              </S.ToolTipWrapper>
            </S.IconsBox>
          </S.TitleBox>
          <S.Line />
          <S.BasicBox>
            <S.TitleBox>
              <h2>멤버</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip message="멤버 관리">
                    <GoGear color="" size={30} />
                  </UseToolTip>
                </S.ToolTipWrapper>
              </S.IconsBox>
            </S.TitleBox>
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
            <S.TitleBox>
              <h2>챌린지</h2>
              <S.IconsBox>
                <S.ToolTipWrapper>
                  <UseToolTip message="챌린지 관리">
                    <GoGear color="" size={30} />
                  </UseToolTip>
                </S.ToolTipWrapper>
              </S.IconsBox>
            </S.TitleBox>
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
        <S.ToolTipWrapper>
          <UseToolTip message="메뉴 열기">
            <S.CursorWrapper>
              <MdKeyboardDoubleArrowRight size={20} onClick={handleRoomSNB} />
            </S.CursorWrapper>
          </UseToolTip>
        </S.ToolTipWrapper>
      )}
    </div>
  );
};

export default RoomSNB;
