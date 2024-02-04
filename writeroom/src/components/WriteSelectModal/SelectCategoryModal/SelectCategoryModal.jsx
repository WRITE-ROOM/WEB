import React, { useState } from "react";
import * as M from "./SelectCategoryModal.style";
import { SimpleContainer } from "../../Header/Dropdown.style";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

import {
  setSelectedCategory,
  setCurrentModal,
} from "../../../redux/selectModal";
import { useDispatch, useSelector } from "react-redux";

const SelectCategoryModal = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state) => state.selectModal.selectedRoom.categoryList
  );
  const selectedCategory = useSelector(
    (state) => state.selectModal.selectedCategory
  );

  // 선택된 룸의 카테고리 리스트들

  const handleSelectedCategory = (categoryName) => {
    dispatch(setSelectedCategory(categoryName));
  };

  return (
    <M.Container>
      <SimpleContainer $width="320px" $top="0" $padding="12px">
        <M.Back>
          <IoIosArrowBack
            size={18}
            onClick={() => {
              dispatch(setCurrentModal("Room"));
            }}
          />
        </M.Back>
        <M.CategoryContainer>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleSelectedCategory(category.categoryName)}
              style={{
                color:
                  selectedCategory === category.categoryName
                    ? "#9D8870"
                    : "#000",
              }}
            >
              {category.categoryName}
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
