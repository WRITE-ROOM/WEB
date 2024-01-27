import * as S from "./RoomMain.style";

const RoomMain = ({ openRoomSDB, openSNB }) => {
  return (
    <S.ImgContainer
      openRoomSDB={openRoomSDB}
      openSNB={openSNB}
      src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ></S.ImgContainer>
  );
};

export default RoomMain;
