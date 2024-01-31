import React, { useState } from 'react'
import * as S from './SignupInput.style'
import SignupButton from '../SignupButton/SignupButton';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/user';

export default function SignupInput() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const [isPwMatch, setIsPwMatch] = useState(true);

	const [isNameErr, setNameErr] = useState(true);
	const [isEmailErr, setEmailErr] = useState(true);
	const [isPwErr, setPwErr] = useState(true);

	let dispatch = useDispatch();

	const handlePwChange = (e) => {
		setPassword(e.target.value);

		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
		const isValid = passwordRegex.test(e.target.value);
		setIsPasswordValid(isValid);
	};

	const handleConfirmPwChange = (e) => {
		setIsPwMatch(e.target.value === password);
	};
	
	  const handleSignupClick = () => {
		setNameErr(name === '');
		setEmailErr(email === '');
		setPwErr(password === '');

		if (!isNameErr && !isEmailErr && !isPwErr && isPasswordValid && isPwMatch)
			dispatch(addUser({
				userName: name,
				userId: email,
				userPw: password
		}))

	  }
  return (
	<div>
		<S.Container>
			<S.InputInfo>
				<input placeholder='닉네임' 
				onChange={(e) => {setName(e.target.value)}}></input>
				{isNameErr ? <p>닉네임을 입력해주세요.</p> : null}
			</S.InputInfo>
			<S.InputInfo>
				<input placeholder='이메일(example@gmail.com)' 
				onChange={(e) => {setEmail(e.target.value)}}></input>
				{isEmailErr ? <p>이메일을 입력해주세요.</p> : null}
			</S.InputInfo>
			<S.InputInfo>
				<input type="password"
				placeholder='비밀번호(영문, 숫자, 특문 조합 10자 이상)'
				onChange={handlePwChange}/>
				{(!isPasswordValid || isPwErr) ? <p>영문, 숫자, 특수문자를 조합하여 10자 이상 입력해주세요.</p> : null}
			</S.InputInfo>
			<S.InputInfo>
				<input type="password"
				placeholder='비밀번호 확인'
				onChange={handleConfirmPwChange}/>
				{!isPwMatch && <p>비밀번호가 일치하지 않습니다.</p>}
			</S.InputInfo>
		</S.Container>
		<SignupButton onClick={handleSignupClick}></SignupButton>
	</div>
  )
}
