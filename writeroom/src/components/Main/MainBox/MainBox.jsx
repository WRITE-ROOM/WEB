import React, { useCallback, useEffect, useState } from 'react'
import * as S from "./MainBox.style"
import RecTopic from '../../RecTopic/RecTopic';
import RecTopicClose from '../../RecTopicClose/RecTopicClose';
import Header from '../../Header/Header';
import MainInfo from '../MainInfo/MainInfo';
import writeRoomImg from '../../../assets/writeRoomImg.png'
import NewNoteButton from '../../FloatingButton/NewNoteButton'
import NewRoomButton from '../../FloatingButton/NewRoomButton'
import NewRoomModal from '../NewRoomModal/NewRoomModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from '../../../redux/user'
import { resetRoom, setRoom } from '../../../redux/room';
import { store } from '../../../redux/store';

export default function MainBox() {
	const [isSNBOpen, setIsSNBOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	const user = useSelector((state) => state.user);
	const userId = user.userId;
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

  const fetchRoomList = async () => {
	try {
		const params = {page: 0};
		//   아 나 바보다 API 명세서 그대로 따라가면 되는 거였음 ㅋㅋㅋ
		const res = await axios.get(`/rooms/${1}`, { params });
		dispatch(resetRoom())
		console.log('서버 전달이다.', res.data)
		const rooms = res.data.result;
		rooms.forEach(roomData => {
			const { roomTitle, updatedAt, roomImg } = roomData;
			dispatch(setRoom({ roomTitle, updatedAt, roomImg }));
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
					<S.Room key={index}>
						<S.Picture onClick={() => {
							navigate('/room')
							console.log(room.roomImg)}}>
						<img src={room.roomImg} alt='' />
						</S.Picture>
						<MainInfo room={room}/>
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
