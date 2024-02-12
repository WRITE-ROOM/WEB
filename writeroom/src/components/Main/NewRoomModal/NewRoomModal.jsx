import React, { useState } from "react";
import * as S from "./NewRoomModal.style";
import * as R from "./NewRoomImg/NewRoomImg.style";
import { FiCopy } from "react-icons/fi";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PiImageSquareLight } from "react-icons/pi";

import WriteRoomImg from "../../../assets/writeRoomImg.png";

export default function NewRoomModal({ isOpen, onClose }) {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [roomName, setRoomName] = useState("제목 없음");

  const receivedToken = localStorage.getItem("token");
  // const receivedToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo"

  let navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };

  const fetchRoomInfo = async () => {
    const formData = new FormData();
    if (image === null) {
      const defaultImage = await fetch(WriteRoomImg).then((res) => res.blob());
      formData.append("roomImg", defaultImage, "writeRoomImg.png");
    } else {
      const decodedImage = await decodeImage(image);
      const imageExtension = imageName.split(".").pop();
      const blobImage = new Blob([decodedImage], {
        type: `image/${imageExtension}`,
      });
      formData.append("roomImg", blobImage, imageName);
    }
    formData.append("request", JSON.stringify({ roomTitle: roomName }));
    try {
      const res = await axios.post(`/rooms/createRoom`, formData, {
        headers: {

          'Authorization': `Bearer ${receivedToken}`,
          },
       });
      navigate(`/rooms/${res.data.result.roomId}`);

    } catch (error) {
      console.error(error);
    }
  };

  const decodeImage = async (base64Image) => {
    const blobImage = await fetch(base64Image).then((res) => res.blob());
    return blobImage;
  };

  if (!isOpen) return null;
  return (
    <S.ModalBackground>
      <S.Modal>
        <S.Top>
          <p>신규 룸 만들기</p>
          <S.closeBtn size="20" onClick={onClose} />
        </S.Top>
        {/* <NewRoomImg image={image} setImage={setImage} setImageName={setImageName}/> */}
        <R.Container>
          <R.Picture>
            {image ? (
              <label htmlFor="input-file">
                <img src={image} alt="Uploaded" />
              </label>
            ) : (
              <label htmlFor="input-file">
                <p>룸 이미지 추가</p>
                <PiImageSquareLight size="20" color="white" />
              </label>
            )}
            <input type="file" id="input-file" onChange={handleImageChange} />
          </R.Picture>
        </R.Container>
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
        <S.MakeBtn onClick={fetchRoomInfo}>
          <FiCopy color="white" />
          <p>룸 만들기</p>
        </S.MakeBtn>
      </S.Modal>
    </S.ModalBackground>
  );
}
