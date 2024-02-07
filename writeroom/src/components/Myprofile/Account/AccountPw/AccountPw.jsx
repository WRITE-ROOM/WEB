import React, { useState } from 'react'
import * as S from "../Account.style";
import * as R from "../AccountEmail/AccountEmail.style";
import * as Q from "./AccountPw.style";
import { useNavigate } from 'react-router-dom';
import MyprofileSNB from '../../MyprofileSNB/MyprofileSNB';

export default function AccountPw() {
    const [showMsg, setShowMsg] = useState(false);

    const sendVerificationEmail = () => {
        //추후에 인증메일 보내는 로직 추가 예정
        // setTimeout(() => {
            setShowMsg(true);
        // }, 2000);
      };
    
    let navigate = useNavigate();
  return (
    <S.Container>
        <MyprofileSNB/>
        <S.Info>
            <R.Top>
                <R.BackBtn size='30' onClick={() => {navigate(-1)}}/>
                <p>비밀번호 변경</p>
            </R.Top>
            <R.CurrentEmail>
                <h2>현재 비밀번호</h2>
                <input type='password' placeholder='현재 비밀번호를 입력하세요.'></input>
            </R.CurrentEmail>
            <Q.NewPw>
                <h2>새 비밀번호</h2>
                <input type='password' placeholder='새 비밀번호(영문, 숫자, 특문 중 2개 조합 10자 이상)'></input>
                {showMsg && (
                    <h6>인증 메일이 발송되었습니다.</h6>
                )}
                <h2>새 비밀번호 확인</h2>
                <input type='password' placeholder='새 비밀번호 확인'></input>
                {showMsg && (
                    <h6>인증 메일이 발송되었습니다.</h6>
                )}
            </Q.NewPw>
            
                
            
            <Q.SaveBtn onClick={sendVerificationEmail}>변경 내용 저장</Q.SaveBtn>
        </S.Info>
    </S.Container>
  )
}
