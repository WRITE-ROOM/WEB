import React, { useEffect, useState } from 'react'
import * as S from "./MainMenuModal.style"
import { useNavigate } from 'react-router-dom'
import InviteModal from '../InviteModal/InviteModal';
import axios from 'axios';

export default function MainMenuModal({roomIndex}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(true);


	let navigate = useNavigate();

	const openModal = async() => {
    setIsModalOpen(true);
		setIsMenuVisible(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        {isMenuVisible && (
        <S.Modal>
          <button onClick={() => {openModal()}}>초대하기</button>
          <button onClick={() => navigate('/rooms/setting')}>룸 관리</button>
        </S.Modal>
      )}
				<InviteModal isOpen={isModalOpen} onClose={closeModal} roomIndex={roomIndex}></InviteModal>
    </div>
  )
}
