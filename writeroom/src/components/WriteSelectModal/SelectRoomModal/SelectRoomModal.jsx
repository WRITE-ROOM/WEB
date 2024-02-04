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

const rooms = [
  {
    id: 1,
    roomname: "스포츠에 대한 고찰",
    category: [
      { categoryId: 0, categoryName: "전체 노트" },
      { categoryId: 1, categoryName: "카테고리1" },
      { categoryId: 2, categoryName: "카테고리2" },
    ],
  },
  {
    id: 2,
    roomname: "룸이름",
    category: [
      { categoryId: 0, categoryName: "전체 노트" },
      { categoryId: 1, categoryName: "카테고리3" },
      { categoryId: 2, categoryName: "카테고리4" },
      { categoryId: 3, categoryName: "카테고리5" },
    ],
  },
  {
    id: 3,
    roomname: "룸이름2",
    category: [
      { categoryId: 0, categoryName: "전체 노트" },
      { categoryId: 1, categoryName: "카테고리6" },
      { categoryId: 2, categoryName: "카테고리7" },
    ],
  },
];

const SelectRoomModal = () => {
  const dispatch = useDispatch();

  const handleSelectedRoom = (room) => {
    dispatch(
      setSelectedRoom({ roomname: room.roomname, categoryList: room.category })
    );
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
          {rooms.map((room) => (
            <M.Room key={room.id} onClick={() => handleSelectedRoom(room)}>
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
