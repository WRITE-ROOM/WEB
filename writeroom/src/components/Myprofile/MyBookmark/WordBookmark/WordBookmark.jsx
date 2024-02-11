import React, { useEffect, useState } from 'react'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import * as S from "./WordBookmark.style.js"
import * as R from "../MyBookmark.style.js"
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, deleteBookmark, resetBookmark } from '../../../../redux/bookmark.jsx';

export default function WordBookMark() {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const [count, setCount] = useState();
  const [isBookmarked, setIsBookmarked] = useState([]); //isBookmarked
  const [bookmarkMaterialList, setBookmarkMaterialList] = useState([]); // 북마크한 단어 배열
  const bookmark = useSelector(state => state.bookmark);

  const userId = localStorage.getItem('id');
  const receivedToken = localStorage.getItem('token')

  let dispatch = useDispatch();
  
  const handleBookmarkChange = (index) => {
    setIsBookmarked(prevBookmarks => {
      const updatedBookmarks = [...prevBookmarks];
      updatedBookmarks[index] = !updatedBookmarks[index];
      return updatedBookmarks;
    });
  };
  const getWordBookmark = async () => {
    const receivedToken = localStorage.getItem('token')
    try {
      const Page = page;
      const res = await axios.get(`/bookmarks/topics?page=${1}`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
        });
      console.log(res.data)
      const data = res.data.result;
      dispatch(resetBookmark());
      setBookmarkMaterialList(data.bookmarkMaterialList);  
      setIsBookmarked(Array(data.bookmarkMaterialList.length).fill(true))
      setTotalPage(data.totalPage);
      setCount(data.listSize);
    } catch (error) {
        console.error(error);
    }
  };
  const postBookmarkstatus = async(word) => {
    try {
      const res = await axios.post(`/bookmarks/topics`, {content: word, userId: userId}, 
      {
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
        }
      });
      const serverBookmarkId = res.data.result.bookmarkId;
      const newBookmark = {
        bookmarkId: serverBookmarkId,
        content: word
      }
      dispatch(addBookmark(newBookmark));
      console.log(bookmark);
      console.log(res.data); 
      window.alert('북마크에 추가했어요.');
    } catch (error) {
      console.log(error);
    }
  }
  const DeleteBookmark = async(word) => {
    console.log('클릭한 단어: ', word)
    const clickedBookmark = bookmarkMaterialList.find((bookmark) => bookmark.content === word);
    const bookmarkId = clickedBookmark.id;
    console.log('클릭한 단어의 id: ', bookmarkId)
    try {
      const res = await axios.delete(`/bookmarks/topics/${bookmarkId}`, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
        }
      });
      console.log('delete 서버 res: ', res.data);
      const data = res.data.result;
      dispatch(deleteBookmark({bookmarkId : data.bookmarkId}));
      window.alert('북마크에서 해제했어요.');
    } catch (error) {
      console.log(error);
    }
  }

  const toggleBookmark = ({index, word}) => {
    handleBookmarkChange(index);
    if (isBookmarked[index]) {
      DeleteBookmark(word);
    }
    else {
      postBookmarkstatus(word);
    }    
  };

  useEffect(() => {
    getWordBookmark();
  }, [page]) 

  return (
    <S.Container>
      <S.BookContainer>
      {[...Array(3).keys()].map((section, sectionIndex) => (
        <div key={section} style={{display: 'flex'}}>
          <S.TopicBox>
          {bookmarkMaterialList.slice(sectionIndex * 10, (sectionIndex + 1) * 10).map((word, index) => (
            <S.RecWord key={index}>
              <p>{word.content}</p> 
              {isBookmarked[sectionIndex * 10 + index] ? (
                <FaBookmark color="rgba(181, 169, 148, 1)" onClick={() => toggleBookmark({index: sectionIndex * 10 + index, word: word.content})}/>
              ) : (
                <FaRegBookmark color="black" onClick={() => toggleBookmark({index: sectionIndex * 10 + index, word: word.content})}/>
              )}
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

