import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import * as C from "./CreateCategory.style";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/category";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const roomId = useSelector((state) => state.selectModal.selectedRoom.roomId);
  const [newCategory, setNewCategory] = useState("");

  // const accessToken = localStorage.getItem("token");
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  const postCategory = async () => {
    try {
      const res = await axios.post(
        `/categorys/create/${roomId}`,
        { categoryName: newCategory },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.Container>
      <FiPlus size={18} />
      <p onClick={postCategory}>카테고리 추가하기</p>
      <input type="text" onChange={(e) => setNewCategory(e.target.value)} />
    </C.Container>
  );
};

export default CreateCategory;
