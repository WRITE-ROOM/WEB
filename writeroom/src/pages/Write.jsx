import React, { useState } from "react";
import * as W from "./Write.style";
import { BiImageAlt, BiSolidTrashAlt } from "react-icons/bi";
import Editor from "../components/Editor/Editor";
import { DropdownContainer } from "../components/Header/Dropdown.style";

const Write = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [showTemplate, setShowTemplate] = useState(false);
  const [content, setContent] = useState("");
  const [showCountDetail, setShowCountDetail] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleTemplateMenu = () => {
    setShowTemplate(!showTemplate);
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
    return doc.body.textContent || "";
  };

  const stripHtmlTagsWithoutSpace = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent.replace(/\s/g, "") || "";
  };

  const characterCount = stripHtmlTags(content).length;
  const characterCountWithoutSpace = stripHtmlTagsWithoutSpace(content).length;

  return (
    <W.Container>
      <W.Header>
        <W.Left>
          <W.Template>
            <button onClick={handleTemplateMenu}>템플릿</button>
            {showTemplate && (
              <DropdownContainer top="40px">
                OREO 템플릿
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
              </DropdownContainer>
            )}
          </W.Template>
        </W.Left>

        <W.Center>
          <div className="selectRoom">룸</div>
        </W.Center>

        <W.Right>
          <div className="grammar">맞춤법</div>
          <div className="count">
            <p
              onMouseEnter={() => {
                setShowCountDetail(true);
              }}
              onMouseOut={() => {
                setShowCountDetail(false);
              }}
            >
              {characterCount}자
            </p>
            {showCountDetail && (
              <div className="countDetail">
                <p>공백 포함 : {characterCount}</p>
                <p>공백 제외 : {characterCountWithoutSpace}</p>
              </div>
            )}
          </div>
          <div className="save">저장</div>
        </W.Right>
      </W.Header>

      <W.Top>
        {/* 대표 이미지 */}
        <W.CoverImage />

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

        {/* 이미지 업로드/삭제 */}
        <W.ImageControl>
          <button>
            <BiImageAlt size={24} />
          </button>
          <button>
            <BiSolidTrashAlt size={24} />
          </button>
        </W.ImageControl>
      </W.Top>

      {/* 글 작성 영역 */}
      <Editor content={content} setContent={setContent} />

      <div className="Footer">
        <div className="tag"></div>
        <div className="createTag"></div>
      </div>
    </W.Container>
  );
};

export default Write;
