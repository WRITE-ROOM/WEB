import React, { useState } from 'react'
import * as S from "../Account.style";
import * as R from "./AccountEmail.style";
import MyprofileSNB from '../../MyprofileSNB/MyprofileSNB';
import { useNavigate } from 'react-router-dom';

export default function AccountEmail() {
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
                <p>이메일 주소 변경</p>
            </R.Top>
            <R.CurrentEmail>
                <h2>현재 이메일 주소</h2>
                <p>admin123@gmail.com</p>
            </R.CurrentEmail>
            <R.NewEmail>
                <h2>새 이메일 주소</h2>
                <input placeholder='새 이메일을 입력하세요.'></input>
                <p>인증 메일 발송 후 인증 메일의 링크를 클릭하면 인증 후 이메일 주소를 변경할 수 있어요!</p>
                <button onClick={sendVerificationEmail}>인증 메일 보내기</button>
                {showMsg && (
                    <h6>인증 메일이 발송되었습니다.</h6>
                )}
            </R.NewEmail>
        </S.Info>
    </S.Container>
  )
}
