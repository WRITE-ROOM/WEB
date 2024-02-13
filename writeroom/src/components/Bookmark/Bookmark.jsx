import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import * as B from "./Bookmark.style";
import axios from "axios";

const Bookmark = ({ defaultColor, roomId, noteId, myProfile}) => {
  const [isBookmarked, setIsBookmarked] = useState(myProfile);
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      postBookmark();
    }
    else
      deleteBookmark(noteId);
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
      window.alert('북마크에 추가했어요.');
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = async(noteId) => {
    console.log('클릭한 노트 아이디: ', noteId)
    try {
      const res = await axios.delete(`/notes/bookmark/delete/${noteId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });
      const data = res.data.result;
      console.log(res.data)
      window.alert('북마크에서 해제했어요.');
    } catch (error) {
      console.log(error);
    }
  }
  
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