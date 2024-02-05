import React, { useEffect, useState } from 'react'
import * as S from "./MainInfo.style"
import MainMenuModal from '../MainMenuModal/MainMenuModal';
import { HiMiniUserCircle } from "react-icons/hi2";
import { useSelector } from 'react-redux';


export default function MainInfo({room, roomIndex}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
  const rooms = useSelector((state) => state.room.room);
  const userList = rooms[roomIndex].userRoomList;

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
              <S.Users size="20" color="rgba(181, 169, 148, 1)"/>
              <S.Users size="20" color="rgba(181, 169, 148, 1)"/>
              <S.Users size="20" color="rgba(181, 169, 148, 1)"/>
					{/* MainUser는 room redux 안에 있는 totalMember를 활용하여 map으로 표현할 예정 */}
					<S.Menu onClick={handleOpenModal}/>
				</S.Right>
			</S.Container>
					{isModalOpen ? <MainMenuModal roomIndex={roomIndex}/> : null}
    </div>
  )
}
