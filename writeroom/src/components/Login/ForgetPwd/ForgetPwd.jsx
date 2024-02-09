import React, { useState } from 'react'
import * as S from './ForgetPwd.style'
import axios from 'axios';

export default function ForgetPwd() {
  const [email, setEmail] = useState('');
  const [isExisted, setIsExisted] = useState(true);
  const receivedToken = localStorage.getItem('token');

  const postResetMail = async() => {
    try {
      const res = await axios.post(`/auth/sendResetPwdEmail`, {email: email}, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`
          },
      })
      if (res.data.code === "COMMON200")
        setIsExisted(true);
    } catch(error) {
      if (error.response.data.code === "MEMBER4001")
        setIsExisted(false);
      console.log(error)
    }
  }
  return (
    <S.App>
      <S.Container>
        <h1>비밀번호 재설정</h1>
        <p>가입하신 이메일 주소로 비밀번호 재설정 이메일을 보내드릴게요!</p>
        <input 
          placeholder='이메일'
          onChange={(e) => {setEmail(e.target.value)}}/>
        <button onClick={postResetMail}>이메일 보내기</button>
        <h6> {"< 이전으로"}</h6>
        {isExisted ? <h3>인증 메일 전송했어요!</h3> : <h3>존재하지 않는 이메일이예요.</h3>}
      </S.Container>
    </S.App>
  )
}