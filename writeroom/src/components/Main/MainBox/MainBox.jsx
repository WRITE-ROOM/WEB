import React, { useEffect, useState } from "react";
import * as S from "./MainBox.style";
import * as R from "../../Myprofile/MyBookmark/MyBookmark.style" 
import RecTopic from "../../RecTopic/RecTopic";
import RecTopicClose from "../../RecTopicClose/RecTopicClose";
import MainInfo from "../MainInfo/MainInfo";
import NewNoteButton from "../../FloatingButton/NewNoteButton";
import NewRoomButton from "../../FloatingButton/NewRoomButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resetRoom, setRoom } from "../../../redux/room";
import { selectRoomIds } from "../../../redux/room";
import InfiniteScroll from "react-infinite-scroll"
import Pagination from "react-js-pagination";


export default function MainBox() {
  const [isSNBOpen, setIsSNBOpen] = useState(false);
  const [page, setPage] = useState(1); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [count, setCount] = useState(); // 룸의 총 개수
  const [loading, setLoading] = useState(false); //로딩 성공, 실패를 담을 state
  const roomIdList = useSelector(selectRoomIds);
  const rooms = useSelector((state) => state.room.room);

  const [roomlist, setRoomList] = useState([]);
	let navigate = useNavigate();
	let dispatch = useDispatch();
	const toggleSNB = () => {
		setIsSNBOpen((prev) => !prev);
	};
  const handlePageChange = (page) => {
    setPage(page);
  };

	const fetchRoomList = async () => {
    const userId = localStorage.getItem('id');
    const receivedToken = localStorage.getItem('token');

    try {
      const res = await axios.get(`/rooms/myRoomList?page=${page-1}`, { 
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      const room = res.data.result;
      setRoomList(prev => [...prev, ...room]);
      setLoading(true);
      
      console.log(roomlist);
      dispatch(resetRoom())
      room.forEach(roomData => {
        const { roomId, roomTitle, updatedAt, roomImg, userRoomList } = roomData;
        dispatch(setRoom({ roomId, roomTitle, updatedAt, roomImg, userRoomList }));
      });
      setCount(room[0].totalElements);
      console.log(count)
      console.log(res.data);
    } catch (error) { 
      console.error(error);
    }
  };

  // const fetchRoomList = async () => {
  //   const userId = localStorage.getItem('id');
	//   const receivedToken = localStorage.getItem('token');

  //   try {
  //     const res = await axios.get(`/rooms/myRoomList/allData`, { 
  //       headers: {
  //         'Authorization': `Bearer ${receivedToken}`
  //         },
  //     });
  //     dispatch(resetRoom())
  //     const room = res.data.result;
  //     room.forEach(roomData => {
  //       const { roomId, roomTitle, updatedAt, roomImg, userRoomList } = roomData;
  //       dispatch(setRoom({ roomId, roomTitle, updatedAt, roomImg, userRoomList }));
  //     });
  //     console.log(res.data)
  //   } catch (error) {
  //         console.error(error);
  //   }
  // }
    
  useEffect(() => {
    fetchRoomList();
  }, [page]);

  return (
    <div>
      <S.App>
        <h1>나의 룸 목록</h1>
        <S.Container with_SNB={isSNBOpen}>
          {rooms.map((room, index) => (
            <S.Room key={index}>
              <S.Picture
                onClick={() => {navigate(`/rooms/${roomIdList[index]}`);}}>
                <img src={room.roomImg} alt="" />
              </S.Picture>
              <MainInfo roomId={room.roomId} room={room} roomIndex={index} />
            </S.Room>
          ))}
        </S.Container>
        {/* <S.Loading>로딩 중...</S.Loading> */}
        <NewNoteButton /> <NewRoomButton />
        {/* <NewRoomModal isOpen={isModalOpen} onClose={closeModal} /> */}
        {isSNBOpen ? (
          <RecTopic onToggle={toggleSNB}></RecTopic>
        ) : (
          <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>
        )}
      <R.PagenationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={12}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={handlePageChange}
        />
      </R.PagenationBox>
      </S.App>
    </div>
  );
}
