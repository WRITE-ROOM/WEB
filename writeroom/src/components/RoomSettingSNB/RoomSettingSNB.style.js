import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 140px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 3px solid gainsboro;
  font-weight: bold;
  background-color: white;
`;
export const SNBBox = styled(Link)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid gainsboro;
`;
