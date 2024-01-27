import styled from "styled-components";

export const ImgContainer = styled.img`
  position: relative;
  width: 95%;
  height: 70%;
  // RoomSDB 또는 SNB 열렸을 때
  ${(props) =>
    (props.openRoomSDB || props.openSNB) &&
    `
    width: 72%;
    height: 50%; 
  `}
  // RoomSDB SNB 둘다 열렸을 때

  ${(props) =>
    props.openRoomSDB &&
    props.openSNB &&
    `
    width: 52%;
    height: 50%; 
  `}
  img {
    object-fit: inherit;
  }
`;
