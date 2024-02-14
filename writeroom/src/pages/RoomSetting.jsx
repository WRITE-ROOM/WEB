import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import { useEffect, useState } from "react";
import RoomInputField from "../components/RoomInputField/RoomInputField";
import * as S from "./RoomSetting.style";
import RoomModal from "../components/RoomModal/RoomModal";
import RoomModalSec from "../components/RoomModalSec/RoomModalSec";
import { IoClose } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRoomInfoState, setRoomInfo } from "../redux/roomInfo";
import { CiImageOn } from "react-icons/ci";
// import { createBrowserHistory } from "history";

import axios from "axios";
export const RoomSetting = () => {
  // const history = createBrowserHistory();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomInfoSelector = useSelector(selectRoomInfoState);
  const [changedRoomIntroduction, setRoomIntroduction] = useState("");
  const [roomName, setRoomName] = useState(roomInfoSelector.roomTitle);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const receivedToken = localStorage.getItem("token");
  const params = useParams();
  const roomId = params.roomId;

  const roomImg = roomInfoSelector.roomImg;
  const modalHandler = () => {
    setOpenModal(!openModal);
  };
  const saveInput = () => {
    patchRoomInfo();
    console.log(roomInfoSelector);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };

  const isImageBlob = (blob) => {
    return blob instanceof Blob && blob.type.startsWith("image/");
  };

  const decodeImage = async (base64Image) => {
    const blobImage = await fetch(base64Image).then((res) => res.blob());
    return blobImage;
  };

  const getRoomInfo = async () => {
    try {
      const response = await axios.get(`/rooms/${roomId}/list?page=0`, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });
      dispatch(setRoomInfo(response.data.result));
      setImage(response.data.result.roomImg);
    } catch (error) {
      console.error("getRoomTitle 에러:", error);
    }
  };
  const patchRoomInfo = async () => {
    const formData = new FormData();
    if (image === null) {
      const defaultImage = await fetch(roomImg).then((res) => res.blob());
      formData.append("roomImg", defaultImage, "roomImg.png");
    } else if (image === roomImg) {
      console.log("룸 이미지 안 바꿈");
    } else {
      if (!isImageBlob(image)) {
        const decodedImage = await decodeImage(image);
        const imageExtension = imageName.split(".").pop();
        const blobImage = new Blob([decodedImage], {
          type: `image/${imageExtension}`,
        });
        formData.append("roomImg", blobImage, imageName);
      }
    }
    formData.append(
      "request",
      JSON.stringify({
        roomTitle: roomName,
        roomIntroduction: changedRoomIntroduction,
      })
    );
    try {
      const response = await axios.patch(
        `/rooms/updatedRoomInfo/${roomId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
          },
        }
      );
    } catch (error) {
      console.error("updateRoom 에러:", error);
    }
  };

  useEffect(() => {
    getRoomInfo();
  });

  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar title="룸 관리" onSave={saveInput} />
        {/* onClick 시 이미지 삭제하고 인풋 보여주기 */}
        {image ? (
          <>
            <S.ImgBox src={`${roomInfoSelector.roomImg}`}></S.ImgBox>
            <S.DeleteImgButton>
              <IoClose size={30} />
            </S.DeleteImgButton>
          </>
        ) : (
          <S.StyledFileInput>
            <label htmlFor="file">
              <CiImageOn size={40} />
            </label>
            <input
              name="file"
              id="file"
              type="file"
              onChange={handleImageChange}
            />
          </S.StyledFileInput>
        )}
        {
          <RoomInputField
            label="룸 이름"
            value={roomName}
            onChange={setRoomName}
            maxLength={50}
          />
        }
        <RoomInputField
          label="룸 소개"
          value={changedRoomIntroduction}
          onChange={setRoomIntroduction}
          maxLength={160}
          placeholder="룸 설명을 입력해주세요"
        />
        <S.DeleteButton onClick={modalHandler}>룸 삭제</S.DeleteButton>
        {openModal && (
          <RoomModal
            title1="내가 관리하고 있는 룸이에요."
            title2="정말 룸을 삭제하시겠어요?"
            button2="삭제"
          />
        )}
        {openModal2 && (
          <RoomModalSec
            title1="수정 내용을 삭제하시겠어요?"
            description="지금 나가면 수정사항이 모두 삭제됩니다."
            button1="삭제하기"
            button2="저장하고 나가기"
          />
        )}
      </S.Contents>
    </S.Wrapper>
  );
};
export default RoomSetting;
