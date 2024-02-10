import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`
export const Modal = styled.div`
	width: 380px;
	height: 283px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	background: white;
	z-index: 101;
`

export const Top = styled.div`
	width; 400px;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		width: 345px;
		height: 24px;
		font-family: Pretendard;
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
	}

	button {
		width: 15px;
		height: 15px;
		background: red;
		cursor: pointer;
	}
`;

export const closeBtn = styled(IoClose)`
  cursor: pointer;
`;

export const RoomName = styled.div`
  width: 362px;
  height: 62px;
  background: white;
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 10px;
  p {
    width: 300px;
    height: 17.57px;
    margin: 11px 0 0 15px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
  input {
    width: 340px;
    height: 20px;
    margin-left: 13px;
    border: none;
  }
  ::placeholder {
    font-family: Noto Sans;
    font-size: 14px;
    font-weight: 300;
    text-align: left;
    color: rgba(147, 147, 147, 1);
  }
`;
export const MakeBtn = styled.div`
  width: 362px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(181, 169, 148, 1);
  cursor: pointer;

  p {
    width: 60px;
    margin-left: 15px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 300;
    color: white;
  }
`;
