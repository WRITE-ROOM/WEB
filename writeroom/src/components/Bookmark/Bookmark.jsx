import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import * as B from "./Bookmark.style";

const Bookmark = ({ defaultColor }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <B.Container>
      {isBookmarked ? (
        <FaBookmark
          size={18}
          color="rgba(181, 169, 148, 1)"
          onClick={toggleBookmark}
        />
      ) : (
        <FaRegBookmark
          size={18}
          color={defaultColor ? defaultColor : "black"}
          onClick={toggleBookmark}
        />
      )}
    </B.Container>
  );
};

export default Bookmark;
