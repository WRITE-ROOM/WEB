import React, { useState } from 'react'
import * as S from './SignupInput.style'

export default function SignupInput() {
	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
	const [password, setPassword] = useState('');
	const [isPasswordValid, setIsPasswordValid] = useState(true);

	const handlePasswordChange = (event) => {
		const newPassword = event.target.value;
		setPassword(newPassword);
	
		// 정규식을 사용하여 유효성 검사
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
		const isValid = passwordRegex.test(newPassword);
		setIsPasswordValid(isValid);
	  };

  return (
    <S.Container>
		<S.InputInfo>
			<input placeholder='닉네임'></input>
		</S.InputInfo>
		<S.InputInfo>
			<input placeholder='이메일(example@gmail.com)'></input>
		</S.InputInfo>
		<S.InputInfo>
			<input placeholder='비밀번호(영문, 숫자, 특문 조합 10자 이상)'
			onChange={handlePasswordChange}></input>
			{!isPasswordValid && <p>영문, 숫자, 특수문자를 조합하여 10자 이상 입력해주세요.</p>}
		</S.InputInfo>
		<S.InputInfo>
			<input placeholder='비밀번호 확인'></input>
			<p>비밀번호가 일치하지 않습니다</p>
		</S.InputInfo>
    </S.Container>
  )
}
