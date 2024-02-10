import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.button`
  width: 33%;
  height: 100%;
  padding: 20px 0px;
  color: ${({ isSelected }) => (isSelected ? "black" : "gray")};
  background-color: ${({ isSelected }) => (isSelected ? "white" : "#eaeaea")};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0px -5px 10px gainsboro;
  display: flex;
  gap: 10px;
  border: none;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  h1 {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const People = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  gap: 10px;
  h1 {
    margin-top: 20px;
    font-size: 25px;
  }
`;

export const GiveUpButton = styled.button`
  margin-top: 200px;
  padding-bottom: 20px;
  text-decoration: underline;
  border: none;
  background: none;
  color: red;
  cursor: pointer;
`;
