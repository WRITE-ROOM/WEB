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
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Twemoji12_1f602.svg/800px-Twemoji12_1f602.svg.png",
    },
    {
      image:
        "https://static-00.iconduck.com/assets.00/smiling-face-with-hearts-emoji-emoji-2026x2048-a7w8b5yr.png",
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/Face-with-Spiral-Eyes---a-new-Apple-emoji-/960x0.png?height=711&width=711&fit=bounds",
    },
    {
      image:
        "https://www.itpedia.nl/wp-content/uploads/2018/02/Thinking_Face_Emoji.png",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Expressionless_Face_Emoji_large.png?v=1571606037",
    },
  ];
  // const emojiImage = [
  //   { image: Emoji1 },
  //   { image: Emoji2 },
  //   { image: Emoji3 },
  //   { image: Emoji4 },
  //   { image: Emoji5 },
  //   { image: Emoji6 },
  // ];

  const [emojis, setEmojis] = useState(emojiCounts);
  console.log("emojis ", emojis);

  const [showEmojiList, setShowEmojiList] = useState(false);

  const [addedEmoji, setAddedEmoji] = useState(null);

  const noteId = useSelector((state) => state.note.noteId);

  const handleEmojiClick = async (index) => {
    if (addedEmoji) {
      if (addedEmoji === index) {
        deleteEmoji();
        setEmojis((prev) =>
          prev.map((count, i) => (i === addedEmoji - 1 ? count - 1 : count))
        );
        // setEmojis(emojiCounts);
        setAddedEmoji(null);
      } else {
        updateEmoji(index);

        setEmojis((prev) =>
          prev.map((count, i) => (i === addedEmoji - 1 ? count - 1 : count))
        );
        setEmojis((prev) =>
          prev.map((count, i) => (i === index - 1 ? count + 1 : count))
        );

        setAddedEmoji(index);
      }
    } else {
      postEmoji(index);

      setEmojis((prev) =>
        prev.map((count, i) => (i === index - 1 ? count + 1 : count))
      );

      setAddedEmoji(index);
    }

    // if (addedEmoji === index) {
    //   await deleteEmoji();
    //   setAddedEmoji(null);
    // } else if (addedEmoji === null) {
    //   await deleteEmoji();
    //   await postEmoji(index);
    //   setAddedEmoji(index);
    // } else {
    //   await updateEmoji(index);
    //   setAddedEmoji(index);
    // }
  };

  console.log("added", addedEmoji);

  const accessToken = localStorage.getItem("token");
  // const accessToken =
  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  const fetchEmoji = async () => {
    try {
      const res = await axios.get(`/Emoji/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("fetch", res.data);
      setAddedEmoji(res.data.result.emojiNum);
    } catch (error) {
      console.log(error);
      setAddedEmoji(null);
    }
  };

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
      console.log("delete ", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmoji();
    if (emojiCounts) {
      setEmojis(emojiCounts);
    }
  }, [emojiCounts]);
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
