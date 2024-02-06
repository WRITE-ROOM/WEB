import React, { useState } from "react";
import * as S from "./NewRoomImg.style";
import { PiImageSquareLight } from "react-icons/pi";

export default function NewRoomImg(props) {

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      props.setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.Container>
      <S.Picture>
        {props.image ? (
          <label htmlFor="input-file">
            <img src={props.image} alt="Uploaded" />
          </label>
        ) : (
          <label htmlFor="input-file">
            <p>룸 이미지 추가</p>
            <PiImageSquareLight size="20" color="white" />
          </label>
        )}
        <input type="file" id="input-file" onChange={handleImageChange} />
      </S.Picture>
    </S.Container>
  );
}
