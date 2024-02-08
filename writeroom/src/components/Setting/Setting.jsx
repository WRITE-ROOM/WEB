import React, { useState } from "react";
import { BiCog } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DropdownContainer } from "../Header/Dropdown.style";
import * as S from "./Setting.style";
import RoomModal from "../RoomModal/RoomModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteNoteModal from "../DeleteNoteModal/DeleteNoteModal";

const Setting = ({ type, noteId, roomId }) => {
  const navigate = useNavigate();
  const [showSettingMenu, setShowSettingMenu] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  // const deleteNote = async () => {
  //   try {
  //     const res = await axios.delete(`/notes/${noteId}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleDeleteModal = () => {
    setShowSettingMenu(!showSettingMenu);
    setOpenModal(!openModal);

    // deleteNote();
    // navigate(`/rooms/${roomId}`);
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
