import React, { useState } from 'react'
import * as S from './SignupInput.style'

export default function SignupInput() {
	const [password, setPassword] = useState('');
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const [isPwMatch, setIsPwMatch] = useState(true);

	const handlePwChange = (event) => {
		const newPassword = event.target.value;
		setPassword(newPassword);

		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
		const isValid = passwordRegex.test(newPassword);
		setIsPasswordValid(isValid);
	  };

	  const handleConfirmPwChange = (event) => {
		setIsPwMatch(event.target.value === password);
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
			<input type="password"
			placeholder='비밀번호(영문, 숫자, 특문 조합 10자 이상)'
			onChange={handlePwChange}/>
			{!isPasswordValid && <p>영문, 숫자, 특수문자를 조합하여 10자 이상 입력해주세요.</p>}
		</S.InputInfo>
		<S.InputInfo>
			<input type="password"
			placeholder='비밀번호 확인'
			onChange={handleConfirmPwChange}/>
			{!isPwMatch && <p>비밀번호가 일치하지 않습니다.</p>}

		</S.InputInfo>
    </S.Container>
  )
}
