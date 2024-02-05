import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import * as N from "./Note.style";
import EmojiContainer from "../components/Emoji/EmojiContainer";
import Setting from "../components/Setting/Setting";
import Bookmark from "../components/Bookmark/Bookmark";
import * as D from "../components/Header/Dropdown.style";
import NewNoteButton from "../components/FloatingButton/NewNoteButton";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../redux/note";

const Note = () => {
  const dispatch = useDispatch();
  // const mock = {
  //   noteTitle: "노래 플레이리스트",
  //   noteSubtitle: "음악 듣기는 왜 좋을까?",
  //   noteId: "1",
  //   noteImg:
  //     "https://png.pngtree.com/background/20230528/original/pngtree-retro-game-consoles-sitting-next-to-various-gaming-devices-picture-image_2776441.jpg",
  //   noteContent: "<p>내용</p>",
  //   writer: "제리",
  //   achieve: false,
  //   tags: ["음악", "음악", "음악", "음악", "음악", "태그1", "태그2", "태그3"],
  //   createdAt: "2024.02.01",
  //   updatedAt: "",
  // };

  // note의 정보 조회하는 api 연결 -> addNote
  const data = useSelector((state) => state.note);
  console.log(data);

  const [showTags, setShowTags] = useState(false);

  // useEffect(() => {
  //   dispatch(addNote(mock));
  // }, []);
  return (
    <N.Container>
      <N.Header>
        <N.CoverImage img={data.noteImg} />

        <N.Tools>
          <Bookmark defaultColor="white" />
          <Setting />
        </N.Tools>

        <N.NoteInfo>
          <N.Upper>
            <div>
              <h1 className="title">{data.noteTitle}</h1>
              <p className="date">{data.createdAt}</p>
            </div>

            <p className="writer">by.{data.writer}</p>
          </N.Upper>

          <N.StyledHr color="white" />

          <N.Lower>
            <p>{data.noteSubtitle}</p>
            <N.TagContainer>
              <ul>
                {data.tags.slice(0, 4).map((tag, index) => (
                  <N.Tag key={index}>{tag.tagName}</N.Tag>
                ))}
                {data.tags.length > 4 && (
                  <N.Tag
                    className="showMoreTag"
                    onMouseEnter={() => {
                      setShowTags(true);
                    }}
                    onMouseLeave={() => {
                      setShowTags(false);
                    }}
                  >
                    <MdMoreHoriz size={20} />
                    {showTags && (
                      <D.SimpleContainer $width="70px" $padding="8px">
                        <N.HiddenTag>
                          {data.tags.slice(4).map((tag, index) => (
                            <N.Tag key={index}>{tag.tagName}</N.Tag>
                          ))}
                        </N.HiddenTag>
                      </D.SimpleContainer>
                    )}
                  </N.Tag>
                )}
              </ul>
            </N.TagContainer>
          </N.Lower>
        </N.NoteInfo>
      </N.Header>

      <N.Content
        dangerouslySetInnerHTML={{ __html: data.noteContent }}
      ></N.Content>

      <N.StyledHr color="#E5E5E5" />

      <EmojiContainer />
      <NewNoteButton />
    </N.Container>
  );
};

export default Note;
