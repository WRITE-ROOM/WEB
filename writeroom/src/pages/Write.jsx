import React, { useState } from "react";
import * as W from "./Write.style";
import * as D from "../components/Header/Dropdown.style";
import { FiInfo, FiTrash, FiImage } from "react-icons/fi";

import Editor from "../components/Editor/Editor";
import SpellCheck from "../components/SpellCheck/SpellCheck";
import WriteFooter from "../components/WriteFooter/WriteFooter";
import SelectRoomModal from "../components/WriteSelectModal/SelectRoomModal/SelectRoomModal";
import SelectCategoryModal from "../components/WriteSelectModal/SelectCategoryModal/SelectCategoryModal";
import ChallengeAchieved from "../components/ChallengeAchieved/ChallengeAchieved";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../redux/selectModal";
import { addNote } from "../redux/note";

const Write = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [showTemplate, setShowTemplate] = useState(false);
  const [content, setContent] = useState("");
  const [showCountDetail, setShowCountDetail] = useState(false);

  // 룸, 카테고리 선택
  const currentModal = useSelector((state) => state.selectModal.currentModal);
  const selectedRoom = useSelector((state) => state.selectModal.selectedRoom);
  const selectedCategory = useSelector(
    (state) => state.selectModal.selectedCategory
  );

  // 챌린지 팝업
  const [challengeAchieved, setChallengeAchieved] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleTemplateMenu = () => {
    setShowTemplate(!showTemplate);
  };

  const handleCurrentModal = () => {
    currentModal
      ? dispatch(setCurrentModal(null))
      : dispatch(setCurrentModal("Room"));
  };

  const TemplateO1 = () => {
    const oreo = `
    <h1>Opinion</h1>
    <p>글에서 주장하고자 하는 의견을 작성하시오</p>
    `.trim();

    setContent(content + oreo);
  };

  const TemplateR = () => {
    const oreo = `
    <h1>Reason</h1>
    <p>주장한 의견에 대하여 이유와 근거를 작성하시오</p>
    `.trim();

    setContent(content + oreo);
  };

  const TemplateE = () => {
    const oreo = `
    <h1>Example</h1>
    <p>독자들이 글을 쉽게 이해할 수 있도록 사례를 들어 설명하시오</p>
    `.trim();

    setContent(content + oreo);
  };

  const TemplateO2 = () => {
    const oreo = `
    <h1>Opinion</h1>
    <p>글 내용에 가장 중요한 내용을 요약하여 주장하고자 한 의견을 강조하고 제안하시오
    </p>
    `.trim();

    setContent(content + oreo);
  };

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const textContent = doc.body.textContent || "";

    // 줄바꿈
    // const doc = html.replace(/<\/[^>]+>/g, "\n");
    // const text = new DOMParser().parseFromString(doc, "text/html");
    // const textContent = text.body.textContent || "";

    return textContent;
  };

  const stripHtmlTagsNoSpace = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent.replace(/\s/g, "") || "";
  };

  const characterCount = stripHtmlTags(content).length;
  const characterCountNoSpace = stripHtmlTagsNoSpace(content).length;

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      console.log(file.name);
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const tags = useSelector((state) => state.tag);
  const saveNote = () => {
    dispatch(
      addNote({
        title: title,
        subtitle: subtitle,
        noteId: 1,
        coverImg: image,
        content: content,
        achieve: true,
        tags: tags,
        createAt: "s",
        updatedAt: "s",
      })
    );
  };
  const noteData = useSelector((state) => state.note);
  console.log(noteData);

  return (
    <W.Container>
      <W.Header>
        <W.Left>
          {/* 템플릿 */}
          <W.Template>
            <W.StyledButton
              $border="1px solid #e5e5e5"
              onClick={handleTemplateMenu}
            >
              템플릿
            </W.StyledButton>

            {showTemplate && (
              <D.DropdownContainer
                $width="100%"
                $padding="12px"
                $top="40px"
                listWidth="88px"
              >
                <D.DropdownTitle>
                  OREO 템플릿
                  <FiInfo color="#939393" />
                </D.DropdownTitle>

                <ul>
                  <li onClick={TemplateO1}>
                    <p>O</p>
                  </li>
                  <li onClick={TemplateR}>
                    <p>R</p>
                  </li>
                  <li onClick={TemplateE}>
                    <p>E</p>
                  </li>
                  <li onClick={TemplateO2}>
                    <p>O</p>
                  </li>
                </ul>
              </D.DropdownContainer>
            )}
          </W.Template>

          {/* 맞춤법 검사 */}
          <SpellCheck content={stripHtmlTags(content)} />

          {/* 글자수 */}
          <W.Counter>
            <p
              onMouseEnter={() => {
                setShowCountDetail(true);
              }}
              onMouseOut={() => {
                setShowCountDetail(false);
              }}
            >
              {characterCount}자
              {showCountDetail && (
                <D.SimpleContainer $width="150px" $height="80px" $top="30px">
                  <W.CounterDetail>
                    <p>
                      공백 포함 <span>{characterCount}자</span>
                    </p>
                    <p>
                      공백 미포함 <span>{characterCountNoSpace}자</span>
                    </p>
                  </W.CounterDetail>
                </D.SimpleContainer>
              )}
            </p>
          </W.Counter>
        </W.Left>

        {/* 룸 */}
        <W.Center>
          <W.StyledButton
            $width="320px"
            $border="1px solid #e5e5e5"
            onClick={handleCurrentModal}
          >
            {selectedRoom.roomname
              ? selectedRoom.roomname
              : "룸을 선택해주세요"}

            <span>{selectedCategory ? ` - ` + selectedCategory : ""}</span>
          </W.StyledButton>

          {currentModal === "Room" && <SelectRoomModal />}
          {currentModal === "Category" && <SelectCategoryModal />}
        </W.Center>

        {/* 저장 */}
        <W.Right>
          <W.StyledButton
            onClick={saveNote}
            $backgroundColor="#B5A994"
            $color="white"
          >
            저장
          </W.StyledButton>
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

      <WriteFooter></WriteFooter>

      {challengeAchieved && <ChallengeAchieved />}
    </W.Container>
  );
};

export default Write;
