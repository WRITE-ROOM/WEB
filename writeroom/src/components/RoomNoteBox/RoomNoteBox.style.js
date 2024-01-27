import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  border: solid gainsboro;
  width: 100%;
  border-radius: 10px;
  height: 200px;
  /* background-color: red; */
`;

export const ContentsBox = styled.div`
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const NameBox = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 150px;
  width: 90%;
  justify-content: space-between;
`;
export const CategoryWrapper = styled.div`
  color: #b5a995;
  display: flex;
  margin-left: 50px;
  align-items: center;
  button {
    color: #b5a995;
    border-radius: 15px;
    margin-left: 20px;
    background: none;
    border: gainsboro 2px solid;
  }
`;

export const TextBox = styled.div`
  border-top: gainsboro 3px solid;
  gap: 10px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    margin-top: 10px;
  }
  h2 {
    font-weight: bolder;
    font-size: 16px;
  }
`;
