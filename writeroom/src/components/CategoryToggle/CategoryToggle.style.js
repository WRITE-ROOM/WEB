import styled from "styled-components";

export const CategoryToggle = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const ToggleWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  p {
    margin-top: 10px;
    font-size: 13px;
    color: #b5a995;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 40px);
  margin-left: 15px;
  gap: 10px;

  button {
    width: 40px;
    border-radius: 15px;
    background: none;
    border: gray solid;
  }
`;
