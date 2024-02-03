import React from 'react'
import * as S from './LoginBox.style'
import LoginInput from '../LoginInput/LoginInput'
import LoginButton from '../LoginButton/LoginButton'
import LoginSocial from '../LoginSocial/LoginSocial'
import { useNavigate } from 'react-router-dom'

export default function LoginBox() {
  let navigate = useNavigate();
  return (
    <S.App>
			<S.Container>
        <S.Title>로그인</S.Title>
        <LoginInput></LoginInput>
        <LoginButton/>
        <LoginSocial/>
        <S.IsSignup>
          <p>계정이 없으신가요?</p>
          <button onClick={() => {navigate('/signup')}}>회원가입</button>
        </S.IsSignup>
      </S.Container>
		</S.App>
  )
}
