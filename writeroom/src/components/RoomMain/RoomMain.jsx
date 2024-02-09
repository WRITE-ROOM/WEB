import RoomNoteBox from "../RoomNoteBox/RoomNoteBox";
import * as S from "./RoomMain.style";
import TagSearchBox from "../TagSearchBox/TagSearchBox";
import ImageRoomNoteBox from "../ImageRoomNoteBox/ImageRoomNoteBox";
import Pagination from "react-js-pagination";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { setNoteList } from "../../redux/noteList";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../../redux/room";
import { resetNote } from "../../redux/note";

const RoomMain = ({ openRoomSNB, openSNB }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const [roomTitle, setRoomTitle] = useState("");
  const [roomIntro, setRoomIntro] = useState("");

  const text = [
    `이 노래는 이별의 아픔과 함께 흐르는
    감정이 담겨 있어, 때로는 마음을 추스리고 울릴 때가 있다. 
    강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다. 
    강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다.`,
    `이 노래는 이별의 아픔과 함께 흐르는
    감정이 담겨 있어, 때로는 마음을 추스리고 울릴 때가 있다. 
    강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다. 
    강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다.`,
    `이 노래는 이별의 아픔과 함께 흐르는
    감정이 담겨 있어, 때로는 마음을 추스리고 울릴 때가 있다. 
    강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다. 
    강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다.`,
  ];

  const totalItems = text.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = text.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  // const roomId = 13;
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
      setRoomTitle(res.data.result.roomTitle);
      setRoomIntro(res.data.result.roomIntroduction);
      dispatch(setNoteList(res.data.result.noteList));
      console.log("nono", res.data.result.noteList);
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
      <S.NoteList>
        <h2>{roomIntro}</h2>

        <S.TopBox openRoomSNB={openRoomSNB} openSNB={openSNB}>
          <h1>{roomTitle}</h1>
          <TagSearchBox />
          {/* <p>{noteList.length}개의 노트</p> */}
        </S.TopBox>

        {noteList.map((note, index) => (
          <ImageRoomNoteBox key={index} note={note} roomId={roomId} />
        ))}

        {/* {currentItems.map((note, index) => (
          <ImageRoomNoteBox
            key={index}
            openRoomSNB={openRoomSNB}
            openSNB={openSNB}
            note={note} // 각 노트에 대한 데이터 전달
          />
        ))} */}
        {/* {currentItems.map((note, index) => (
          <RoomNoteBox
            key={index}
            openRoomSNB={openRoomSNB}
            openSNB={openSNB}
            note={note} // 각 노트에 대한 데이터 전달
          />
        ))} */}
      </S.NoteList>
      <S.PaginationBox>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={totalItems}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </S.PaginationBox>
    </S.Container>
  );
};

export default RoomMain;
