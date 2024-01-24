import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 10px;
`
export const Title = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
`

export const Contents = styled.div`
  width: 100%;
  height: 150px;
  border: grey solid 1px;
  margin-top: 10px;
  border-radius: 15px;
`
export const Wrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;;
  width: 100%;
  height: 50%;
  border-bottom: grey solid 1px;

  p {
    margin: 0;
  }

  button {
    margin-top: 15px;
    border-radius: 1rem;
    padding: 3px 10px;
    border: grey 1px solid;
    background-color: white;
  }
`
export const InnerWrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`
