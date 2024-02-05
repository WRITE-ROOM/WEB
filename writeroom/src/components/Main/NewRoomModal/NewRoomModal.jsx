import React, { useState } from "react";
import * as S from "./NewRoomModal.style";
import { FiCopy } from "react-icons/fi";
import NewRoomImg from "./NewRoomImg/NewRoomImg";
import axios from "axios";
import { useSelector } from "react-redux";

export default function NewRoomModal({ isOpen, onClose }) {
  const [roomName, setRoomName] = useState("제목 없음");
  const user = useSelector((state) => state.user);
  const userId = user.userId;

  const uploadRoomImg = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(`/rooms/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      console.log('사진 업로드 됨')
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRoomInfo = async () => {
    const roomInfo = {
      name: roomName,
      user: userId,
    };
    try {
      // 회원가입, 로그인 API 구현되면, 1 -> userId로 바꿀 예정
      const res = await axios.post(`/rooms/${1}`, roomInfo);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateRoom = async () => {
    await uploadRoomImg();
    await fetchRoomInfo();
  };
  if (!isOpen) return null;
  return (
    <S.ModalBackground>
      <S.Modal>
        <S.Top>
          <p>신규 룸 만들기</p>
          <S.closeBtn size="20" onClick={onClose} />
        </S.Top>
        <NewRoomImg onImageUpload={uploadRoomImg} />
        <S.RoomName>
          <p>룸 이름</p>
          <input
            placeholder="룸 이름을 작성해주세요."
            value={roomName} 
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
        </S.RoomName>
        <S.MakeBtn onClick={handleCreateRoom}>
          <FiCopy color="white" />
          <p>룸 만들기</p>
        </S.MakeBtn>
      </S.Modal>
    </S.ModalBackground>
  );
}
