import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import * as N from "./Note.style";
import EmojiContainer from "../components/Emoji/EmojiContainer";
import Setting from "../components/Setting/Setting";
import Bookmark from "../components/Bookmark/Bookmark";

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
          <Bookmark defaultColor="white" />
          <Setting />
        </N.Tools>

        <N.NoteInfo>
          <N.Upper>
            <div>
              <h1 className="title">{data.title}</h1>
              <p className="date">{data.date}</p>
            </div>

            <p className="writer">by.{data.username}</p>
          </N.Upper>

          <N.StyledHr color="white" />

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

      <N.Content>내용</N.Content>

      <N.StyledHr color="#E5E5E5" />

      <EmojiContainer />
    </N.Container>
  );
};

export default Note;
