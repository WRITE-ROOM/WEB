import styled from "styled-components";

export const Container = styled.div`
  width: 604px;
  height: 161px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.79px solid rgba(229, 229, 229, 1);
  margin-top: 20px;

  hr {
    width: 572px;
    border: 1px solid rgba(229, 229, 229, 1);
  }
`;

export const Top = styled.div`
  width: 572px;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InfoBox = styled.div`
  width: 100px;
  height: 35px;

  h3 {
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
  }
`

export const DateAndTag = styled.div`
  width: 100px;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  p {
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 300;
    color: rgba(147, 147, 147, 1);
  }
`
export const Tag = styled.div`
  width: 34px;
  height: 13px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.24);
  border-radius: 39.61px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  color: rgba(181, 169, 148, 1);
`
export const Bookmark = styled.div`
  // width: 200px;
  position: relative;
  left: 380px;
`
export const Bottom = styled.div`
  width: 572px;
  height: 91px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    position: relative;
    bottom: 3px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
  }

  span {  
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }  
`;