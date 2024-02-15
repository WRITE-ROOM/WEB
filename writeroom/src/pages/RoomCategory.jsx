import * as S from "./RoomCategory.style";
import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import RoomModal from "../components/RoomModal/RoomModal";
import { FiCopy } from "react-icons/fi";
import { useEffect, useState } from "react";
import CreateCategory from "../components/Write/CreateCategory/CreateCategory";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRoomId } from "../redux/selectModal";
import axios from "axios";
import { setCategory } from "../redux/category";

const RoomCategory = () => {
  const dispatch = useDispatch();
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
  const [categoryModal, setCategoryModal] = useState(false);
  const [isDeleteCategory, setIsDeleteCategory] = useState(false);
  const [editPage, setEditPage] = useState(false);

  const maxLength = 50;
  const inputCount = inputValue.length;
  const roomId = useParams().roomId;

  const modalHandler = () => {
    // setIsModalOpen(true);
    dispatch(setSelectedRoomId(roomId));
    setCategoryModal(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const deleteCategoryHandler = () => {
    setIsDeleteCategory(!isDeleteCategory);
  };

  const accessToken = localStorage.getItem("token");

  const fetchCategoryList = async () => {
    try {
      const res = await axios.get(`/categorys/category/${roomId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(res.data);
      // 해당 룸의 카테고리 리스트로 category redux 설정
      // const categoryList = res.data.result.categoryList;
      dispatch(setCategory(res.data.result.categoryList));
      // console.log("categoryList", categoryList);
    } catch (error) {
      console.log(error);
    }
  };

  const categoryList = useSelector((state) => state.category.categoryList);
  console.log(categoryList);

  const handleSave = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetchCategoryList();
    setEditPage(false);
    console.log(editPage);
  }, []);

  return (
    <S.Wrapper>
      <RoomSettingSNB />

      {editPage === false && (
        <S.Contents>
          <RoomSettingNavbar title="카테고리 관리" />
          <S.CategoryList>
            {categoryList.length > 0 &&
              categoryList.map((category, index) => (
                <S.CategoryBar key={index}>
                  {category.categoryName}
                  <p>({category.countNote})</p>
                </S.CategoryBar>
              ))}
            <S.CategoryButton onClick={modalHandler}>
              카테고리 추가하기
            </S.CategoryButton>
          </S.CategoryList>
          {categoryModal && (
            <CreateCategory setCategoryModal={setCategoryModal} />
          )}
        </S.Contents>
      )}

      {editPage && (
        <S.Contents>
          <S.ButtonWrapper>
            <S.DeleteButton onClick={deleteCategoryHandler}>
              삭제하기
            </S.DeleteButton>
            <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
          </S.ButtonWrapper>

          {isDeleteCategory && (
            <RoomModal
              title1="카테고리를 정말 삭제하시겠어요?"
              description="카테고리에 있는 모든 노트들도 함께 삭제돼요."
              description2="정말 삭제하시겠어요?"
              button2="삭제하기"
            />
          )}
        </S.Contents>
      )}

      {/* {isModalOpen && (
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
      )} */}
    </S.Wrapper>
  );
};
export default RoomCategory;
