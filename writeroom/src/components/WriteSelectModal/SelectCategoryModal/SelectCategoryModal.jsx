import React, { useState } from "react";
import * as M from "./SelectCategoryModal.style";
import { SimpleContainer } from "../../Header/Dropdown.style";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const SelectCategoryModal = ({ selectedRoom, setCurrentModal }) => {
  const RoomData = [
    {
      id: 1,
      roomname: "스포츠에 대한 고찰",
      category: ["전체 노트", "카테고리", "카테고리", "카테고리"],
    },
    {
      id: 2,
      roomname: "룸이름",
      category: ["전체 노트", "카테고리", "카테고리"],
    },
    {
      id: 3,
      roomname: "룸이름",
      category: ["전체 노트", "카테고리", "카테고리", "카테고리"],
    },
  ];

  return (
    <M.Container>
      <SimpleContainer width="320px" top="0" padding="12px">
        <M.Back>
          <IoIosArrowBack
            size={18}
            onClick={() => {
              setCurrentModal("Room");
            }}
          />
        </M.Back>
        <M.CategoryContainer>
          {RoomData.filter(
            (room) => room.roomname === selectedRoom
          )[0].category.map((c) => (
            <li>{c}</li>
          ))}
        </M.CategoryContainer>

        <M.CreateCategory>
          <FiPlus size={18} />
          <p>카테고리 추가하기</p>
        </M.CreateCategory>
      </SimpleContainer>
    </M.Container>
  );
};

export default SelectCategoryModal;
