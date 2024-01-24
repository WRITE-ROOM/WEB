import styled from "styled-components";

// props 상세
// width : 드롭다운의 너비
// top : 버튼보다 드롭다운이 얼마나 밑으로 내려갈지
// listWidth : 각 리스트의 너비

export const DropdownContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #fff;

  padding: 16px 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  position: absolute;
  right: 0px;
  top: ${(props) => (props.top ? props.top : "58px")};

  z-index: 1000;
  font-size: 14px;

  ul {
    padding: 0;

    li {
      width: ${(props) => (props.listWidth ? props.listWidth : "80px")};
      height: 34px;
      padding-left: 12px;
      border-radius: 10px;

      &:hover {
        background-color: #eaeaea;
      }

      a,
      p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: black;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`;
