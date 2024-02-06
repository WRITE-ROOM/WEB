import React, { useEffect, useState } from 'react'
import * as S from "./MainBox.style"
import RecTopic from '../../RecTopic/RecTopic';
import RecTopicClose from '../../RecTopicClose/RecTopicClose';
import MainInfo from '../MainInfo/MainInfo';
import NewNoteButton from '../../FloatingButton/NewNoteButton'
import NewRoomButton from '../../FloatingButton/NewRoomButton'
import NewRoomModal from '../NewRoomModal/NewRoomModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { resetRoom, setRoom } from '../../../redux/room';
import { store } from '../../../redux/store';

export default function MainBox() {
	const [isSNBOpen, setIsSNBOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const user = useSelector((state) => state.user);
	const userId = user.userId;
	// const receivedToken = user.accessToken;
	const rooms = useSelector((state) => state.room.room);
	
	let navigate = useNavigate();
	let dispatch = useDispatch();
	const toggleSNB = () => {
		setIsSNBOpen((prev) => !prev);
	};
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const receivedToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";
  const fetchRoomList = async () => {
	try {
		const page = 0;
		console.log(receivedToken)
		console.log(`/rooms/myRoomList?page=${page}`)
		const res = await axios.get(`/rooms/myRoomList?page=${page}`, { 
			headers: {
				'Authorization': `Bearer ${receivedToken}`
			  },
		 });
		dispatch(resetRoom())
		console.log('서버 전달이다.', res.data)
		const rooms = res.data.result;
		rooms.forEach(roomData => {
			const { userId, roomId, roomTitle, updatedAt, roomImg, userRoomList } = roomData;
			dispatch(setRoom({ userId, roomId, roomTitle, updatedAt, roomImg, userRoomList }));
		});
		console.log('redux 보는 거다', store.getState().room.room);
	} catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
	fetchRoomList();
  }, [])

  return (
		<div>
			<S.App>
				<h1>나의 룸 목록</h1>
				<S.Container with_SNB={isSNBOpen}>
				{rooms.map((room, index) => (
					<S.Room key={index} >
						<S.Picture onClick={() => {navigate('/room')}}>
						<img src={room.roomImg} alt='' />
						</S.Picture>
						<MainInfo room={room} roomIndex={index}/>
					</S.Room>
				))}
				</S.Container>
				<NewNoteButton/> <NewRoomButton onClick={openModal}/>
				<NewRoomModal isOpen={isModalOpen} onClose={closeModal}/>
				{isSNBOpen ? 
				<RecTopic onToggle={toggleSNB}></RecTopic>
				: <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>}
			</S.App>

		</div>
  )
}
