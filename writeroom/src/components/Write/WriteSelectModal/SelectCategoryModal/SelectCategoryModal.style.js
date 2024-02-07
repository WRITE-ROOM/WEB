import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Back = styled.div`
  display: flex;
  justify-content: left;
  height: 30px;
`;

export const CategoryContainer = styled.ul`
  width: 100%;
  padding-left: 12px;

  li {
    text-align: left;
    height: 24px;
    font-size: 14px;
    font-weight: 500;
  }
`;