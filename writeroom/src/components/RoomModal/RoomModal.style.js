import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 300px;
  h1 {
    font-size: 20px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;

export const CancelButton = styled.button`
  cursor: pointer;
  border: gainsboro 1px solid;
  padding: 12px 70px;
  font-size: 16px;
  border-radius: 10px;
  background-color: #f2f2f2f2;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  border: gainsboro 1px solid;
  padding: 12px 70px;
  font-size: 16px;
  border-radius: 10px;
  background-color: white;
`;
