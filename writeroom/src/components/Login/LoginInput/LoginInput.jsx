import React from 'react'
import * as S from './LoginInput.style'

export default function LoginInput() {
  return (
    <S.Container>
      <S.InputInfo>
				<input placeholder='이메일'></input>
			</S.InputInfo>
      <S.InputInfo>
				<input placeholder='비밀번호'></input>
			</S.InputInfo>
    </S.Container>
  )
}
