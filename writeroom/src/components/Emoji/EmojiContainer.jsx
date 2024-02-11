import React, { useEffect, useState } from "react";
import { SimpleContainer } from "../Header/Dropdown.style";
import * as E from "./EmojiContainer.style";
import AddEmoji from "../../assets/AddEmoji.png";
import Emoji1 from "../../assets/Emoji1.png";
import Emoji2 from "../../assets/Emoji1.png";
import Emoji3 from "../../assets/Emoji1.png";
import Emoji4 from "../../assets/Emoji1.png";
import Emoji5 from "../../assets/Emoji1.png";
import Emoji6 from "../../assets/Emoji1.png";
import Emoji from "./Emoji";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const EmojiContainer = ({ noteId }) => {
  const initialEmojis = [
    { index: 1, image: Emoji1, count: 0, added: false },
    { index: 2, image: Emoji2, count: 0, added: false },
    { index: 3, image: Emoji3, count: 0, added: false },
    { index: 4, image: Emoji4, count: 0, added: false },
    { index: 5, image: Emoji5, count: 0, added: false },
    { index: 6, image: Emoji6, count: 0, added: false },
  ];
  // const [emojis, setEmojis] = useState(initialEmojis);
  const [emojis, setEmojis] = useState(null);

  const [showEmojiList, setShowEmojiList] = useState(false);

  const handleAddEmoji = (index) => {
    setEmojis((prevEmojis) =>
      prevEmojis.map(
        (emoji) =>
          !emoji.added
            ? emoji.index === index
              ? { ...emoji, count: emoji.count + 1, added: true } // 이모지 등록
              : emoji
            : { ...emoji, count: emoji.count - 1, added: false } // 이모지 등록 취소
      )
    );
  };

  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  // const noteId = useSelector((state) => state.note.noteId);
  console.log("noteId ", noteId);

  // 이모지 조회
  const fetchEmojiList = async () => {
    try {
      const res = await axios.get(`/Emoji/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Emoji get ", res);
    } catch (error) {
      console.log(error);
    }
  };

  // 이모지 남기기
  const postEmoji = async () => {
    try {
      const params = { emojiNum: 6 };
      const res = await axios.post(`/Emoji/${noteId}`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params,
      });
      console.log("Emoji Post ", res.data);
    } catch (error) {
      console.log("post", error);
    }
  };

  useEffect(() => {
    // fetchEmojiList();
    // postEmoji();
  }, []);

  return (
    <E.Container>
      {/* 이모지 추가 버튼 */}
      <E.AddEmojiButton
        onClick={() => {
          setShowEmojiList(!showEmojiList);
        }}
      >
        <img src={AddEmoji} alt="addEmoji" />
      </E.AddEmojiButton>

      {/* 추가된 이모지 */}
      <E.AddedEmoji>
        <ul>
          {emojis &&
            emojis
              .filter((emoji) => emoji.count > 0)
              .map((emoji) => <Emoji key={emoji.index} emoji={emoji} />)}
        </ul>
      </E.AddedEmoji>

      {/* 버튼 클릭 시 이모지 리스트 띄우기 */}
      {showEmojiList && (
        <SimpleContainer
          $width="180px"
          $height="75px"
          $top="45px"
          $padding="12px 16px"
        >
          <p>이모지 종류</p>
          <E.EmojiList>
            {emojis &&
              emojis.map((emoji) => (
                <li onClick={() => handleAddEmoji(emoji.index)}>
                  <img src={emoji.image} alt={`emoji${emoji.index}`} />
                </li>
              ))}
          </E.EmojiList>
        </SimpleContainer>
      )}
    </E.Container>
  );
};

export default EmojiContainer;
