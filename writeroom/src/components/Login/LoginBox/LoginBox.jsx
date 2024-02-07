
import React, { useState } from 'react'
import * as S from './LoginBox.style'
import LoginSocial from '../LoginSocial/LoginSocial'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../../redux/user'


export default function LoginBox() {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const user = useSelector((state => state.user))
  const accessToken = user.accessToken;

  function saveLocalStorage(token, id) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }

  const postUser = async() => {
    try {
      console.log('이메일: ', email)
      console.log('비밀번호: ', pw)
      const res = await axios.post(`/auth/signIn`, {email: email, password: pw}, {
        headers: {
          'Content-Type': 'application/json', 
        }
      })
      console.log(res.data);
      let receivedToken = res.data.result.accessToken
      let receivedId = res.data.result.userId
      dispatch(setLogin({
        userId: receivedId,
        accessToken: receivedToken
      }
      ))
      axios.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`;

      saveLocalStorage(receivedToken, receivedId);
      navigate('/main');
    } catch(error) {
      console.log(error);
    }
    
  }


  return (
    <S.App>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.InputInfo>
          <input placeholder='이메일'
          onChange={(e) => {setEmail(e.target.value)}}></input>
        </S.InputInfo>
        <S.InputInfo>
          <input placeholder='비밀번호'
          onChange={(e) => {setPw(e.target.value)}}></input>
        </S.InputInfo>
        <S.LoginButton>
          <button
          onClick={postUser}>로그인</button>
        </S.LoginButton>
        <LoginSocial/>
        <S.IsSignup>
          <p>계정이 없으신가요?</p>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </button>
        </S.IsSignup>
      </S.Container>
    </S.App>
  );
}
