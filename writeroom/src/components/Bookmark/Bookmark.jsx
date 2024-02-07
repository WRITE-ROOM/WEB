import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import * as B from "./Bookmark.style";
import axios from "axios";
import { useSelector } from "react-redux";

const Bookmark = ({ defaultColor }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      postBookmark();
    }
  };

  // const roomId = useSelector((state) => state.room.roomId);
  const roomId = 8;
  // const noteId = useSelector((state) => state.note.noteId);
  const noteId = 1;
  // const userId = useSelector((state) => state.user.userId);
  const userId = 1;

  const postBookmark = async () => {
    try {
      const res = await axios.post(
        `/notes/bookmark/${roomId}/${noteId}/${userId}`,
        {}
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <B.Container>
      {isBookmarked ? (
        <FaBookmark
          size={18}
          color="rgba(181, 169, 148, 1)"
          onClick={handleBookmark}
        />
      ) : (
        <FaRegBookmark
          size={18}
          color={defaultColor ? defaultColor : "black"}
          onClick={handleBookmark}
        />
      )}
    </B.Container>
  );
};

export default Bookmark;
