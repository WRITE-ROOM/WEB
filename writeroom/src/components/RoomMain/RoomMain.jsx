import * as S from "./RoomMain.style";
import TagSearchBox from "../TagSearchBox/TagSearchBox";
import ImageRoomNoteBox from "../ImageRoomNoteBox/ImageRoomNoteBox";
import Pagination from "react-js-pagination";

import { useState, useEffect } from "react";
import { setRoomInfo, resetRoomInfo } from "../../redux/roomInfo";
import { selectRoomInfoState } from "../../redux/roomInfo";
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
      console.log(response.data);
      dispatch(resetRoomInfo());
      dispatch(
        setRoomInfo({
          roomId: response.data.roomId,
          roomTitle: response.data.roomTitle,
          roomIntroduction: response.data.roomIntroduction,
          updatedAt: response.data.updatedAt,
          roomImg: response.data.roomImg,
          userRoomList: response.data.userRoomList,
          totalElements: response.data.totalElements,
          listSize: response.data.listSize,
          noteList: response.data.noteList,
        })
      );
    } catch (error) {
      console.error("룸 메인 에러:", error);
    }
  };

  const roomInfoSelector = useSelector(selectRoomInfoState);

  useEffect(() => {
    getNoteList();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = roomInfoSelector?.listSize;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  // console.log(roomSelector.room);
  const currentItems = roomInfoSelector?.noteList;
  const accessToken = localStorage.getItem("token");
  // const accessToken =
  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  const { roomId } = useParams();

  const fetchNoteList = async () => {
    try {
      const params = { page: 0 };
      const res = await axios.get(`/rooms/${roomId}/list`, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      resetNote();
      console.log(res.data);
      setRoomTitle(res.data.result.roomTitle);
      setRoomIntro(res.data.result.roomIntroduction);
      dispatch(setNoteList(res.data.result.noteList));
    } catch (error) {
      console.log(error);
    }
  };

  const noteList = useSelector((state) => state.noteList);

  useEffect(() => {
    fetchNoteList();
  }, []);
  console.log("noteLIST", noteList);

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
          {currentItems &&
            currentItems.map((note, index) => (
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
