import React, { useState, useEffect } from "react";
import * as W from "./Write.style";
import { FiTrash, FiImage } from "react-icons/fi";

import Editor from "../components/Write/Editor/Editor";
import SpellCheck from "../components/Write/SpellCheck/SpellCheck";
import WriteFooter from "../components/Write/WriteFooter/WriteFooter";
import SelectRoomModal from "../components/Write/WriteSelectModal/SelectRoomModal/SelectRoomModal";
import SelectCategoryModal from "../components/Write/WriteSelectModal/SelectCategoryModal/SelectCategoryModal";
import ChallengeAchieved from "../components/Write/ChallengeAchieved/ChallengeAchieved";
import Template from "../components/Write/Template/Template";
import Counter from "../components/Write/Counter/Counter";

import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentModal,
  setSelectedCategory,
  setSelectedRoom,
} from "../redux/selectModal";
import { resetRoom, setRoom } from "../redux/room";
import { setCategory } from "../redux/category";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useSelector((state) => state.note);
  const tags = useSelector((state) => state.tag);

  const [title, setTitle] = useState(note.noteTitle);
  const [subtitle, setSubtitle] = useState(note.noteSubtitle);

  const [content, setContent] = useState(note.noteContent);
  const [image, setImage] = useState(note.noteCoverImg);
  const [imageName, setImageName] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);
  const [count, setCount] = useState(0);

  // 룸, 카테고리 선택
  const currentModal = useSelector((state) => state.selectModal.currentModal);
  const selectedRoom = useSelector((state) => state.selectModal.selectedRoom);

  const selectedCategory = useSelector(
    (state) => state.selectModal.selectedCategory
  );

  // 글쓰기 모드 : 새 노트 / 수정
  const mode = useSelector((state) => state.writeMode.mode);

  // 챌린지 팝업
  const [challengeAchieved, setChallengeAchieved] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleCurrentModal = () => {
    currentModal
      ? dispatch(setCurrentModal(null))
      : dispatch(setCurrentModal("Room"));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(image);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
    setImageChanged(true);
  };

  const handleDeleteImage = () => {
    setImage(null);
    setImageName(null);
  };

  const accessToken = localStorage.getItem("token");
  // const accessToken =
  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  const fetchRoomList = async () => {
    try {
      const params = { page: 0 };
      const res = await axios.get("/rooms/myRoomList", {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      dispatch(resetRoom());
      const rooms = res.data.result;

      rooms.forEach((roomData) => {
        const { roomId, roomTitle, updatedAt, roomImg, userRoomList } =
          roomData;
        dispatch(
          setRoom({ roomId, roomTitle, updatedAt, roomImg, userRoomList })
        );

        // selectedRoom.roomId 가 왜 string? == 로 해야 먹힘
        // 맨처음에 useParams로 받아서 그럼 -> setting으로 넘겨줄 때 parseInt 해줬음
        if (roomId === selectedRoom.roomId) {
          dispatch(setSelectedRoom({ roomTitle, roomId }));
        }
      });

      console.log("룸 목록", rooms);
    } catch (error) {
      console.error(error);
    }
  };

  const roomId = useSelector((state) => state.selectModal.selectedRoom.roomId);

  const fetchCategoryList = async () => {
    try {
      const res = await axios.get(`/categorys/category/${roomId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // 해당 룸의 카테고리 리스트로 category redux 설정
      const categoryList = res.data.result.categoryList;
      dispatch(setCategory(categoryList));
      console.log("categoryList", categoryList);

      categoryList.forEach((category) => {
        // !! 카테고리 수정은 불가능??
        if (category.categoryName === selectedCategory.categoryName) {
          dispatch(
            setSelectedCategory({
              categoryName: selectedCategory.categoryName,
              categoryId: category.categoryId,
            })
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const formData = new FormData();

  // // 보낼 데이터
  // const requestData = {
  //   noteTitle: title,
  //   noteSubTitle: subtitle,
  //   noteContent: content,
  //   letterCount: count,
  //   noteTagList: tags.map((tag) => tag.tagName),
  //   categoryId: selectedCategory.categoryId,
  // };

  // formData.append("request", JSON.stringify(requestData));

  const postNote = async () => {
    const formData = new FormData();
    if (image) {
      const decodedImage = await decodeImage(image);
      const imageExtension = imageName.split(".").pop();
      const blobImage = new Blob([decodedImage], {
        type: `image/${imageExtension}`,
      });
      formData.append("noteImg", blobImage, imageName);
    } else {
      formData.append("noteImg", "null");
    }

    const requestData = {
      noteTitle: title,
      noteSubtitle: subtitle,
      noteContent: content,
      letterCount: count,
      noteTagList: tags.map((tag) => tag.tagName),
      categoryId: selectedCategory.categoryId,
    };
    formData.append("request", JSON.stringify(requestData));

    try {
      const res = await axios.post(`/rooms/${roomId}/notes`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate(`/rooms/${selectedRoom.roomId}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const putNote = async () => {
    // formData.delete("noteImg");
    const formData = new FormData();

    if (image && imageChanged) {
      const decodedImage = await decodeImage(image);
      const imageExtension = imageName.split(".").pop();
      const blobImage = new Blob([decodedImage], {
        type: `image/${imageExtension}`,
      });
      formData.append("noteImg", blobImage, imageName);
    } else {
      console.log("no noteImg");
      formData.append("noteImg", "null");
    }

    const requestData = {
      noteTitle: title,
      noteSubtitle: subtitle,
      noteContent: content,
      letterCount: count,
      noteTagList: tags.map((tag) => tag.tagName),
      categoryId: selectedCategory.categoryId,
    };

    formData.append("request", JSON.stringify(requestData));

    try {
      const res = await axios.put(`/notes/${note.noteId}`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate(`/rooms/${selectedRoom.roomId}/notes/${note.noteId}`);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const decodeImage = async (base64Image) => {
    const blobImage = await fetch(base64Image).then((res) => res.blob());
    return blobImage;
  };

  useEffect(() => {
    dispatch(setCurrentModal(null));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchRoomList();
      if (roomId) {
        fetchCategoryList();
      }
    };

    fetchData();
  }, [roomId, currentModal]);

  const saveNote = () => {
    postNote();
    // setChallengeAchieved(true);
  };

  const updateNote = () => {
    putNote();
  };

  return (
    <W.Container>
      <W.Header>
        <W.Left>
          {/* 템플릿 */}
          <Template content={content} setContent={setContent} />

          {/* 맞춤법 검사 */}
          <SpellCheck content={content} setContent={setContent} />

          {/* 글자수 */}
          <Counter content={content} count={count} setCount={setCount} />
        </W.Left>

        {/* 룸 */}
        <W.Center>
          <W.StyledButton
            $width="320px"
            $border="1px solid #e5e5e5"
            onClick={handleCurrentModal}
          >
            {selectedRoom.roomTitle
              ? selectedRoom.roomTitle
              : "룸을 선택해주세요"}
            <span>
              {selectedCategory.categoryName
                ? ` - ` + selectedCategory.categoryName
                : ""}
            </span>
          </W.StyledButton>

          {currentModal === "Room" && <SelectRoomModal />}
          {currentModal === "Category" && <SelectCategoryModal />}
        </W.Center>

        {/* 저장 */}
        <W.Right>
          {mode === "write" ? (
            <W.StyledButton
              onClick={saveNote}
              $backgroundColor="#B5A994"
              $color="white"
            >
              저장
            </W.StyledButton>
          ) : (
            <W.StyledButton
              onClick={updateNote}
              $backgroundColor="#B5A994"
              $color="white"
            >
              저장
            </W.StyledButton>
          )}
        </W.Right>
      </W.Header>

      <W.Top>
        {/* 대표 이미지 */}
        <W.CoverImage img={image} />

        {/* 이미지 업로드/삭제 */}
        <W.ImageControl>
          <W.HandleCoverImg>
            <label htmlFor="input-img">
              <input type="file" id="input-img" onChange={handleImageChange} />
              <FiImage size={22} />
            </label>
          </W.HandleCoverImg>

          <W.HandleCoverImg>
            <label htmlFor="delete-img">
              <input
                type="button"
                id="delete-img"
                onClick={handleDeleteImage}
              />
              <FiTrash size={22} />
            </label>
          </W.HandleCoverImg>
        </W.ImageControl>

        {/* 제목 설정 영역 */}
        <W.TitleContainer>
          <label htmlFor="titleInput">
            <input
              type="text"
              id="titleInput"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={handleTitleChange}
            />
          </label>

          <W.StyledHr />

          <label htmlFor="subtitleInput">
            <input
              type="text"
              id="subtitleInput"
              placeholder="부제목을 입력하세요"
              value={subtitle}
              onChange={handleSubtitleChange}
            />
          </label>
        </W.TitleContainer>
      </W.Top>

      {/* 글 작성 영역 */}
      <Editor content={content} setContent={setContent} />

      <WriteFooter />

      {challengeAchieved && <ChallengeAchieved />}
    </W.Container>
  );
};

export default Write;
