import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 314px;
  height: 774px;
  border-radius: 0 10px 10px 0;
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: space-between; // 주축
  align-items: center; // 교차축
  border-bottom: gainsboro 3px solid;
`;

export const IconsBox = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  margin-right: 20px;
`;

export const BasicBox = styled.div`
  margin-top: 20px;
  display: flex;
  border-bottom: gainsboro 3px solid;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 220px;
  p {
    font-size: large;
  }
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h2 {
    font-size: 20px;
    padding-left: 20px;
  }

  p {
    font-size: 13px;
    color: #b5a995;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
