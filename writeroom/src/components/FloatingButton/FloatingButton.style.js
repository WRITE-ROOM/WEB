import styled from "styled-components";

export const Message = styled.div`
  background-color: #fff;
  width: 94px;
  height: 32px;
  border-radius: 5px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: -50px;
  left: 0px;

  display: none;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
    font-weight: 400;
    color: black;
  }

  // 말풍선 삼각형
  &:after {
    border-top: 10px solid #fff;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 32px;
    left: 10px;
  }
`;

export const FloatingButton = styled.div`
  width: 52px;
  height: 52px;
  background-color: #b5a994;
  border-radius: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  // position: fixed;
  position: absolute;
  right: ${(props) => (props.$right ? props.$right : "56px")};
  bottom: 40px;

  img {
    width: 29px;
  }

  &:hover > ${Message} {
    display: flex;
  }
`;
