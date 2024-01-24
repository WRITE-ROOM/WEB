import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 56px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  text-align: center;
  z-index: 100;
  padding: 16px 20px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  width: 33%;
  display: flex;
  justify-content: left;
`;

export const Template = styled.div`
  width: 100px;
  position: relative;
`;

export const Center = styled.div`
  width: 33%;
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
  height: 300px;

  position: relative;
  color: #fff;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

  display: flex;
  justify-content: space-between;
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

export const TitleContainer = styled.div`
  width: 800px;
  padding-left: 200px;
  padding-top: 140px;
  box-sizing: border-box;

  input {
    border: none;
    width: 100%;
    background-color: transparent;
    color: white;
    margin-bottom: 20px;

    &#titleInput {
      font-size: 30px;
      border-bottom: 1px solid #fff;
    }

    &#subtitleInput {
      font-size: 16px;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }
  }
`;

export const ImageControl = styled.div`
  color: black;
  width: 100px;
  padding-top: 50px;

  button {
    display: block;
    border: none;
    width: 24px;
    height: 24px;
    background-color: transparent;
    margin-bottom: 16px;
    cursor: pointer;
    color: #fff;
  }
`;
