import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.img`
  position: relative;
  width: 100%;
  height: 70%;
  object-fit: inherit;
  // RoomSDB 또는 SNB 열렸을 때
  ${({ openRoomSDB }) =>
    openRoomSDB &&
    `
    width: 100%;
    height: 70%; 
    
  `}
  ${({ openSNB }) =>
    openSNB &&
    `
    width: 75%;
    height: 70%; 
    
  `}
  // RoomSDB SNB 둘다 열렸을 때

  ${({ openRoomSDB, openSNB }) =>
    openRoomSDB &&
    openSNB &&
    `
    width: 69%;
  `}
`;

export const NoteList = styled.div`
  padding: 20px;

  h2 {
    font-size: 12px;
  }

  h1 {
    font-size: 20px;
  }
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  p {
    margin-left: ${({ openRoomSDB, openSNB }) =>
      openRoomSDB || openSNB ? "600px" : "800px"};
  }
`;

export const SearchWrapper = styled.div`
  width: 90px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: solid gainsboro 2px;
  cursor: pointer;
  input {
    height: 20px;
    width: 70px;
    border-radius: 15px;
    border: none;
  }
`;
