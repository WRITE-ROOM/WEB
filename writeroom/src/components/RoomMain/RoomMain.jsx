import RoomNoteBox from "../RoomNoteBox/RoomNoteBox";
import * as S from "./RoomMain.style";
import TagSearchBox from "../TagSearchBox/TagSearchBox";
import ImageRoomNoteBox from "../ImageRoomNoteBox/ImageRoomNoteBox";
import Pagination from "react-js-pagination";
import { useState, useEffect } from "react";
import room, { resetRoom, setRoom } from "../../redux/room";
import { selectRoomState } from "../../redux/room";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const RoomMain = ({ openRoomSNB, openSNB }) => {
  const dispatch = useDispatch();
  const receivedToken = localStorage.getItem("token");
  const getNoteList = async () => {
    try {
      const response = await axios.get("/rooms/13/list?page=0", {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(resetRoom());
      dispatch(
        setRoom({
          roomId: response.data.result.roomId,
          roomTitle: response.data.result.roomTitle,
          roomIntroduction: response.data.result.roomIntroduction,
          updatedAt: response.data.result.updatedAt,
          roomImg: response.data.result.roomImg,
          userRoomList: response.data.result.userRoomList,
          totalElements: response.data.result.totalElements,
          listSize: response.data.result.listSize,
          noteList: response.data.result.noteList,
        })
      );
    } catch (error) {
      console.error("룸 메인 에러:", error);
    }
  };

  const roomSelector = useSelector(selectRoomState);
  useEffect(() => {
    getNoteList();
  }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  // const totalItems = roomSelector.room[0].listSize;
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // console.log(roomSelector.room);
  const currentItems = roomSelector.room[0]?.noteList;
  return (
    <S.Container>
      <S.ImgContainer
        openRoomSNB={openRoomSNB}
        openSNB={openSNB}
        src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // 테스트 이미지 링크
      />
      {roomSelector.room[0] && (
        <S.NoteList>
          <h2>{roomSelector.room[0].roomIntroduction}</h2>
          <S.TopBox openRoomSNB={openRoomSNB} openSNB={openSNB}>
            <h1>{roomSelector.room[0].roomTitle}</h1>
            <TagSearchBox />
            <p>{roomSelector.room[0].totalElements}개의 노트</p>
          </S.TopBox>
          {currentItems.map((note, index) => (
            <ImageRoomNoteBox
              key={index}
              openRoomSNB={openRoomSNB}
              openSNB={openSNB}
              note={note} // 각 노트에 대한 데이터 전달
            />
          ))}
        </S.NoteList>
      )}
      {/* <S.PaginationBox>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={totalItems}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </S.PaginationBox> */}
    </S.Container>
  );
};

export default RoomMain;
