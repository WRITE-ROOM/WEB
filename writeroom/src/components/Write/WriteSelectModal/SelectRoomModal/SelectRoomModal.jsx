import React, { useEffect, useState } from "react";
import { SimpleContainer } from "../../../Header/Dropdown.style";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import * as M from "./SelectRoomModal.style";

import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setCurrentModal,
  setSelectedRoom,
} from "../../../../redux/selectModal";
import NewRoomModal from "../../../Main/NewRoomModal/NewRoomModal";

const SelectRoomModal = () => {
  const dispatch = useDispatch();

  const handleSelectedRoom = (room) => {
    dispatch(setSelectedRoom({ roomname: room.roomTitle }));
    dispatch(setSelectedCategory(null));
    dispatch(setCurrentModal("Category"));
  };

  const rooms = useSelector((state) => state.room.room);

  const [showMoreRoom, setShowMoreRoom] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(rooms);
  return (
    <M.Container>
      <SimpleContainer $width="320px" $top="0" $padding="16px 16px 8px 16px">
        <M.Rooms>
          {rooms.slice(0, 3).map((room, index) => (
            <M.Room key={index} onClick={() => handleSelectedRoom(room)}>
              {room.roomTitle}
            </M.Room>
          ))}
          {showMoreRoom &&
            rooms.slice(3).map((room, index) => (
              <M.Room key={index} onClick={() => handleSelectedRoom(room)}>
                {room.roomTitle}
              </M.Room>
            ))}
        </M.Rooms>

        <M.ShowMore onClick={() => setShowMoreRoom(true)}>
          <IoIosArrowDown />
        </M.ShowMore>

        <M.CreateRoom onClick={openModal}>
          <FiPlus size={18} />
          <p>룸 추가하기</p>
        </M.CreateRoom>

        <NewRoomModal isOpen={isModalOpen} onClose={closeModal} />
      </SimpleContainer>
    </M.Container>
  );
};

export default SelectRoomModal;
