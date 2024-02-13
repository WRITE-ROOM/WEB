import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import * as B from "./Bookmark.style";
import axios from "axios";
import { useSelector } from "react-redux";

const Bookmark = ({ defaultColor, roomId, noteId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      postBookmark();
    }
  };

  const accessToken = localStorage.getItem("token");
  // const accessToken =
  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo";

  const fetchBookmark = async () => {
    try {
      const params = { page: 0 };
      const res = await axios.get("/notes/bookmark/list", {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("북마크 조회", res.data);
    } catch (error) {
      console.log(error);
    }
  };

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

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookmark();
  }, []);

  return (
    <B.Container onClick={(e) => e.stopPropagation()}>
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
