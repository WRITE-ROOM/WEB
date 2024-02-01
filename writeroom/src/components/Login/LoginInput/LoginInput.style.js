import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	// justify-content: space-between;
	width: 394px;
	height: 180px;
	
	// background-color: green;
`

export const InputInfo = styled.div`
	width: 394px;
	height: 55px;
	margin: 8px 0;
	
	input {
		width: 382px;
		height: 55px;
		border-radius: 10px;
		border: 1px solid rgba(229, 229, 229, 1);
		padding-left: 10px;
	}
	::placeholder {
		font-family: Pretendard;
		font-size: 18px;
		font-weight: 300;
		line-height: 22px;
  }
	p {
		margin: 0;
		padding-left: 10px;

		font-size: 12px;
		font-weight: 400;
		line-height: 20px;
		color: red;

	}
`