import * as S from "./RoomNoteBox.style";
import Bookmark from "../Bookmark/Bookmark";
import { HiMiniUserCircle } from "react-icons/hi2";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import RoomModal from "../RoomModal/RoomModal";

const RoomNoteBox = ({ openRoomSNB, openSNB, note }) => {
  const [isClick, setIsClick] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <S.Container openRoomSNB={openRoomSNB} openSNB={openSNB}>
      <S.ContentsBox>
        <S.UserIconWrapper>
          <HiMiniUserCircle size={50} />
        </S.UserIconWrapper>
        <S.NameBox openRoomSNB={openRoomSNB}>
          <p>제리</p>
          <S.IconWrapper>
            <Bookmark />
            <S.IconButton onClick={handleClick}>
              <BiDotsVerticalRounded size={30} />
            </S.IconButton>
            {isClick && (
              <S.ToggleBox>
                <p>수정하기</p>
                <hr />
                <S.Button onClick={handleModal}>삭제하기</S.Button>
                {openModal && (
                  <RoomModal
                    title1="내가 관리하고 있는 룸이에요."
                    title2="정말 룸을 삭제하시겠어요?"
                  />
                )}
              </S.ToggleBox>
            )}
          </S.IconWrapper>
        </S.NameBox>
        <S.CategoryWrapper>
          <p>2024.02.01</p>
          <button>음악</button>
        </S.CategoryWrapper>
        <S.TextBox openRoomSNB={openRoomSNB} openSNB={openSNB}>
          <h1>노래 플레이리스트</h1>
          <p>
            <span>Someone Like You | </span>
            <p>{note}</p>
          </p>
        </S.TextBox>
      </S.ContentsBox>
    </S.Container>
  );
};

export default RoomNoteBox;
