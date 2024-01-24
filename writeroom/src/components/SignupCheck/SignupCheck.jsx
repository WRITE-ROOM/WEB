import React, { useState } from 'react'
import * as S from './SignupCheck.style'
import { IoCheckboxSharp } from "react-icons/io5";

export default function SignupCheck() {

	const CheckCm = () => {
		const [isCheck, setIsCheck] = useState(false);
	
		const handleCheck = () => {
			setIsCheck((prev) => !prev);
		};
		return (
			<div>
				{isCheck ? (
					<IoCheckboxSharp size="25px" color="rgba(181, 169, 148, 1)" onClick={handleCheck} />
				) : (
					<S.CheckBox onClick={handleCheck}/>
				)}
			</div>
		);
	};

  return (
    <div>
      <S.Container>
		<S.CheckList>
			<CheckCm/>
			<S.ContentWrapper>
				<p>전체 동의합니다.</p>
			</S.ContentWrapper>
		</S.CheckList>
		<S.Line></S.Line>
		<S.CheckList>
			<CheckCm/>
				<S.ContentWrapper>
					<p>(필수) 만 14세 이상입니다.</p>
				</S.ContentWrapper>
		</S.CheckList>
		<S.CheckList>
			<CheckCm/>
				<S.ContentWrapper>
					<p>(필수) 라이트룸 서비스 이용 약관에 동의합니다.</p>
				</S.ContentWrapper>
			<S.ViewButton>보기</S.ViewButton>
		</S.CheckList>
		<S.CheckList>
			<CheckCm/>
				<S.ContentWrapper>
					<p>(필수) 개인정보 수집 및 이용에 동의합니다.</p>
				</S.ContentWrapper>
			<S.ViewButton>보기</S.ViewButton>
		</S.CheckList>
	</S.Container>
    </div>
  )
}
