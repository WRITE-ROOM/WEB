import React from "react";
import * as E from "./Emoji.style";

const Emoji = ({ count, index, image }) => {
  // const emojiClass = emoji.added ? "added" : "";

  return (
    // <E.Container className={emojiClass}>

    <E.Container>
      <img src={image} alt={`emoji${index}`} />
      <p>{count}</p>
    </E.Container>
  );
};

export default Emoji;
