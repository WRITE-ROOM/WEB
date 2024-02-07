import React from "react";
import * as E from "./Emoji.style";

const Emoji = ({ emoji }) => {
  const emojiClass = emoji.added ? "added" : "";
  return (
    <E.Container className={emojiClass}>
      <img src={emoji.image} alt={`emoji${emoji.index}`} />
      <p>{emoji.count}</p>
    </E.Container>
  );
};

export default Emoji;
