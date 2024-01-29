import React from "react";
import { SimpleContainer } from "../../Header/Dropdown.style";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import * as M from "./SelectRoomModal.style";

const SelectRoomModal = ({ setSelectedRoom, setCurrentModal }) => {
  const RoomData = [
    {
      id: 1,
      roomname: "스포츠에 대한 고찰",
      category: ["전체", "카테고리", "카테고리", "카테고리"],
    },
    {
      id: 2,
      roomname: "룸이름",
      category: ["전체", "카테고리", "카테고리"],
    },
    {
      id: 3,
      roomname: "룸이름",
      category: ["전체", "카테고리", "카테고리", "카테고리"],
    },
  ];

  const handleSelectedRoom = (name) => {
    setSelectedRoom(name);
    setCurrentModal("Category");
  };

  return (
    <M.Container>
      <SimpleContainer
        width="320px"
        height="178px"
        top="0"
        padding="24px 24px 12px 24px"
      >
        <M.Rooms>
          {RoomData.map((room, index) => (
            <M.Room onClick={() => handleSelectedRoom(room.roomname)}>
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
