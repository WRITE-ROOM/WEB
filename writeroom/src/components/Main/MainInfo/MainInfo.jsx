import React, { useState } from 'react'
import * as S from "./MainInfo.style"
import MainUser from '../MainUser/MainUser';
import MainMenuModal from '../MainMenuModal/MainMenuModal';

export default function MainInfo({room, roomIndex}) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(!isModalOpen);
	}
  return (
    <div>
      <S.Container>
				<S.Left>
					<S.RoomName>{room.roomTitle}</S.RoomName>
					<S.editTime>{room.updatedAt} 편집</S.editTime>
				</S.Left>
				<S.Right>
					<MainUser/>
					{/* MainUser는 room redux 안에 있는 totalMember를 활용하여 map으로 표현할 예정 */}
					<S.Menu onClick={handleOpenModal}/>
				</S.Right>
			</S.Container>
					{isModalOpen ? <MainMenuModal roomIndex={roomIndex}/> : null}
    </div>
  )
}
