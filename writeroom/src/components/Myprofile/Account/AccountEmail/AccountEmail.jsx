import React, { useState } from 'react'
import * as S from "../Account.style";
import * as R from "./AccountEmail.style";
import MyprofileSNB from '../../MyprofileSNB/MyprofileSNB';
import { useNavigate } from 'react-router-dom';
import EmailModal from './EmailModal/EmailModal';
import { useSelector } from 'react-redux';

export default function AccountEmail() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const userEmail = user.userEmail;

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
						<p>{userEmail}</p>
					</R.CurrentEmail>
					<R.NewEmail>
						<h2>새 이메일 주소</h2>
						<input placeholder='새 이메일을 입력하세요.'></input>
						{/* <p>인증 메일 발송 후 인증 메일의 링크를 클릭하면 인증 후 이메일 주소를 변경할 수 있어요!</p> */}
            <button onClick={openModal}>인증 메일 보내기</button>
          </R.NewEmail>
				</S.Info>
        <EmailModal isOpen={isModalOpen} onClose={closeModal}/>
    </S.Container>
  )
}
