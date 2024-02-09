import styled from "styled-components";

export const App = styled.div`
  width: 100%:  
  height: 832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 300px;

  h1 {
    font-family: Noto Sans;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;    
  }

  p {
    font-family: Noto Sans;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
  }

  input {
    width: 310px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid black;
    padding-left: 10px;
  }
  ::placeholder {
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;   
    color: rgba(217, 217, 217, 1); 
  }

  button {
    width: 320px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid black;
  }

  h6 {
    width: 320px;
    text-align: left;
    text-decoration: underline;
  }
`;

