import React from 'react'
import * as S from "./NoteBookmark.style"
import Bookmark from '../../../Bookmark/Bookmark'
import { HiMiniUserCircle } from "react-icons/hi2";

export default function NoteBookmark() {
  return (
    <S.Container>    
      <S.Top>
        <S.Image>
          <HiMiniUserCircle size="60" color="rgba(229, 229, 229, 1)"/>
        </S.Image>
        <S.InfoBox>
          <h3>제리</h3>
          <S.DateAndTag>
            <p>2024.01.13</p>
            <S.Tag>음악</S.Tag>
          </S.DateAndTag>
        </S.InfoBox>
        <S.Bookmark>
          <Bookmark />
        </S.Bookmark>
      </S.Top>
        <hr/>
      <S.Bottom>
        <h2>노래 플레이리스트</h2>
        <p>
          <span style={{ fontWeight: '600', fontSize: '12px', fontFamily: 'Pretendard'}}>Someone Like You | </span>
          <span>이 노래는 이별의 아픔과 함께 흐르는 감정이 담겨 있어, 때로는 마음을 추스리고 울릴 때가 있다. 강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다. 강렬한 목소리가 때로는 마음을 추스리고 울릴 때가 있다. 강렬 ···</span>
        </p>
      </S.Bottom>
    </S.Container>
  )
}
