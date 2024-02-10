import * as S from "./RoomCategory.style";
import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import RoomModal from "../components/RoomModal/RoomModal";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
const RoomCategory = () => {
  const testCategory = [
    {
      category: "카테고리1",
      numOfNote: "200개 노트",
    },
    {
      category: "사용자가 지정한 카테고리2",
      numOfNote: "200개 노트",
    },
  ];

  const [inputValue, setInputValue] = useState("제목 없음");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteCategory, setIsDeleteCategory] = useState(false);

  const maxLength = 50;
  const inputCount = inputValue.length;

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const deleteCategoryHandler = () => {
    setIsDeleteCategory(!isDeleteCategory);
  };

  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar title="카테고리 관리" />
        <S.CategoryList>
          {testCategory.map(({ category, numOfNote }, index) => (
            <S.CategoryBar key={index}>
              {category}
              <p>({numOfNote})</p>
            </S.CategoryBar>
          ))}
          <S.CategoryButton onClick={modalHandler}>
            카테고리 추가하기
          </S.CategoryButton>
          <S.ButtonWrapper>
            <S.DeleteButton onClick={deleteCategoryHandler}>
              삭제하기
            </S.DeleteButton>
            <S.SaveButton>저장하기</S.SaveButton>
          </S.ButtonWrapper>
        </S.CategoryList>
      </S.Contents>
      {isModalOpen && (
        <S.ModalBackGround>
          <S.CategoryModal>
            <S.ModalTitleWrapper>
              <h1>카테고리 추가하기</h1>
              <S.CloseIcon size={30} onClick={modalHandler} />
            </S.ModalTitleWrapper>
            <p>룸 이름</p>
            <S.InputWrapper>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxLength}
              />
              <span>
                {inputCount}/{maxLength}
              </span>
            </S.InputWrapper>
            <S.ModalButton>
              <FiCopy size={20} />
              링크 복사
            </S.ModalButton>
          </S.CategoryModal>
        </S.ModalBackGround>
      )}
      {isDeleteCategory && (
        <RoomModal
          title1="카테고리를 정말 삭제하시겠어요?"
          description="카테고리에 있는 모든 노트들도 함께 삭제돼요."
          description2="정말 삭제하시겠어요?"
          button2="삭제하기"
        />
      )}
    </S.Wrapper>
  );
};
export default RoomCategory;
