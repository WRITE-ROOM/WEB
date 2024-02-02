import React from "react";
import { SimpleContainer } from "../../Header/Dropdown.style";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import * as M from "./SelectRoomModal.style";

import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setCurrentModal,
  setSelectedRoom,
} from "../../../redux/selectModal";

const SelectRoomModal = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  const handleSelectedRoom = (name) => {
    dispatch(setSelectedRoom(name));
    dispatch(setSelectedCategory(null));
    dispatch(setCurrentModal("Category"));
  };
  return (
    <M.Container>
      <SimpleContainer
        $width="320px"
        $height="178px"
        $top="0"
        $padding="24px 24px 12px 24px"
      >
        <M.Rooms>
          {categories.map((room, index) => (
            <M.Room
              key={index}
              onClick={() => handleSelectedRoom(room.roomname)}
            >
              {room.roomname}
            </M.Room>
          ))}
        </M.Rooms>

        <M.ShowMore>
          <IoIosArrowDown />
        </M.ShowMore>

        <M.CreateRoom>
          <FiPlus size={18} />
          <p>룸 추가하기</p>
        </M.CreateRoom>
      </SimpleContainer>
    </M.Container>
  );
};

export default SelectRoomModal;
