import React, { useState } from "react";
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

const EmojiContainer = () => {
  const initialEmojis = [
    { index: 1, image: Emoji1, count: 2, added: false },
    { index: 2, image: Emoji2, count: 1, added: false },
    { index: 3, image: Emoji3, count: 4, added: false },
    { index: 4, image: Emoji4, count: 0, added: false },
    { index: 5, image: Emoji5, count: 3, added: false },
    { index: 6, image: Emoji6, count: 0, added: false },
  ];
  const [emojis, setEmojis] = useState(initialEmojis);

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
          width="180px"
          height="75px"
          top="45px"
          padding="12px 16px"
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
