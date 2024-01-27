import styled from "styled-components";

export const ImgContainer = styled.img`
  position: relative;
  width: 50px;
  height: 100px;
  // RoomSDB 열렸을 때
  ${(props) =>
    props.openRoomSDB &&
    `
    width: 100px;
    height: 100px; 
  `}
  img {
    object-fit: inherit;
  }
`;
