import React, { useState } from "react";
import * as W from "./Write.style";
import { BiImageAlt, BiSolidTrashAlt } from "react-icons/bi";

const Write = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  return (
    <W.Container>
      <W.Header>
        <W.Left>
          <div className="template">템플렛</div>
        </W.Left>
        <W.Center>
          <div className="selectRoom">룸</div>
        </W.Center>
        <W.Right>
          <div className="grammar">맞춤법</div>
          <div className="count">320자</div>
          <div className="save">저장</div>
        </W.Right>
      </W.Header>

      <W.Top>
        <W.CoverImage />
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

        <W.ImageControl>
          <button>
            <BiImageAlt size={24} />
          </button>
          <button>
            <BiSolidTrashAlt size={24} />
          </button>
        </W.ImageControl>
      </W.Top>

      <div className="Editor"></div>

      <div className="Footer">
        <div className="tag"></div>
        <div className="createTag"></div>
      </div>
    </W.Container>
  );
};

export default Write;
