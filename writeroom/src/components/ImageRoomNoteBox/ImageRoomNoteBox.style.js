import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  border: solid gainsboro;
  width: ${({ openSNB, openRoomSNB }) =>
    openSNB && openRoomSNB ? "60%" : openSNB ? "75%" : "100%"};

  border-radius: 10px;
  height: 200px;
  display: flex;
`;

export const TopWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: gainsboro 3px solid;
`;

export const UserIconWrapper = styled.div`
  /* position: absolute;
  margin-bottom: 120px; */
`;

export const ContentsBox = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${({ openRoomSNB }) => (openRoomSNB ? "50px" : "50px")};
`;

export const CategoryWrapper = styled.div`
  color: #b5a995;
  display: flex;
  margin-left: 50px;
  /* padding-bottom: 50px; */
  align-items: center;
  gap: 10px;
  button {
    padding: 3px 9px;
    color: #b5a995;
    border-radius: 15px;
    background: none;
    border: gainsboro 2px solid;
  }
`;

export const TextBox = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ openRoomSNB }) => (openRoomSNB ? "500px" : "700px")};

  h1 {
    margin-top: 10px;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    /* display: -webkit-box; 이 스타일링 때문에 줄바꿈일어남 근데 2줄만들려면 필요한듯 */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const SubTitle = styled.span`
  font-weight: bolder;
  font-size: 16px;
`;

export const NoteImg = styled.img`
  width: ${({ openSNB, openRoomSNB }) =>
    openSNB && openRoomSNB ? "35%" : openSNB ? "75%" : "500px"};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const ToggleBox = styled.div`
  position: absolute;
  margin-top: 120px;
  padding: 10px;
  width: 100px;
  background-color: white;
  border: 1px solid;
  cursor: pointer;
  margin-right: 90px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1), -5px 0 10px rgba(0, 0, 0, 0.1);
  hr {
    width: 100%;
    height: 1px;
    background-color: gray;
    border: 0;
  }
`;

export const Button = styled.button`
  background-color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
