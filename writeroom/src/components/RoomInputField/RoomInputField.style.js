import styled from "styled-components";

export const InputBox = styled.div`
  padding: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 10px;

  div {
    border: gainsboro solid 1px;
    border-radius: 10px;
    width: 100%;
  }
  input {
    border: none;
    width: 95%;
    height: 40px;
    padding-left: 10px;
  }
  span {
    font-weight: 400;
    color: gray;
  }
`;
