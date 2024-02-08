import React, { useState } from "react";
import { BiCog } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DropdownContainer } from "../Header/Dropdown.style";
import * as S from "./Setting.style";
import RoomModal from "../RoomModal/RoomModal";

const Setting = ({ type, action, noteId, roomId }) => {
  const [showSettingMenu, setShowSettingMenu] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleDelete = () => {
    if (action === "deleteNote") {
      setOpenModal(!openModal);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setShowSettingMenu(!showSettingMenu);
  };

  return (
    <S.Container onClick={handleClick}>
      <S.SettingButton>
        {type === "config" ? (
          <BiCog size={22} color="#fff" />
        ) : (
          <BiDotsVerticalRounded size={22} color="#000" />
        )}
      </S.SettingButton>

      {showSettingMenu && (
        <DropdownContainer $top="30px">
          <ul>
            <li>
              <p>수정하기</p>
            </li>
            <li onClick={handleDelete}>
              <p>삭제하기</p>
            </li>
          </ul>
        </DropdownContainer>
      )}

      {openModal && (
        <RoomModal
          title1="내가 관리하고 있는 룸이에요."
          title2="정말 룸을 삭제하시겠어요?"
        />
      )}
    </S.Container>
  );
};

export default Setting;
