import RoomNoteBox from "../RoomNoteBox/RoomNoteBox";
import * as S from "./RoomMain.style";
<<<<<<< feature/#27
import TagSearchBox from "../TagSearchBox/TagSearchBox";
import ImageRoomNoteBox from "../ImageRoomNoteBox/ImageRoomNoteBox";
import Pagination from "react-js-pagination";
import { useState } from "react";
const RoomMain = ({ openRoomSNB, openSNB }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

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

  return (
    <S.Container>
      <S.ImgContainer
        openRoomSNB={openRoomSNB}
=======

const RoomMain = ({ openRoomSDB, openSNB }) => {
  return (
    <S.Container>
      <S.ImgContainer
        openRoomSDB={openRoomSDB}
>>>>>>> main
        openSNB={openSNB}
        src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // 테스트 이미지 링크
      />
      <S.NoteList>
        <h2>처음부터 완벽하게 쓰려는 생각을 버리고 그냥 써라</h2>
<<<<<<< feature/#27
        <S.TopBox openRoomSNB={openRoomSNB} openSNB={openSNB}>
          <h1>스포츠에 대한 고찰</h1>
          <TagSearchBox />
          <p>100개의 노트</p>
        </S.TopBox>
        {currentItems.map((note, index) => (
          <ImageRoomNoteBox
            key={index}
            openRoomSNB={openRoomSNB}
            openSNB={openSNB}
            note={note} // 각 노트에 대한 데이터 전달
          />
        ))}
        {currentItems.map((note, index) => (
          <RoomNoteBox
            key={index}
            openRoomSNB={openRoomSNB}
            openSNB={openSNB}
            note={note} // 각 노트에 대한 데이터 전달
          />
        ))}
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
=======
        <S.TopBox openRoomSDB={openRoomSDB} openSNB={openSNB}>
          <h1>스포츠에 대한 고찰</h1>
          <p>100개의 노트</p>
        </S.TopBox>
        <RoomNoteBox openRoomSDB={openRoomSDB} openSNB={openSNB} />
      </S.NoteList>
>>>>>>> main
    </S.Container>
  );
};

export default RoomMain;
