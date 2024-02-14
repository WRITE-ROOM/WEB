import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import * as B from "./Bookmark.style";
import axios from "axios";

const Bookmark = ({ defaultColor, roomId, noteId, bookmarkId, myProfile }) => {
  const [isBookmarked, setIsBookmarked] = useState(myProfile);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      postBookmark();
    } else deleteBookmark(bookmarkId);
  };

  const accessToken = localStorage.getItem("token");

  const postBookmark = async () => {
    try {
      const res = await axios.post(
        `/notes/bookmark/${roomId}/${noteId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      window.alert("북마크에 추가했어요.");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = async (bookmarkId) => {
    console.log("클릭한 북마크 아이디: ", bookmarkId);
    try {
      const res = await axios.delete(`/notes/bookmark/delete/${bookmarkId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        const data = res.data.result;
        console.log(res.data);
        window.alert("북마크에서 해제했어요.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <B.Container onClick={(e) => e.stopPropagation()}>
      {isBookmarked ? (
        <FaBookmark
          size={18}
          color="rgba(181, 169, 148, 1)"
          onClick={handleBookmark}
        />
      ) : (
        <B.NotBookMark
          size={18}
          // color={defaultColor ? defaultColor : "black"}
          onClick={handleBookmark}
        />
      )}
    </B.Container>
  );
};

export default Bookmark;
