import RoomNoteBox from "../RoomNoteBox/RoomNoteBox";
import * as S from "./RoomMain.style";

const RoomMain = ({ openRoomSDB, openSNB }) => {
  return (
    <S.Container>
      <S.ImgContainer
        openRoomSDB={openRoomSDB}
        openSNB={openSNB}
        src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // 테스트 이미지 링크
      />
      <S.NoteList>
        <h2>처음부터 완벽하게 쓰려는 생각을 버리고 그냥 써라</h2>
        <S.TopBox openRoomSDB={openRoomSDB} openSNB={openSNB}>
          <h1>스포츠에 대한 고찰</h1>
          <p>100개의 노트</p>
        </S.TopBox>
        <RoomNoteBox openRoomSDB={openRoomSDB} openSNB={openSNB} />
      </S.NoteList>
    </S.Container>
  );
};

export default RoomMain;
