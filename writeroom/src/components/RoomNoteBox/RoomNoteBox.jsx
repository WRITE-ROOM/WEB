import * as S from "./RoomNoteBox.style";
import { BsPersonCircle } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const RoomNoteBox = ({ openRoomSDB, openSNB }) => {
  return (
    <S.Container openRoomSDB={openRoomSDB} openSNB={openSNB}>
      <S.ContentsBox>
        <BsPersonCircle size={35} />
        <S.NameBox>
          <p>제리</p>
          <div>
            <FaRegBookmark size={35} />
            <BiDotsVerticalRounded size={35} />
          </div>
        </S.NameBox>
        <S.CategoryWrapper>
          <p>2024.02.01</p>
          <button>음악</button>
        </S.CategoryWrapper>
        <S.TextBox>
          <h1>노래 플레이리스트</h1>
          <h2>Someone Like You |</h2>
          <p>
            이 노래는 이별의 아픔과 함께 흐르는 감정이 담겨 있어, 때로는 마음을
            추스리고 울릴 때가 있다. 강렬한 목소리가 때로는 마음을 추스리고 울릴
            때가 있다. 강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다.
          </p>
        </S.TextBox>
      </S.ContentsBox>
      <S.NoteImg src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></S.NoteImg>
    </S.Container>
  );
};

export default RoomNoteBox;
