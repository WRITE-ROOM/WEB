import React, { useEffect, useState } from 'react'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import * as S from "./WordBookmark.style.js"
import * as R from "../MyBookmark.style.js"
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { useDispatch } from 'react-redux';
import { deleteBookmark } from '../../../../redux/bookmark.jsx';

export default function WordBookMark() {
    // const [isBookmarked, setIsBookmarked] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const [count, setCount] = useState();
  const [bookmarkMaterialList, setBookmarkMaterialList] = useState([]);
  const bookmarkMaterialListSample = [
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
  const receivedToken = localStorage.getItem('token')

  let dispatch = useDispatch();
  
  const toggleBookmark = (index) => {
    setBookmarkStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const [bookmarkStates, setBookmarkStates] = useState([]);
      

  const getWordBookmark = async () => {
    const receivedToken = localStorage.getItem('token')
    // const receivedToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo"
    try {
      const Page = page;
      const res = await axios.get(`/bookmarks/topics?page=${Page}`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
        });
      console.log(res.data)
      const data = res.data.result;
      setBookmarkMaterialList(data.bookmarkMaterialList);  
      // setBookmarkStates(Array(bookmarkMaterialList.length).fill(true))
      // console.log(bookmarkStates)
      setTotalPage(data.totalPage);
      setCount(data.listSize);
      console.log(bookmarkMaterialList)
    } catch (error) {
          console.error(error);
    }
  };

  const bookmarkId = 13;
  const DeleteBookmark = async(word) => {
    console.log('delete bookmarkId: ', bookmarkId)
    try {
      const res = await axios.delete(`/bookmarks/topics/${bookmarkId}`, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
        }
      });
      console.log('delete 서버 res: ', res.data);
      const data = res.data.result;
      dispatch(deleteBookmark({bookmarkId : data.bookmarkId}))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWordBookmark();
  }, [page]) 

  return (
    <S.Container>
      <S.BookContainer>
      {[...Array(3).keys()].map((section, sectionIndex) => (
        <div key={section} style={{display: 'flex'}}>
          <S.TopicBox>
          {bookmarkMaterialList.slice(sectionIndex * 13, (sectionIndex + 1) * 13).map((word, index) => (
            <S.RecWord key={index}>
              <p>{word.content}</p>
              <FaBookmark color="rgba(181, 169, 148, 1)" onClick={() => toggleBookmark(sectionIndex * 13 + index)} />
            </S.RecWord>
          ))}
          </S.TopicBox>
          {sectionIndex < 2 && <R.Line />}
        </div>
        ))}
      </S.BookContainer>
      <R.PagenationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={39}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={() => setPage(prevPage => prevPage + 1)}
        />
      </R.PagenationBox>
    </S.Container>
    );
  };