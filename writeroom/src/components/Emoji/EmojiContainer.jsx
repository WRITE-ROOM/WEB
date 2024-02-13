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

const EmojiContainer = ({ emojiCounts }) => {
  const emojiImage = [
    { image: Emoji1 },
    { image: Emoji2 },
    { image: Emoji3 },
    { image: Emoji4 },
    { image: Emoji5 },
    { image: Emoji6 },
  ];

  console.log("emojiCounts", emojiCounts);
  const [emojis, setEmojis] = useState(null);
  console.log("emojis ", emojis);

  // useEffect(() => {
  //   setEmojis(emojiCounts);
  // }, []);

  // 이모지 개수 불러오기
  // const emojiCounts = useSelector((state) => state.note.emojiList.emojiCounts);
  // console.log(emojiCounts);

  // 불러온 이모지 개수 업데이트
  // const updatedEmojiList = initialEmojis.map((emoji, index) => ({
  //   ...emoji,
  //   count: emojiCounts[index],
  // }));

  // console.log("up", updatedEmojiList);

  // const [emojis, setEmojis] = useState(emojiCounts);

  // console.log("emojis", emojis);

  const [showEmojiList, setShowEmojiList] = useState(false);

  const [addedEmoji, setAddedEmoji] = useState(null);

  const noteId = useSelector((state) => state.note.noteId);

  const handleEmojiClick = async (index) => {
    if (addedEmoji === index) {
      await deleteEmoji();
      setAddedEmoji(null);
    } else if (addedEmoji === null) {
      await deleteEmoji();
      await postEmoji(index);
      setAddedEmoji(index);
    } else {
      await updateEmoji(index);
      setAddedEmoji(index);
    }
  };

  console.log("added", addedEmoji);

  const accessToken = localStorage.getItem("token");
  // const accessToken =
  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  // 이모지 남기기
  const postEmoji = async (index) => {
    try {
      const params = { emojiNum: index };
      const res = await axios.post(`/Emoji/${noteId}`, null, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Emoji Post ", res.data);
      setEmojis((prev) =>
        prev.map((count, i) => (i === index - 1 ? count + 1 : count))
      );
    } catch (error) {
      console.log("post", error);
    }
  };

  const updateEmoji = async (index) => {
    try {
      const params = { emojiNum: index };
      const res = await axios.patch(`/Emoji/${noteId}`, null, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Emoji update ", res.data);

      setEmojis((prev) =>
        prev.map((count, i) => (i === addedEmoji ? count - 1 : count))
      );
      setEmojis((prev) =>
        prev.map((count, i) => (i === index - 1 ? count + 1 : count))
      );
    } catch (error) {
      console.log("update ", error);
    }
  };

  const deleteEmoji = async () => {
    try {
      const res = await axios.delete(`/Emoji/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("delete", res.data);
      setEmojis((prev) =>
        prev.map((count, i) => (i === addedEmoji ? count - 1 : count))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setEmojis(emojiCounts);
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
            emojis.map((count, index) => {
              return (
                count > 0 && (
                  <Emoji
                    key={index}
                    count={count}
                    index={index}
                    image={emojiImage[index].image}
                  />
                )
              );
            })}
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
            {emojiImage &&
              emojiImage.map((emoji, index) => (
                <li key={index} onClick={() => handleEmojiClick(index + 1)}>
                  <img
                    src={emojiImage[index].image}
                    alt={`emoji${index + 1}`}
                  />
                </li>
              ))}
          </E.EmojiList>
        </SimpleContainer>
      )}
    </E.Container>
  );
};

export default EmojiContainer;
