import * as S from "./ImageRoomNoteBox.style";
import Bookmark from "../Bookmark/Bookmark";
import { HiMiniUserCircle } from "react-icons/hi2";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import RoomModal from "../RoomModal/RoomModal";
const ImageRoomNoteBox = ({ openRoomSNB, openSNB, note }) => {
  const [isClick, setIsClick] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const {
    noteTitle,
    noteSubtitle,
    noteContent,
    writer,
    createdAt,
    userProfileImg,
    tagList,
    noteImg,
  } = note;
  const extractedDate = createdAt.substring(0, 10);
  console.log(tagList[0].tagName);
  return (
    <S.Container openRoomSNB={openRoomSNB} openSNB={openSNB}>
      <S.ContentsBox>
        <S.TopWrapper>
          <S.UserIconWrapper>
            {/* 유저 프로필 이미지가 제대로 안불러와짐 */}
            <img src={userProfileImg} alt="" />
          </S.UserIconWrapper>
          <S.NameBox openRoomSNB={openRoomSNB}>
            <p>{writer}</p>
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
            <p>{extractedDate}</p>
            {tagList.map(({ tagId, tagName }) => (
              <button key={tagId}>{tagName}</button>
            ))}
          </S.CategoryWrapper>
        </S.TopWrapper>
        <S.TextBox openRoomSNB={openRoomSNB} openSNB={openSNB}>
          <h1>{noteTitle}</h1>
          <p>
            <S.SubTitle>{noteSubtitle} | </S.SubTitle>
            <span>{noteContent}</span>
          </p>
        </S.TextBox>
      </S.ContentsBox>
      <S.NoteImg
        openRoomSNB={openRoomSNB}
        openSNB={openSNB}
        src={noteImg}
      ></S.NoteImg>
    </S.Container>
  );
};

export default ImageRoomNoteBox;
