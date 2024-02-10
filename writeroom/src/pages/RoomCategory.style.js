import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Wrapper = styled.div`
  display: flex;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
`;

export const CategoryBar = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  border: gainsboro 1px solid;
  border-radius: 10px;
  padding: 20px 10px;
  p {
    color: #b5a995;
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 20px 10px;
  background-color: #b5a995;
  color: white;
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;

export const CategoryModal = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 150px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  border-radius: 10px;
  border: gainsboro 3px solid;
  input {
    border: none;
    width: 80%;
    height: 100%;
  }
  input:focus {
    outline: none;
  }

  span {
    position: absolute;
    font-weight: 400;
    color: #b5a995;
    margin-left: 350px;
    margin-top: 7px;
  }
`;

export const ModalButton = styled.button`
  color: white;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #b5a995;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;

export const ModalTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 20px;
  }
`;

export const CloseIcon = styled(IoClose)`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  gap: 10px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 3px 0px;
  border-radius: 10px;
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  background-color: gainsboro;
  color: #b5a995;
`;

export const SaveButton = styled(Button)`
  background-color: #b5a995;
  color: white;
`;
