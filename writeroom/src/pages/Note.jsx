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

import axios from "axios";
import { useParams } from "react-router-dom";

const Note = () => {
  const dispatch = useDispatch();
  window.scrollTo(0, 0);

  // note의 정보 조회하는 api 연결 -> addNote
  const note = useSelector((state) => state.note);
  console.log("note", note);

  const [showTags, setShowTags] = useState(false);

  // const accessToken = localStorage.getItem("token");
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  const noteId = useParams().noteId;
  const roomId = useParams().roomId;

  // const noteId = 1;
  const fetchNote = async () => {
    try {
      const res = await axios.get(`/notes/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(res.data.result);
      dispatch(addNote(res.data.result));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <N.Container>
      <N.Header>
        <N.CoverImage img={note.noteImg} />

        <N.Tools>
          <Bookmark defaultColor="white" />
          <Setting type="config" note={note} roomId={roomId} />
        </N.Tools>

        <N.NoteInfo>
          <N.Upper>
            <div>
              <h1>{note.noteTitle}</h1>
              <p>{note.createdAt.split("T")[0]}</p>
            </div>

            <p>by.{note.writer}</p>
          </N.Upper>

          <N.StyledHr color="white" />

          <N.Lower>
            <p>{note.noteSubTitle}</p>
            <N.TagContainer>
              <ul>
                {note.tagList &&
                  note.tagList
                    .slice(0, 4)
                    .map((tag, index) => (
                      <N.Tag key={index}>{tag.tagName}</N.Tag>
                    ))}
                {note.tagList && note.tagList.length > 4 && (
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
                          {note.tagList.slice(4).map((tag, index) => (
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
        dangerouslySetInnerHTML={{ __html: note.noteContent }}
      ></N.Content>

      <N.StyledHr color="#E5E5E5" />

      <EmojiContainer />
      <NewNoteButton />
    </N.Container>
  );
};

export default Note;
