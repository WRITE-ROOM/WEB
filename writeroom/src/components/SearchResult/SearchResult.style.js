import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 100%;
  margin-top: 3%;
  margin-left: 15%;
`;
export const Title = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 1%;
`;

export const Contents = styled.div`
  width: 100%;
  height: 150px;
  border: grey solid 1px;
  border-radius: 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  border-bottom: grey solid 1px;

  p {
    margin: 0;
  }
`;
export const PathButton = styled.button`
  width: 100px;
  color: white;
  border-radius: 1rem;
  border: none;
  margin-right: 5%;
  background-color: #b5a995;
  padding: 7px 10px;
`;

export const InnerWrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 20px;

  button {
    margin-top: 15px;
    border-radius: 1rem;
    padding: 3px 10px;
    border: grey 1px solid;
    background-color: white;
  }
`;

export const TextBox = styled.div`
  width: 100%;

  h1 {
    padding-left: 10px;
    padding-top: 10px;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const TextWrapper = styled.div`
  padding: 0px 10px;

  display: flex;
  margin-bottom: 10px;
  gap: 10px;
  h2 {
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: 14px;
  }
`;
