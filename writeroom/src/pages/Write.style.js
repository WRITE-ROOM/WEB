import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 58px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  width: 33%;
  display: flex;
  justify-content: left;
  gap: 20px;
`;

export const Template = styled.div`
  width: 124px;
  position: relative;
`;

export const SpellCheck = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;

  p {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Counter = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    font-size: 16px;
    font-weight: 300;
    color: #9d8870;
  }
`;

export const CounterDetail = styled.div`
  p {
    font-size: 14px;
    color: #000;
    text-align: left;
    line-height: 24px;
  }

  span {
    color: #9d8870;
  }
`;

export const Center = styled.div`
  width: 33%;
  text-align: center;
`;

export const Right = styled.div`
  width: 33%;
  display: flex;
  justify-content: right;
  gap: 10px;

  div {
    width: 80px;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 25vw;
  position: relative;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.5)
  );
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(https://media.istockphoto.com/id/1431937796/vector/multicolor-of-stain-splash-watercolor-background.jpg?s=612x612&w=0&k=20&c=TP7AHbr-XISL22Z2oUIIW9dpzhH8v-dvR6d41RBPCF0=);

  position: absolute;
  z-index: -1;
`;

export const ImageControl = styled.div`
  width: 100%;
  height: 70%;
  padding: 40px 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: right;
  gap: 10px;

  button {
    display: block;
    border: none;
    width: 24px;
    height: 24px;
    background-color: transparent;
    cursor: pointer;
    color: #fff;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 30%;
  padding: 24px;
  padding-bottom: 0;
  box-sizing: border-box;

  input {
    border: none;
    width: 100%;
    background-color: transparent;
    color: white;
    margin-bottom: 5px;

    &#titleInput {
      height: 26px;
      font-size: 22px;
      font-weight: 700;
    }

    &#subtitleInput {
      height: 18px;
      font-size: 14px;
      font-weight: 300;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }
  }
`;

export const StyledHr = styled.hr`
  height: 1px;
  border: none;
  border-top: 1px solid white;
  margin-bottom: 5px;
`;

// 버튼
// width, padding, background-color, color, font-size, font-weight, border
export const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : "124px")};

  padding: ${(props) => (props.padding ? props.padding : "9px 0")};

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f2f2f2"};

  color: ${(props) => (props.color ? props.color : "black")};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};

  border: ${(props) => (props.border ? props.border : "none")};

  border-radius: 10px;

  cursor: pointer;
`;
