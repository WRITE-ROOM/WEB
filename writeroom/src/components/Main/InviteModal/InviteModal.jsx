import React from 'react'
import * as S from "./InviteModal.style"
import { FiCopy } from "react-icons/fi";
import { useLocation } from 'react-router-dom';

export default function InviteModal({isOpen, onClose}) {
	const location = useLocation();
	const copyURL = async(text) => {
		try {
			await navigator.clipboard.writeText(text);
			alert('링크가 복사되었습니다.');
		} catch(err) {
			console.log(err);
		}
	}
if (!isOpen) return null;
return (
	<S.ModalBackground>
		<S.Modal>
			<S.Top>
				<p>룸 초대하기</p>
				<S.closeBtn size='20' onClick={onClose}/>
			</S.Top>
			<S.RoomName>
				<h6>룸 초대 URL</h6>
				<p>{`localhost:3000/room/roomId나중에수정예정`}</p>
			</S.RoomName>
			<S.CopyBtn onClick={() => {copyURL(`localhost:3000/room/roomId나중에수정예정`)}}>
				<FiCopy color='white'/>
				<p>링크 복사</p>
			</S.CopyBtn>
		</S.Modal>
	</S.ModalBackground>
)
}
