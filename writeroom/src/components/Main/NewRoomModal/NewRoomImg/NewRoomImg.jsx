import React, { useState } from "react";
import * as S from "./NewRoomImg.style";
import { PiImageSquareLight } from "react-icons/pi";

export default function NewRoomImg(onImageUpload) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      console.log(file.name); // file.name을 서버에 전송해야함
    }
  };

  return (
    <S.Container>
      <S.Picture>
        {image ? (
          <label htmlFor="input-file">
            <img src={image} alt="Uploaded" />
          </label>
        ) : (
          <label for="input-file">
            <p>룸 이미지 추가</p>
            <PiImageSquareLight size="20" color="white" />
          </label>
        )}
        <input type="file" id="input-file" onChange={handleImageChange} />
      </S.Picture>
    </S.Container>
  );
}
