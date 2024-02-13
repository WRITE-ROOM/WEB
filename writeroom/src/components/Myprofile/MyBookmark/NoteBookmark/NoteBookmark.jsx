import React, { useEffect, useState } from 'react'
import * as S from "./NoteBookmark.style"
import * as R from "../MyBookmark.style"
import Bookmark from '../../../Bookmark/Bookmark'
import { HiMiniUserCircle } from "react-icons/hi2";
import axios from 'axios';
import { addNote, resetNote } from '../../../../redux/note';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { TagContainer } from '../../../../pages/Note.style';
import Tag from '../../../../redux/tag';
import Setting from '../../../Setting/Setting';
import Naver from '../../../../assets/naver.png'


export default function NoteBookmark() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [count, setCount] = useState();
  const receivedToken = localStorage.getItem('token')
  const [isBookmarked, setIsBookmarked] = useState([]); //isBookmarked
  const [bookmarkMaterialList, setBookmarkMaterialList] = useState([]); // 북마크한 단어 배열

  const [maxLength, setMaxLength] = useState(100);


  const roomId = 94; //임시
  

  const note = useSelector((state) => state.note);
  let dispatch = useDispatch();

  const handleBookmarkChange = (index) => {
    setIsBookmarked(prevBookmarks => {
      const updatedBookmarks = [...prevBookmarks];
      updatedBookmarks[index] = !updatedBookmarks[index];
      return updatedBookmarks;
    });
  };

  const stripHtmlTags = (index) => {
    const doc = new DOMParser().parseFromString(bookmarkMaterialList[index].noteContent, "text/html");
    const textContent = doc.body.textContent || "";
    return textContent;
  };
  const fetchBookmark = async () => {
    try {
      const Page = page;
      const res = await axios.get(`/notes/bookmark/list?page=${page-1}`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
        });
      const data = res.data.result;
      dispatch(resetNote());
      setBookmarkMaterialList(data.noteListForNoteBookmarkLists); // 북마크한 노트 리스트
      setIsBookmarked(Array(data.listSize).fill(true)); // 북마크 여부
      setCount(data.totalElements); // 총 리스트 개수
      setTotalPage(data.totalPage); // 총 페이지

      console.log(res.data)
      console.log(bookmarkMaterialList); 
      console.log(isBookmarked);
    } catch (error) {
        console.error(error);
    }
  };
  
  useEffect(() => {
    fetchBookmark();
  }, [page])

  return (
    <S.App>
      {bookmarkMaterialList.map((bookmark, index) => (
        <S.Container key={index}>
        <S.ContentsBox>
          <S.Top>
            <S.Left>
              {bookmark.writerImg ? (
                <img src={bookmark.writerImg} alt="profileImg" />
              ) : (
                <HiMiniUserCircle size={46} color="#e5e5e5" />
              )}
              <div className="info">
                <S.Writer>{bookmark.writer}</S.Writer>
  
                <S.Info>
                  <S.Date>{bookmark.createdAt.split("T")[0]}</S.Date>
  
                  <TagContainer>
                    <ul>
                      {bookmark.tagList &&
                        bookmark.tagList.map((tag, index) => {
                          return <Tag key={index}>{tag.tagName}</Tag>;
                        })}
                    </ul>
                  </TagContainer>
                </S.Info>
              </div>
            </S.Left>
  
            <S.Right>
              <Bookmark roomId={bookmark.roomId} noteId={bookmark.noteId} bookmarkId={bookmark.noteBookmarkId} defaultColor="black" myProfile={true}/>
              <Setting
                type="dots"
                note={note}
                roomId={parseInt(bookmark.roomId)}
                categoryName={note.categoryContent}
              />
            </S.Right>
          </S.Top>
  
          <S.TextBox>
            <h1>{bookmark.noteTitle}</h1>
            <p>
              <span>{bookmark.noteSubtitle}</span>
              {bookmark.noteContent && bookmark.noteContent.length < maxLength
                ? stripHtmlTags(index)
                : stripHtmlTags(index).slice(0, maxLength) + "..."}
            </p>
          </S.TextBox>
        </S.ContentsBox>
  
        {bookmark.noteImg && <S.NoteImg src={bookmark.noteImg}></S.NoteImg>}
      </S.Container>
      ))}
        <R.PagenationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={30}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            // onChange={handlePageChange}
          />
        </R.PagenationBox>
    </S.App>
  )
}
