import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 148px;
`;

export const HeaderRight = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
`;

export const MyProfile = styled.div`
  height: 32px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const SearchButton = styled.div`
  width: 80px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;

  span {
    font-size: 14px;
    color: #939393;
  }
`;
