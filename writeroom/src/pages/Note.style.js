import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #fff;
`;

export const Header = styled.div`
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

export const Tools = styled.div`
  width: 100%;
  height: 70%;
  padding: 40px 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const NoteInfo = styled.div`
  width: 100%;
  height: 30%;
  padding: 24px;
  padding-bottom: 0;
  box-sizing: border-box;

  p {
    font-size: 14px;
    font-weight: 300;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Upper = styled.div`
  display: flex;
  margin-bottom: 5px;

  div {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }

  align-items: flex-end;

  h1 {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const Lower = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
`;

export const TagContainer = styled.div`
  position: relative;

  ul {
    display: flex;
    gap: 6px;
  }
`;

export const Tag = styled.li`
  width: 40px;
  height: 20px;
  background-color: #fff;

  font-size: 12px;
  font-weight: 500;
  color: #b5a994;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const HiddenTag = styled.ul`
  width: 80px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 30px;
  padding: 10px 10px 4px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  li {
    margin-bottom: 6px;
  }
`;

export const Content = styled.div`
  height: 500px;
  color: black;
  padding: 24px;
`;

export const StyledHr = styled.hr`
  height: 1px;
  border: none;
  color: ${(props) => (props.color ? props.color : "black")};
`;