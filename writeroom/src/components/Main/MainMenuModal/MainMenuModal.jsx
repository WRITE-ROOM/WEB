import React, { useEffect, useState } from 'react'
import * as S from "./MainMenuModal.style"
import { useNavigate } from 'react-router-dom'
import InviteModal from '../InviteModal/InviteModal';

export default function MainMenuModal() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(true);


	let navigate = useNavigate();

  const RoomManagementClick = () => {
    navigate('/룸관리URL');
  };

	const openModal = () => {
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
          <button onClick={() => navigate('/룸관리URL')}>룸 관리</button>
        </S.Modal>
      )}
				<InviteModal isOpen={isModalOpen} onClose={closeModal}></InviteModal>
    </div>
  )
}
