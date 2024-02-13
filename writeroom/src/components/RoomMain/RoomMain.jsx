import * as S from "./RoomMain.style";
import TagSearchBox from "../TagSearchBox/TagSearchBox";
import ImageRoomNoteBox from "../ImageRoomNoteBox/ImageRoomNoteBox";
import Pagination from "react-js-pagination";

import { useState, useEffect } from "react";
import { setRoomInfo, resetRoomInfo } from "../../redux/roomInfo";
import { selectRoomInfoState } from "../../redux/roomInfo";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useParams } from "react-router-dom";

const RoomMain = ({ openRoomSNB, openSNB }) => {
  const dispatch = useDispatch();
  const receivedToken = localStorage.getItem("token");
  const roomInfoSelector = useSelector(selectRoomInfoState);

  const params = useParams();
  const roomId = params.roomId;

  useEffect(() => {
    const getNoteList = async () => {
      try {
        const response = await axios.get(`/rooms/${roomId}/list?page=0`, {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        });
        dispatch(setRoomInfo(response.data.result));
      } catch (error) {
        console.error("룸 메인 에러:", error);
      }
    };

    getNoteList();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = roomInfoSelector?.listSize;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <S.Container>
      <S.ImgContainer
        openRoomSNB={openRoomSNB}
        openSNB={openSNB}
        src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // 테스트 이미지 링크
      />
      {roomInfoSelector && (
        <S.NoteList>
          <h2>{roomInfoSelector.roomIntroduction}</h2>
          <S.TopBox openRoomSNB={openRoomSNB} openSNB={openSNB}>
            <h1>{roomInfoSelector.roomTitle}</h1>
            <TagSearchBox />
            <p>{roomInfoSelector.totalElements}개의 노트</p>
          </S.TopBox>
          {roomInfoSelector.noteList &&
            roomInfoSelector.noteList.map((note, index) => (
              <ImageRoomNoteBox
                key={index}
                openRoomSNB={openRoomSNB}
                openSNB={openSNB}
                note={note}
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