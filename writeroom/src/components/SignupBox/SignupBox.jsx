import React from 'react'
import * as S from './SignupBox.style'
import SignupInput from '../SignupInput/SignupInput'
import SignupCheck from '../SignupCheck/SignupCheck'
import SignupButton from '../SignupButton/SignupButton'

export default function SignupBox() {
  return (
    <S.App>
			<S.Container>
				<S.Title>회원가입</S.Title>
				<SignupInput></SignupInput>
        <SignupCheck></SignupCheck>
        <SignupButton>회원가입</SignupButton>
			</S.Container>
    </S.App>
  )
}
