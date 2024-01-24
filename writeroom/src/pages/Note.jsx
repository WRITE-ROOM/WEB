import React, { useState } from "react";
import { BiBookmark, BiCog, BiDotsHorizontalRounded } from "react-icons/bi";
import * as N from "./Note.style";

const Note = () => {
  const data = {
    title: "노래 플레이리스트",
    subtitle: "음악 듣기는 왜 좋을까?",
    username: "제리",
    date: "2024.02.01",
    tags: ["음악", "음악", "음악", "음악", "음악", "태그1", "태그2", "태그3"],
  };

  const [showTags, setShowTags] = useState(false);

  return (
    <N.Container>
      <N.Header>
        <N.CoverImage />

        <N.Tools>
          <div className="bookmark">
            <BiBookmark size={22} color="white" />
          </div>
          <div className="setting">
            <BiCog size={22} color="white" />
          </div>
        </N.Tools>

        <N.NoteInfo>
          <N.Upper>
            <div>
              <h1 className="title">{data.title}</h1>
              <p className="date">{data.date}</p>
            </div>

            <p className="writer">by.{data.username}</p>
          </N.Upper>

          <hr />

          <N.Lower>
            <p>{data.subtitle}</p>

            <N.TagContainer>
              <ul>
                {data.tags.slice(0, 4).map((tag, index) => (
                  <N.Tag key={index}>{tag}</N.Tag>
                ))}
                <N.Tag
                  className="showMoreTag"
                  onMouseEnter={() => {
                    setShowTags(true);
                  }}
                  onMouseLeave={() => {
                    setShowTags(false);
                  }}
                >
                  <BiDotsHorizontalRounded size={20} />
                </N.Tag>
              </ul>
            </N.TagContainer>

            {showTags && (
              <N.HiddenTag>
                {data.tags.slice(4).map((tag, index) => (
                  <N.Tag key={index}>{tag}</N.Tag>
                ))}
              </N.HiddenTag>
            )}
          </N.Lower>
        </N.NoteInfo>
      </N.Header>

      <div className="NoteContent">내용</div>
      <hr />
      <div className="NoteFooter">
        <div className="emoji">이모지</div>
      </div>
    </N.Container>
  );
};

export default Note;
