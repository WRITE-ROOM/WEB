import React from 'react'
import * as S from './SignupSocial.style'
import Google from '../../assets/google.png'
import Kakao from '../../assets/kakao.png'
import Naver from '../../assets/naver.png'

export default function SignupSocial() {
  return (
		<S.Container>
			<button> 
				<S.SocialImg src={Google} alt="google"/>
			</button>
			<button>
				<S.SocialImg src={Kakao} alt="kakao"/>
			</button>
			<button>
				<S.SocialImg src={Naver} alt="naver"/>
			</button>
		</S.Container>
	)
}
