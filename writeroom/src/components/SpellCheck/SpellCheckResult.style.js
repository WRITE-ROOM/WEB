import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;

  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 560px;
  height: 580px;
  background-color: #fff;
  border-radius: 10px;
  padding: 32px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    height: 50px;
  }

  .buttons {
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
`;

export const Result = styled.div`
  width: 500px;
  height: 400px;
  max-height: 400px;
  padding: 16px;
  border-radius: 10px;
  background-color: #f2f2f2;
  overflow-y: auto;
  margin: 0 auto;

  p {
    width: 100%;
    font-size: 16px;
    font-weight: 400px;
    text-align: left;
  }
`;
