import React, { useState } from 'react'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import * as S from "./WordBookmark.style.js"

export default function WordBookMark() {
    // const [isBookmarked, setIsBookmarked] = useState(false);


    const bookmarkMaterialList = [
      {
        "id": 0,
        "content": "string"
      },
      {
        "id": 1,
        "content": "첫 눈이 오면"
      }, 
      {
        "id": 2,
        "content": "아 졸리다"
      },
      {
        "id": 3,
        "content": "북마크 테스트 중"
      },
      {
        "id": 4,
        "content": "북마크 테스트 중2"
      },
      {
        "id": 5,
        "content": "북마크 테스트 중3"
      },
      {
        "id": 6,
        "content": "북마크 테스트 중4"
      },
      {
        "id": 7,
        "content": "북마크 테스트 중5"
      },
      {
        "id": 8,
        "content": "북마크 테스트 중4"
      },
      {
        "id": 9,
        "content": "북마크 테스트 중5"
      },
      {
        "id": 10,
        "content": "북마크 테스트 중4"
      },
      {
        "id": 11,
        "content": "북마크 테스트 중5"
      },
      {
        "id": 12,
        "content": "북마크 테스트 중4"
      },
      {
        "id": 13,
        "content": "북마크 테스트 중5"
      }
    ]

    const toggleBookmark = (index) => {
      setBookmarkStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        return newStates;
      });
    };
    const [bookmarkStates, setBookmarkStates] = useState(Array(bookmarkMaterialList.length).fill(false));

  
    // const toggleBookmark = () => {
    //   setIsBookmarked((prev) => !prev);
    // };
    return (
      <S.Container>
        {bookmarkMaterialList.map((word, index) => (
          <S.RecWord key={index}>
            <p>{word.content}</p>
            {/* {isBookmarked ? (
              <FaBookmark color="rgba(181, 169, 148, 1)" onClick={toggleBookmark} />
            ) : (
              <FaRegBookmark color="black" onClick={toggleBookmark} />
            )} */}
            {bookmarkStates[index] ? (
            <FaBookmark color="rgba(181, 169, 148, 1)" onClick={() => toggleBookmark(index)} />
          ) : (
            <FaRegBookmark color="black" onClick={() => toggleBookmark(index)} />
          )}
          </S.RecWord>
        ))}
      </S.Container>
    );
  };