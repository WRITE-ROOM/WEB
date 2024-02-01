import React, { useState } from 'react'
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

export default function MainBox() {
	const [isSNBOpen, setIsSNBOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	let navigate = useNavigate();

	const toggleSNB = () => {
		setIsSNBOpen((prev) => !prev);
	};
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
		<div>
			<S.App>
				<h1>나의 룸 목록</h1>
				<S.Container with_SNB={isSNBOpen}>
					{/* room redux 만들어지면 그거 사용해서 map으로 표현할 예정 */}
					<S.Room>
						<S.Picture onClick={() => {navigate('/room')}}>
							<img src={writeRoomImg} alt=''/>
						</S.Picture>
						<MainInfo></MainInfo>
					</S.Room>
					<S.Room>
						<S.Picture onClick={() => {navigate('/room')}}>
							<img src={writeRoomImg} alt=''/>
						</S.Picture>
						<MainInfo></MainInfo>
					</S.Room>
					<S.Room/>
					<S.Room/>
					<S.Room/>
					<S.Room/>
					<S.Room/>
					<S.Room/>
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
