import React from 'react'
import * as S from './SignupButton.style'
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../../../redux/user';

export default function SignupButton({onClick}) {
	let user = useSelector((state) => state.user);
	let dispatch = useDispatch()

	return (
		<div>
			<S.SignupButton>
				<button
				onClick={onClick}>가입하기</button>
			</S.SignupButton>
		</div>
  )
}
