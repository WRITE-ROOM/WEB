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
import { selectRoomInfoState } from "../redux/roomInfo";
import { setRoomExplain, setRoomTitle } from "../redux/roomInfo";
export const RoomSetting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomInfoSelector = useSelector(selectRoomInfoState);
  const [formIntroduction, setFormIntroduction] = useState("");
  const [formName, setFormName] = useState(roomInfoSelector.roomTitle);
  const [openModal, setOpenModal] = useState(false);
  const [isChangeImg, setChangeImg] = useState(false);
  const modalHandler = () => {
    setOpenModal(!openModal);
  };
  const saveInput = () => {
    // dispatch(setRoomTitle(formName));
    // dispatch(setRoomExplain(formIntroduction));
    console.log(roomInfoSelector);
  };

  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar title="룸 관리" onSave={saveInput} />
        <S.ImgBox src={`${roomInfoSelector.roomImg}`}></S.ImgBox>
        <S.DeleteImgButton>
          <IoClose size={30} />
        </S.DeleteImgButton>
        <RoomInputField
          label="룸 이름"
          value={formName}
          onChange={setFormName}
          maxLength={50}
        />
        <RoomInputField
          label="룸 소개"
          value={formIntroduction}
          onChange={setFormIntroduction}
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
        {/* <RoomModalSec
          title1="수정 내용을 삭제하시겠어요?"
          description="지금 나가면 수정사항이 모두 삭제됩니다."
          button1="삭제하기"
          button2="저장하고 나가기"
        /> */}
      </S.Contents>
    </S.Wrapper>
  );
};
export default RoomSetting;
