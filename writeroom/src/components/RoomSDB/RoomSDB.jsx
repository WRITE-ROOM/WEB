import * as S from "./RoomSDB.style";
import { GoGear } from "react-icons/go";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import ProgressBar from "../ProgressBar/ProgressBar";

import { CategoryToggle } from "../CategoryToggle/CategoryToggle";
import { BiDotsVerticalRounded } from "react-icons/bi";

const RoomSDB = ({ percent, isOpen, handleRoomSDB }) => {
  const nameArr = ["지환", "수민", "영주"];

  return (
    <div>
      {isOpen ? (
        <S.Container>
          <S.TitleBox>
            <h2>스포츠에 대한 고찰</h2>
            <S.IconsBox>
              <MdKeyboardDoubleArrowLeft onClick={handleRoomSDB} />
              <GoGear />
            </S.IconsBox>
          </S.TitleBox>
          <S.BasicBox>
            <h2>멤버</h2>
            {nameArr.map((name, idx) => (
              <S.Member key={idx}>
                <BsPersonCircle size={30} />
                <h2>{name}</h2>
                <p>(3시간전)</p>
              </S.Member>
            ))}
            <S.Member>
              <BsPersonCircle size={30} />
              <h2>초대하기</h2>
            </S.Member>
          </S.BasicBox>
          <S.BasicBox>
            <h2>챌린지</h2>
            <ProgressBar percent={percent} />
          </S.BasicBox>
          <S.BasicBox>
            <S.CategoryWrapper>
              <h2>카테고리</h2>
              <BiDotsVerticalRounded size={20} />
            </S.CategoryWrapper>
            {nameArr.map((name, idx) => (
              <CategoryToggle name={name} key={idx} />
            ))}
          </S.BasicBox>
        </S.Container>
      ) : (
        <MdKeyboardDoubleArrowRight size={20} onClick={handleRoomSDB} />
      )}
    </div>
  );
};

export default RoomSDB;
