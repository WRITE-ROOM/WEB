import React, { useState } from "react";
import * as M from "./SelectCategoryModal.style";
import { SimpleContainer } from "../../Header/Dropdown.style";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const SelectCategoryModal = (props) => {
  const RoomData = [
    {
      id: 1,
      roomname: "스포츠에 대한 고찰",
      category: ["전체 노트", "카테고리1", "카테고리2", "카테고리3"],
    },
    {
      id: 2,
      roomname: "룸이름",
      category: ["전체 노트", "카테고리4", "카테고리5"],
    },
    {
      id: 3,
      roomname: "룸이름",
      category: ["전체 노트", "카테고리6", "카테고리7", "카테고리8"],
    },
  ];

  const handleSelectedCategory = (c) => {
    props.setSelectedCategory(c);
  };

  return (
    <M.Container>
      <SimpleContainer $width="320px" $top="0" $padding="12px">
        <M.Back>
          <IoIosArrowBack
            size={18}
            onClick={() => {
              props.setCurrentModal("Room");
            }}
          />
        </M.Back>
        <M.CategoryContainer>
          {RoomData.filter(
            (room) => room.roomname === props.selectedRoom
          )[0].category.map((category, index) => (
            <li
              key={index}
              onClick={() => handleSelectedCategory(category)}
              style={{
                color: props.selectedCategory === category ? "#9D8870" : "#000",
              }}
            >
              {category}
            </li>
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
