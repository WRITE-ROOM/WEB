import React, { useState } from 'react'
import MyprofileSNB from '../MyprofileSNB/MyprofileSNB'
import { useNavigate } from 'react-router-dom'
import * as S from "../Account/Account.style"
import * as R from "./MyBookmark.style"
import WordBookMark from './WordBookmark/WordBookmark'
import NoteBookmark from './NoteBookmark/NoteBookmark'

export default function MyBookmark() {
	const [isBookmarked, setIsBookmarked] = useState(false);
	// const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);

	const tabArray=[
	{
    tabId: 0,
    tabTitle: '소재',
    tabCont:(
      <R.TabInfo>
        <WordBookMark/>
      </R.TabInfo>
    )
	},
	{
		tabId: 1,
		tabTitle: '노트',
		tabCont:(
			<R.TabInfo>
        <NoteBookmark/>
        <NoteBookmark/>
        <NoteBookmark/>
        <NoteBookmark/>

      </R.TabInfo>
  )
	}
];

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
      }
    ]
    const toggleBookmark = () => {
      setIsBookmarked((prev) => !prev);
    };

	let navigate = useNavigate();
  return (
    <div>
    <S.Container>
      <MyprofileSNB/>
      <S.Info>
        <S.Top>
          <p>북마크</p>
          <S.CloseBtn size='30' onClick={() => {navigate('/main')}}/>
        </S.Top>
				<R.TabBox>
				{tabArray.map((item) => (
          <R.WordTab
          key={item.tabId}
          onClick={() => setIndex(item.tabId)}
					isActive={index === item.tabId}>{item.tabTitle}</R.WordTab>
        ))}
				</R.TabBox>
				<div>
					{tabArray.filter(item => index === item.tabId).map(item => (
					<div>{item.tabCont}</div>
				))}
				</div>
			</S.Info>
    </S.Container>
    </div>
  )
}
