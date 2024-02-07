import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: #eee;
  padding: 0 24px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 16px;

  input {
    border: none;
    background-color: #d9d9d9;
    width: 110px;
    height: 24px;
    padding: 0px 10px;
    text-decoration: underline;

    &:focus {
      outline: none;
    }
  }
`;

export const AddTag = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const DeleteTag = styled.span`
  width: 16px;
  height: 16px;
`;
