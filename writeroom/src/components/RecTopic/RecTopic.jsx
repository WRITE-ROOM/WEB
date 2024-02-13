import React, { useCallback, useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import * as S from "./RecTopic.style";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, deleteBookmark } from "../../redux/bookmark";

export default function RecTopic({ onToggle }) {
  const [inputWord, setInputWord] = useState("");
  const [displayKeyword, setDisplayKeyword] = useState(false);
  const [displaySynonym, setDisplaySynonym] = useState(false);
  const [topics, setTopics] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState([false, false, false, false, false]);

  const [keywords, setKeywords] = useState([]);
  const [searchKeyword, setSearchkeyword] = useState("");
  const [isKeywordSearchOpen, setIsKeywordSearchOpen] = useState(false);

  const [synonyms, setSynonyms] = useState([]);
  const [searchSynonym, setSearchSynonym] = useState("");
  const [isSynonymSearchOpen, setIsSynonymSearchOpen] = useState(false);

  const user = useSelector((state) => state.user);
  const bookmark = useSelector(state => state.bookmark);
  const userId = localStorage.getItem('id');
  const receivedToken = localStorage.getItem('token');
  // const receivedToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImVtYWlsIjoidGVzdFVzZXJAbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDcxNTEwNDQsImV4cCI6MTc5MzU1MTA0NH0.Dsm7MWG8y-zUQnhRTe5P0ndFCjbhVU1z8mYwj1hqASo"

  let dispatch = useDispatch();

  const handleKeyPressKeyword = (e) => {
    if (e.key === "Enter") {
      setIsKeywordSearchOpen(true);
      setSearchkeyword(inputWord);
    }
  };

  const handleKeyPressSynonym = (e) => {
    if (e.key === "Enter") {
      setIsSynonymSearchOpen(true);
      setSearchSynonym(inputWord);
    }
  };

  const handleBookmarkChange = (index) => {
    setIsBookmarked(prevBookmarks => {
      const updatedBookmarks = [...prevBookmarks];
      updatedBookmarks[index] = !updatedBookmarks[index];
      return updatedBookmarks;
    });
  };

  const getTopics = async() => {
    try {
      const res = await axios.get(`/search/topics`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      console.log('서버 전달이다: ', res.data)
      // const vocas = res.data.result.map(item => item.voca);
      const vocas = res.data.result[0].voca.split(', ');
      setTopics(vocas);

    } catch (error) {  
      console.log(error)
    }
  }
  const getKeyword = async() => {
    console.log('검색한 단어 axios에서 확인: ', searchKeyword)

    try {
      const Voca = searchKeyword;
      const res = await axios.get(`/search/similarKeywords?voca=${Voca}`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      // console.log(res.data)
      // const vocas = res.data.result.map(item => item.voca);
      const vocas = res.data.result[0].voca.split(', ');
      setKeywords(vocas);
    } catch (error) {
      console.log(error)
    }
  }
  const getSynonym = async() => {
    try {
      const Voca = searchSynonym;
      const res = await axios.get(`/search/synonyms?voca=${Voca}`, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      console.log(res.data)
      // const vocas = res.data.result.map(item => item.voca);
      const vocas = res.data.result[0].voca.split(', ');
      console.log('vocas: ', vocas)
      setSynonyms(vocas);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTopics()
  }, [])

  useEffect(() => {
    if (isKeywordSearchOpen) {
      getKeyword();
    }
  }, [searchKeyword, isKeywordSearchOpen]);

  useEffect(() => {
    if (isSynonymSearchOpen) {
      getSynonym();
    }
  }, [searchSynonym, isSynonymSearchOpen]);

  const RecWord = ({ word, index, isBookmarked, onBookmarkChange }) => {
    let dispatch = useDispatch();
    const bookmarks = useSelector((state) => state.bookmark);
    

    const togglePostBookmark = () => {
      onBookmarkChange(index);
      postBookmarkstatus(word);
    };
    const toggleDeleteBookmark = () => {
      onBookmarkChange(index);
      DeleteBookmark(word);
    };

    const postBookmarkstatus = async(word) => {
      console.log(word) // 잘 뜸
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
        console.log('content: ', word, ', userId: ', userId)
        console.log(error);
      }
    }
    
    const DeleteBookmark = async(word) => {
      const existingBookmark = bookmarks.find((bookmark) => bookmark.content === word);
      try {
        const res = await axios.delete(`/bookmarks/topics/${existingBookmark.bookmarkId}`, {
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
    
    return (
      <S.RecWord>
        <p>{word}</p>
        {isBookmarked ? (
          <FaBookmark color="rgba(181, 169, 148, 1)" onClick={toggleDeleteBookmark}/>
        ) : (
          <S.NotBookMark onClick={togglePostBookmark} />
        )}
      </S.RecWord>
    );
  };

  return (
    <S.Container>
      <S.Left>
        <button onClick={onToggle}>
          <MdKeyboardDoubleArrowRight
            style={{cursor: "pointer"}}
            color="rgba(147, 147, 147, 1)"
            size="20"
          />
        </button>
      </S.Left>
      <S.Right>
        <S.Wrapper>
          <S.Top>
            <S.WordTitle>오늘의 소재</S.WordTitle>
            <button>
              <S.Refresh size="30" onClick={() => {getTopics()}}/>
            </button>
          </S.Top>
          <S.RecBottom>
          {topics.map((word, index) => (
            <RecWord
              key={index}
              word={word}
              index={index}
              isBookmarked={isBookmarked[index]}
              onBookmarkChange={handleBookmarkChange}
            />
          ))}
          </S.RecBottom>
        </S.Wrapper>

        <S.Wrapper>
          <S.Top>
            <S.WordTitle>유사 키워드 검색</S.WordTitle>
          </S.Top>
          <S.WordSearch>
            <IoSearchOutline color="rgba(147, 147, 147, 1)" size="23" />
            <input
              placeholder="키워드를 검색해 보세요"
              onChange={(e) => {
                setInputWord(e.target.value);
              }}
              onKeyUp={handleKeyPressKeyword}
            ></input>
          </S.WordSearch>
          {isKeywordSearchOpen && (
            <S.WordBottom>
              <S.BottomWords>
                <p>{searchKeyword}</p>
                <p>{keywords[0]}</p>
                <p>{keywords[1]}</p>
              </S.BottomWords>
              <S.BottomLine />
              <S.BottomWords>
                <p>{keywords[2]}</p>
                <p>{keywords[3]}</p>
                <p>{keywords[4]}</p>
              </S.BottomWords>
            </S.WordBottom>
          )}
        </S.Wrapper>

        <S.Wrapper>
          <S.Top>
            <S.WordTitle>유사 어휘 검색</S.WordTitle>
          </S.Top>
          <S.WordSearch>
            <IoSearchOutline color="rgba(147, 147, 147, 1)" size="23" />
            <input
              placeholder="어휘를 검색해 보세요"
              onChange={(e) => {
                setInputWord(e.target.value);
              }}
              onKeyUp={handleKeyPressSynonym}
            ></input>
          </S.WordSearch>
          {isSynonymSearchOpen && (
            <S.WordBottom>
              <S.BottomWords>
                <p>{searchSynonym}</p>
                <p>{synonyms[0]}</p>
                <p>{synonyms[1]}</p>
              </S.BottomWords>
              <S.BottomLine />
              <S.BottomWords>
                <p>{synonyms[2]}</p>
                <p>{synonyms[3]}</p>
                <p>{synonyms[4]}</p>
              </S.BottomWords>
            </S.WordBottom>
          )}
        </S.Wrapper>
      </S.Right>
    </S.Container>
  );
}
