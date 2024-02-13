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
import { setRoomMember } from "../../redux/roomInfo";
import { selectRoomInfoState } from "../../redux/roomInfo";
import { useEffect } from "react";

const RoomSNB = ({ percent, isOpen, handleRoomSNB }) => {
  const nameArr = ["지환", "수민", "영주"];
  const dispatch = useDispatch();
  const params = useParams();
  const roomId = params.roomId;
  const roomInfoSelector = useSelector(selectRoomInfoState);

  const receivedToken = localStorage.getItem("token");
  const receivedId = localStorage.getItem("id");
  const getRoomMember = async () => {
    try {
      const response = await axios.get(`/rooms/updateAt/13?page=0`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(setRoomMember(response.data.result));
    } catch (error) {
      console.error("이건 RoomSNB 에러:", error);
    }
  };

  useEffect(() => {
    getRoomMember();
  }, [getRoomMember]);
  console.log(roomInfoSelector);
  return (
    <div>
      {isOpen ? (
        <S.Container>
          <S.TitleBox>
            {roomInfoSelector && <h2>{roomInfoSelector.roomTitle}</h2>}
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
            {roomInfoSelector.memberInfo.map(
              ({ name, userId, profileImg, updateAt }) => (
                <S.Member key={userId}>
                  {profileImg ? (
                    <S.MemberProfile>
                      <img src={`${profileImg}`} />
                    </S.MemberProfile>
                  ) : (
                    <BsPersonCircle size={30} />
                  )}

                  <h2>{name}</h2>
                  <p>(updateAt )</p>
                </S.Member>
              )
            )}
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
