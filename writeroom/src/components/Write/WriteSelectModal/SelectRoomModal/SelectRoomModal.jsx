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
  resetSelectedCategory,
} from "../../../../redux/selectModal";
import NewRoomModal from "../../../Main/NewRoomModal/NewRoomModal";
import axios from "axios";
import { setCategory, createCategory } from "../../../../redux/category";

const SelectRoomModal = () => {
  const dispatch = useDispatch();
  const [showMoreRoom, setShowMoreRoom] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const rooms = useSelector((state) => state.room.room);

  // 선택된 룸의 카테고리 리스트들
  const roomId = useSelector((state) => state.selectModal.selectedRoom.roomId);
  const accessToken = localStorage.getItem("token");

  const handleSelectedRoom = (room) => {
    dispatch(
      setSelectedRoom({ roomId: room.roomId, roomname: room.roomTitle })
    );
    dispatch(resetSelectedCategory());
    dispatch(setCurrentModal("Category"));
    // fetchCategoryList();
  };

  // const fetchCategoryList = async () => {
  //   try {
  //     const res = await axios.get(`/categorys/category/${roomId}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     // 해당 룸의 카테고리 리스트로 category redux 설정
  //     dispatch(setCategory(res.data.result.categoryList));

  //     console.log(roomId);
  //     console.log(res.data.result.categoryList);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const categoryList = useSelector((state) => state.category.categoryList);

  // useEffect(() => {
  //   if (roomId) {
  //     fetchCategoryList();
  //   }
  // }, [roomId]);

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