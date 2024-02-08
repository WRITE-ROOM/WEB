import React, { useState } from "react";
import { BiCog } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DropdownContainer } from "../Header/Dropdown.style";
import * as S from "./Setting.style";
import DeleteNoteModal from "../DeleteNoteModal/DeleteNoteModal";

const Setting = ({ type, noteId, roomId }) => {
  const [showSettingMenu, setShowSettingMenu] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleDeleteModal = () => {
    setShowSettingMenu(!showSettingMenu);
    setOpenModal(!openModal);
  };

  const handleClick = (e) => {
    setShowSettingMenu(!showSettingMenu);
  };

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <S.SettingButton onClick={handleClick}>
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
            <li onClick={handleDeleteModal}>
              <p>삭제하기</p>
            </li>
          </ul>
        </DropdownContainer>
      )}

      {openModal && (
        <DeleteNoteModal
          noteId={noteId}
          roomId={roomId}
          setOpenModal={setOpenModal}
        />
      )}
    </S.Container>
  );
};

export default Setting;
